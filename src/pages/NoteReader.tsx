import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { notes, type NoteEntry } from 'virtual:notes'
import { toast } from '../components/Toast'

/* ── Markdown renderer ──────────────────────────────────── */
function esc(s: string) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

function slugify(text: string) {
  return text.replace(/<[^>]*>?/gm, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function inline(s: string): string {
  return s
    .replace(/!\[\[.*?\]\]/g, '')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<span class="wikilink">$2</span>')
    .replace(/\[\[([^\]]+)\]\]/g, '<span class="wikilink">$1</span>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="ext-link">$1</a>')
}

function renderMd(raw: string): string {
  const text = raw
    .replace(/^---\n[\s\S]*?\n---\n/, '') // Hide YAML frontmatter
    .replace(/^# .+\n/m, '')
    .replace(/\*\*(?:Module\/Section|Tags):\*\*[^\n]+\n/gm, '')
  const lines = text.split('\n')
  let html = ''
  let inCode = false; let codeLang = ''; let codeLines: string[] = []
  let inList = false; let listItems: string[] = []
  let inOList = false; let oListItems: string[] = []
  let inQuote = false; let quoteLines: string[] = []
  
  const flushAll = () => {
    if (inList)  { html += `<ul>${listItems.map(l=>`<li>${l}</li>`).join('')}</ul>`;  listItems=[]; inList=false }
    if (inOList) { html += `<ol>${oListItems.map(l=>`<li>${l}</li>`).join('')}</ol>`; oListItems=[]; inOList=false }
    if (inQuote) {
      const first = quoteLines[0]
      const match = first.match(/^\[!(.*?)\]([-+]?)\s*(.*)$/i)
      if (match) {
        const type = match[1].toLowerCase()
        const collapse = match[2]
        const title = match[3] || type.charAt(0).toUpperCase() + type.slice(1)
        const icon = type === 'info' ? 'info' : type === 'tip' ? 'lightbulb' : type === 'question' ? 'help' : (type === 'warning' || type === 'important') ? 'warning' : 'feed'
        const color = type === 'info' ? 'var(--cyan)' : type === 'tip' ? '#00ff88' : type === 'question' ? '#a78bfa' : (type === 'warning' || type === 'important') ? '#fb923c' : 'var(--text-dim)'
        const contentHtml = quoteLines.slice(1).map(l => `<div style="margin-top:6px">${inline(l)}</div>`).join('')
        
        if (collapse) {
          html += `<details style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-left:3px solid ${color};padding:12px 16px;border-radius:8px;margin:16px 0;">
            <summary style="font-weight:600;color:${color};cursor:pointer;display:flex;align-items:center;gap:8px;outline:none;user-select:none;"><span class="material-symbols-outlined" style="font-size:18px">${icon}</span>${inline(title)}</summary>
            <div style="margin-top:12px;color:var(--text-dim);font-size:14px;line-height:1.6">${contentHtml}</div>
          </details>`
        } else {
          html += `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-left:3px solid ${color};padding:12px 16px;border-radius:8px;margin:16px 0;">
            <div style="font-weight:600;color:${color};display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span class="material-symbols-outlined" style="font-size:18px">${icon}</span>${inline(title)}</div>
            <div style="color:var(--text-dim);font-size:14px;line-height:1.6">${contentHtml}</div>
          </div>`
        }
      } else {
        html += `<blockquote>${quoteLines.map(l => inline(l)).join('<br/>')}</blockquote>`
      }
      quoteLines = []; inQuote = false
    }
  }

  for (const line of lines) {
    if (line.startsWith('```')) {
      flushAll()
      if (!inCode) { inCode=true; codeLang=line.slice(3).trim()||'text'; codeLines=[] }
      else { inCode=false; html+=`<div class="code-block"><div class="code-header"><span class="code-lang">${codeLang}</span><button onclick="navigator.clipboard.writeText(this.closest('.code-block').querySelector('code').textContent)">Copy</button></div><pre><code>${esc(codeLines.join('\n'))}</code></pre></div>` }
      continue
    }
    if (inCode) { codeLines.push(line); continue }
    
    if (!line.match(/^[\*\-] /)) { if (inList) flushAll() }
    if (!line.match(/^\d+\. /)) { if (inOList) flushAll() }
    if (!line.startsWith('> ')) { if (inQuote) flushAll() }

    if (line.startsWith('#### ')) { flushAll(); const title=inline(line.slice(5)); html+=`<h4 id="${slugify(title)}">${title}</h4>`; continue }
    if (line.startsWith('### '))  { flushAll(); const title=inline(line.slice(4)); html+=`<h3 id="${slugify(title)}">${title}</h3>`; continue }
    if (line.startsWith('## '))   { flushAll(); const title=inline(line.slice(3)); html+=`<h2 id="${slugify(title)}">${title}</h2>`; continue }
    if (line.startsWith('# '))    { flushAll(); continue }
    
    if (line.match(/^[\*\-] /))   { inList=true; listItems.push(inline(line.slice(2))); continue }
    if (line.match(/^\d+\. /))    { inOList=true; oListItems.push(inline(line.replace(/^\d+\. /,''))); continue }
    if (line.startsWith('> '))    { inQuote=true; quoteLines.push(line.slice(2)); continue }
    
    if (line.match(/^---+$/))     { flushAll(); html+=`<hr/>`; continue }
    if (line.trim()==='')         { flushAll(); html+=`<div class="spacer"></div>`; continue }
    if (line.match(/^!\[\[/))     { continue }
    
    html+=`<p>${inline(line)}</p>`
  }
  flushAll()
  return html
}

/* ── Helpers ─────────────────────────────────────────────── */
const MATURITY = { seedling:'🌿', budding:'🌿', evergreen:'🌿' } as const
const folders = [...new Set(notes.map(n => n.folder))]

interface TOCItem { id: string, title: string, level: number }

function usePomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<'focus'|'break'>('focus')

  useEffect(() => {
    let interval: any
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      if (mode === 'focus') { setMode('break'); setTimeLeft(5 * 60) }
      else { setMode('focus'); setTimeLeft(25 * 60) }
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft, mode])

  const toggle = () => setIsRunning(!isRunning)
  const reset = () => { setIsRunning(false); setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60) }
  const switchMode = (m: 'focus'|'break') => { setMode(m); setIsRunning(false); setTimeLeft(m === 'focus' ? 25 * 60 : 5 * 60) }

  return { timeLeft, isRunning, mode, toggle, reset, switchMode }
}

/* ── Component ──────────────────────────────────────────── */
export default function NoteReader({ onSearch }: { onSearch?: () => void }) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [videoOpen, setVideoOpen] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const pomodoro = usePomodoro()
  const toc = useMemo(() => {
    if (!content) return []
    const items: TOCItem[] = []
    const lines = content.split('\n')
    let inCode = false
    const SKIP = new Set(['steps', 'notes', 'overview', 'summary', 'introduction', 'resources'])
    for (const line of lines) {
      if (line.startsWith('```')) { inCode = !inCode; continue }
      if (inCode) continue
      if (line.match(/^##+ /)) {
        const level = line.match(/^##+/)![0].length
        if (level > 3) continue  // only H2 and H3
        const rawTitle = line.replace(/^##+ /, '').trimEnd()
        const displayTitle = rawTitle
          .replace(/\[\[([^\]]+)\]\]/g, '$1')
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/:$/, '')
          .trim()
        if (SKIP.has(displayTitle.toLowerCase())) continue
        if (!displayTitle) continue
        const id = slugify(displayTitle)
        items.push({ id, title: displayTitle, level })
      }
    }
    // If too many items, collapse to H2-only for readability
    if (items.length > 10) {
      return items.filter(item => item.level === 2)
    }
    return items
  }, [content])

  const note: NoteEntry | undefined = notes.find(n => n.slug === slug)
  const folderNotes = notes.filter(n => n.folder === note?.folder)
  
  // Separate domains to avoid bleeding Next/Prev links
  const isCollege = note?.folder === 'INT245'
  const displayFolders = isCollege ? ['INT245'] : folders.filter(f => f !== 'INT245')

  const folderIdx = note ? displayFolders.indexOf(note.folder) : -1
  const prevFolder = folderIdx > 0 ? displayFolders[folderIdx - 1] : null
  const nextFolder = folderIdx < displayFolders.length - 1 ? displayFolders[folderIdx + 1] : null
  const prevFolderFirst = prevFolder ? notes.find(n => n.folder === prevFolder) : null
  const nextFolderFirst = nextFolder ? notes.find(n => n.folder === nextFolder) : null

  // Content comes pre-bundled in the virtual module — no fetch needed
  useEffect(() => {
    if (!note) return
    setVideoOpen(true)
    setContent(note.content ?? '')
  }, [note?.slug])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'ArrowLeft'  && note?.prevSlug) navigate(`/note/${note.prevSlug}`)
      if (e.altKey && e.key === 'ArrowRight' && note?.nextSlug) navigate(`/note/${note.nextSlug}`)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); onSearch?.() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note?.prevSlug, note?.nextSlug, navigate])

  function handleCopy() {
    navigator.clipboard.writeText(content).then(() => toast('Copied!', 'Full note copied to clipboard', 'success'))
  }

  if (!note) return (
    <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100dvh',background:'var(--bg)',flexDirection:'column',gap:16 }}>
      <span className="material-symbols-outlined" style={{ fontSize:48,color:'var(--text-faint)' }}>search_off</span>
      <div style={{ fontSize:18,color:'var(--text-faint)' }}>Note not found</div>
      <Link to="/" style={{ color:'var(--cyan)',fontSize:14 }}>← Back to Dashboard</Link>
    </div>
  )

  return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>

      {/* ─── Top bar ─── */}
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,flexShrink:0,gap:10 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none',flexShrink:0 }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <div style={{ width:1,height:18,background:'var(--border-2)',flexShrink:0 }} />
        <div style={{ flex:1,minWidth:0 }}>
          <div style={{ fontSize:14,fontWeight:600,color:'var(--text)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis' }}>{note.title}</div>
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)' }}>{note.folder} · {note.fileIndex+1} of {folderNotes.length}</div>
        </div>
        {/* Search button */}
        <button onClick={onSearch} style={{ display:'flex',alignItems:'center',gap:8,padding:'6px 12px',background:'rgba(255,255,255,0.04)',border:'1px solid var(--border-2)',borderRadius:8,cursor:'pointer',color:'var(--text-faint)',fontSize:12,fontFamily:'inherit',flexShrink:0 }}>
          <span className="material-symbols-outlined" style={{ fontSize:15 }}>search</span>
          <span className="mono" style={{ fontSize:10 }}>⌘K</span>
        </button>
        <span className={`tag tag-${note.maturity==='budding'?'green':'cyan'}`} style={{ flexShrink:0 }}>
          {MATURITY[note.maturity]} {note.maturity}
        </span>
        <button onClick={handleCopy} title="Copy raw markdown" style={{ width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.03)',color:'var(--text-dim)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
          <span className="material-symbols-outlined" style={{ fontSize:16 }}>content_copy</span>
        </button>
      </header>

      <div style={{ flex:1, display:'grid', gridTemplateColumns:'240px 1fr 280px', width:'100%' }}>

        {/* ─── Sidebar ─── */}
        <aside style={{ borderRight:'1px solid var(--border)',padding:'20px 12px',position:'sticky',top:58,height:'calc(100dvh - 58px)',overflowY:'auto',display:'flex',flexDirection:'column',gap:0 }}>

          {/* Current folder notes */}
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8,padding:'0 6px' }}>
            {note.folder}
          </div>
          <nav style={{ display:'flex',flexDirection:'column',gap:1,marginBottom:4 }}>
            {folderNotes.map(n => (
              <Link key={n.slug} to={`/note/${n.slug}`}
                style={{ display:'flex',alignItems:'center',gap:7,padding:'6px 10px',borderRadius:7,textDecoration:'none',fontSize:12,color:n.slug===slug?'var(--cyan)':'var(--text-faint)',background:n.slug===slug?'rgba(0,212,255,0.07)':'transparent',borderLeft:n.slug===slug?'2px solid var(--cyan)':'2px solid transparent',transition:'all 0.12s',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis' }}>
                <span style={{ fontSize:10,flexShrink:0 }}>{MATURITY[n.maturity]}</span>
                <span style={{ overflow:'hidden',textOverflow:'ellipsis' }}>{n.title}</span>
              </Link>
            ))}
          </nav>

          {/* Folder prev/next */}
          <div style={{ display:'flex',flexDirection:'column',gap:4,padding:'8px 4px',margin:'4px 0',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)' }}>
            {prevFolderFirst && (
              <Link to={`/note/${prevFolderFirst.slug}`} style={{ display:'flex',alignItems:'center',gap:6,padding:'7px 10px',borderRadius:8,textDecoration:'none',fontSize:11,color:'var(--text-faint)',background:'rgba(255,255,255,0.02)',border:'1px solid var(--border)',transition:'all 0.15s' }}>
                <span className="material-symbols-outlined" style={{ fontSize:13 }}>arrow_back</span>
                <div style={{ minWidth:0 }}>
                  <div style={{ fontSize:9,color:'var(--text-faint)',marginBottom:1 }}>Prev Folder</div>
                  <div style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'var(--text-dim)' }}>{prevFolder}</div>
                </div>
              </Link>
            )}
            {nextFolderFirst && (
              <Link to={`/note/${nextFolderFirst.slug}`} style={{ display:'flex',alignItems:'center',gap:6,padding:'7px 10px',borderRadius:8,textDecoration:'none',fontSize:11,color:'var(--cyan)',background:'rgba(0,212,255,0.06)',border:'1px solid rgba(0,212,255,0.2)',transition:'all 0.15s' }}>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ fontSize:9,marginBottom:1,color:'var(--cyan)',opacity:0.7 }}>Next Folder</div>
                  <div style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{nextFolder}</div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize:13,flexShrink:0 }}>arrow_forward</span>
              </Link>
            )}
          </div>

          {/* All Folders */}
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',margin:'10px 6px 6px' }}>
            {isCollege ? 'College Folders' : 'Network+ Folders'} ({displayFolders.length})
          </div>
          <div style={{ flex:1,overflowY:'auto' }}>
            {displayFolders.map((f, i) => {
              const first = notes.find(n => n.folder === f)!
              const isCurrent = f === note.folder
              return (
                <Link key={f} to={`/note/${first.slug}`}
                  style={{ display:'flex',alignItems:'center',gap:8,padding:'6px 10px',borderRadius:7,fontSize:12,color:isCurrent?'var(--cyan)':'var(--text-faint)',textDecoration:'none',background:isCurrent?'rgba(0,212,255,0.06)':'transparent',marginBottom:1,transition:'color 0.12s,background 0.12s',borderLeft:isCurrent?'2px solid var(--cyan)':'2px solid transparent' }}>
                  <span className="mono" style={{ fontSize:10,color:'var(--text-faint)',flexShrink:0,width:18,textAlign:'right' }}>{i+1}</span>
                  <span style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{f}</span>
                </Link>
              )
            })}
          </div>
        </aside>

        {/* ─── Article ─── */}
        <main style={{ padding:'36px 52px 80px',overflowY:'auto',maxWidth:820 }}>
          {/* Breadcrumb */}
          <div style={{ display:'flex',alignItems:'center',gap:6,marginBottom:24,flexWrap:'wrap' }}>
            <Link to="/" style={{ fontSize:11,color:'var(--text-faint)',textDecoration:'none' }}>Dashboard</Link>
            <span style={{ color:'var(--text-faint)',fontSize:11 }}>/</span>
            {note.prevSlug===null && nextFolderFirst && (
              <>
                <span style={{ fontSize:11,color:'var(--text-faint)' }}>{note.folder}</span>
                <span style={{ color:'var(--text-faint)',fontSize:11 }}>/</span>
              </>
            )}
            <span className="mono" style={{ fontSize:11,color:'var(--text-faint)' }}>{note.folder}</span>
            <span style={{ color:'var(--text-faint)',fontSize:11 }}>/</span>
            <span className="mono" style={{ fontSize:11,color:'var(--cyan)' }}>{note.title}</span>
          </div>

          <h1 style={{ fontSize:30,fontWeight:800,color:'var(--text)',lineHeight:1.2,marginBottom:14 }}>{note.title}</h1>
          <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginBottom:28 }}>
            {note.tags.filter(t => !t.includes('seedling')&&!t.includes('budding')&&!t.includes('evergreen')).slice(0,6).map(t => (
              <span key={t} className="tag tag-cyan" style={{ fontSize:10 }}>{t}</span>
            ))}
          </div>
          {/* ─── Video Player ─── */}
          {(note.youtubeId || note.videoPath) && (
            <div style={{ marginBottom: 28, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.03)' }}>
              {/* Player header */}
              <div style={{ display:'flex',alignItems:'center',gap:10,padding:'10px 16px',borderBottom: videoOpen ? '1px solid rgba(0,212,255,0.12)' : 'none', cursor:'pointer' }}
                onClick={() => setVideoOpen(v => !v)}>
                <span className="material-symbols-outlined" style={{ fontSize:18, color:'var(--cyan)' }}>
                  {note.youtubeId ? 'smart_display' : 'play_circle'}
                </span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12, fontWeight:600, color:'var(--text)' }}>Lecture Video</div>
                  <div className="mono" style={{ fontSize:10, color:'var(--text-faint)' }}>
                    {note.youtubeId ? '▶ YouTube · Unlisted' : note.title}
                  </div>
                </div>
                {/* Speed controls — only for local video when open */}
                {videoOpen && !note.youtubeId && (
                  <div style={{ display:'flex',gap:4 }} onClick={e => e.stopPropagation()}>
                    {[0.75, 1, 1.25, 1.5, 1.75, 2].map(spd => (
                      <button key={spd} onClick={() => { if (videoRef.current) videoRef.current.playbackRate = spd }}
                        style={{ padding:'2px 7px',borderRadius:5,border:'1px solid rgba(0,212,255,0.2)',background:'rgba(0,212,255,0.06)',color:'var(--cyan)',fontSize:10,cursor:'pointer',fontFamily:'monospace' }}>
                        {spd}×
                      </button>
                    ))}
                  </div>
                )}
                <span className="material-symbols-outlined" style={{ fontSize:18, color:'var(--text-faint)', transition:'transform 0.2s', transform: videoOpen ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </div>
              {/* Player body */}
              {videoOpen && (
                note.youtubeId ? (
                  <div style={{ position:'relative', paddingBottom:'56.25%', height:0, background:'#000' }}>
                    <iframe
                      key={note.youtubeId}
                      src={`https://www.youtube.com/embed/${note.youtubeId}?rel=0&modestbranding=1`}
                      title={note.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', border:'none' }}
                    />
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    key={slug}
                    controls
                    preload="metadata"
                    style={{ width:'100%', display:'block', maxHeight:480, background:'#000', outline:'none' }}
                    src={`/api/video?slug=${encodeURIComponent(note.slug)}`}
                  />
                )
              )}
            </div>
          )}

          <div className="note-content" dangerouslySetInnerHTML={{ __html: renderMd(content) }} />

          {/* Prev / Next note */}
          <div style={{ display:'flex',justifyContent:'space-between',marginTop:48,paddingTop:20,borderTop:'1px solid var(--border)',gap:12 }}>
            {note.prevSlug ? (
              <Link to={`/note/${note.prevSlug}`} style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none',padding:'10px 16px',borderRadius:10,border:'1px solid var(--border-2)',color:'var(--text-dim)',fontSize:13,minWidth:0,flex:1 }}>
                <span className="material-symbols-outlined" style={{ fontSize:16,flexShrink:0 }}>arrow_back</span>
                <span style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{note.prevTitle}</span>
              </Link>
            ) : prevFolderFirst ? (
              <Link to={`/note/${prevFolderFirst.slug}`} style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none',padding:'10px 16px',borderRadius:10,border:'1px solid var(--border-2)',color:'var(--text-faint)',fontSize:13,minWidth:0,flex:1 }}>
                <span className="material-symbols-outlined" style={{ fontSize:16,flexShrink:0 }}>arrow_back</span>
                <div style={{ minWidth:0 }}>
                  <div style={{ fontSize:9,color:'var(--text-faint)' }}>Prev Folder</div>
                  <div style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{prevFolder}</div>
                </div>
              </Link>
            ) : <div />}

            {note.nextSlug ? (
              <Link to={`/note/${note.nextSlug}`} style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none',padding:'10px 16px',borderRadius:10,background:'rgba(0,212,255,0.08)',border:'1px solid rgba(0,212,255,0.25)',color:'var(--cyan)',fontSize:13,minWidth:0,flex:1,justifyContent:'flex-end' }}>
                <span style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{note.nextTitle}</span>
                <span className="material-symbols-outlined" style={{ fontSize:16,flexShrink:0 }}>arrow_forward</span>
              </Link>
            ) : nextFolderFirst ? (
              <Link to={`/note/${nextFolderFirst.slug}`} style={{ display:'flex',alignItems:'center',gap:8,textDecoration:'none',padding:'10px 16px',borderRadius:10,background:'rgba(0,212,255,0.08)',border:'1px solid rgba(0,212,255,0.25)',color:'var(--cyan)',fontSize:13,minWidth:0,flex:1,justifyContent:'flex-end' }}>
                <div style={{ minWidth:0,textAlign:'right' }}>
                  <div style={{ fontSize:9,color:'var(--cyan)',opacity:0.7 }}>Next Folder</div>
                  <div style={{ overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{nextFolder}</div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize:16,flexShrink:0 }}>arrow_forward</span>
              </Link>
            ) : null}
          </div>
          <div className="mono" style={{ textAlign:'center',marginTop:10,fontSize:10,color:'var(--text-faint)' }}>
            Alt+← / Alt+→ to navigate · ⌘K to search
          </div>
        </main>

        {/* ─── Right Sidebar (TOC & Study Tools) ─── */}
        <aside style={{ borderLeft:'1px solid var(--border)',padding:'24px 20px',position:'sticky',top:58,height:'calc(100dvh - 58px)',overflowY:'auto',display:'flex',flexDirection:'column',gap:32 }}>
          
          {/* Pomodoro Timer */}
          <div>
            <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:12 }}>Study Timer</div>
            <div style={{ background:'rgba(255,255,255,0.02)',border:'1px solid var(--border)',borderRadius:12,padding:16,display:'flex',flexDirection:'column',alignItems:'center',gap:12 }}>
              <div style={{ fontSize:32,fontWeight:700,color:pomodoro.isRunning ? 'var(--cyan)' : 'var(--text)',fontVariantNumeric:'tabular-nums' }}>
                {Math.floor(pomodoro.timeLeft / 60).toString().padStart(2, '0')}:{(pomodoro.timeLeft % 60).toString().padStart(2, '0')}
              </div>
              <div style={{ display:'flex',gap:8,background:'rgba(0,0,0,0.2)',padding:4,borderRadius:8 }}>
                <button onClick={() => pomodoro.switchMode('focus')} style={{ padding:'4px 12px',borderRadius:6,border:'none',background:pomodoro.mode==='focus'?'rgba(255,255,255,0.1)':'transparent',color:pomodoro.mode==='focus'?'#fff':'var(--text-faint)',fontSize:11,cursor:'pointer',fontWeight:600 }}>Focus</button>
                <button onClick={() => pomodoro.switchMode('break')} style={{ padding:'4px 12px',borderRadius:6,border:'none',background:pomodoro.mode==='break'?'rgba(255,255,255,0.1)':'transparent',color:pomodoro.mode==='break'?'#fff':'var(--text-faint)',fontSize:11,cursor:'pointer',fontWeight:600 }}>Break</button>
              </div>
              <div style={{ display:'flex',gap:8,width:'100%' }}>
                <button onClick={pomodoro.toggle} style={{ flex:1,padding:'8px',borderRadius:8,border:'none',background:pomodoro.isRunning?'rgba(255,255,255,0.1)':'var(--cyan)',color:pomodoro.isRunning?'var(--text)':'#000',fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize:16 }}>{pomodoro.isRunning ? 'pause' : 'play_arrow'}</span>
                  {pomodoro.isRunning ? 'Pause' : 'Start'}
                </button>
                <button onClick={pomodoro.reset} style={{ width:36,padding:'8px',borderRadius:8,border:'1px solid var(--border)',background:'transparent',color:'var(--text-faint)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize:16 }}>replay</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          {toc.length > 0 && (
            <div style={{ flex:1,minHeight:0,display:'flex',flexDirection:'column' }}>
              <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:12 }}>On this page</div>
              <nav style={{ display:'flex',flexDirection:'column',gap:8,overflowY:'auto',paddingRight:8,scrollbarWidth:'thin' }}>
                {toc.map(item => (
                  <a key={item.id}
                    href="#"
                    title={item.title}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.getElementById(item.id)
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    style={{ 
                      fontSize:item.level===2?12:11,
                      color:item.level===2?'var(--text-dim)':'var(--text-faint)',
                      textDecoration:'none',
                      paddingLeft:(item.level-2)*10,
                      lineHeight:1.4,
                      display:'block',
                      whiteSpace:'nowrap',
                      overflow:'hidden',
                      textOverflow:'ellipsis',
                      transition:'color 0.15s',
                      cursor:'pointer',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = item.level===2?'var(--text-dim)':'var(--text-faint)'}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          )}

        </aside>

      </div>
    </div>
  )
}
