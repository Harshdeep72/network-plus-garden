import { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { notes, type NoteEntry } from 'virtual:notes'
import { toast } from '../components/Toast'

/* ── Markdown renderer ──────────────────────────────────── */
function esc(s: string) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

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
    .replace(/^# .+\n/m, '')
    .replace(/\*\*(?:Module\/Section|Tags):\*\*[^\n]+\n/gm, '')
  const lines = text.split('\n')
  let html = ''
  let inCode = false; let codeLang = ''; let codeLines: string[] = []
  let inList = false; let listItems: string[] = []
  let inOList = false; let oListItems: string[] = []
  const flushList = () => {
    if (inList)  { html += `<ul>${listItems.map(l=>`<li>${l}</li>`).join('')}</ul>`;  listItems=[]; inList=false }
    if (inOList) { html += `<ol>${oListItems.map(l=>`<li>${l}</li>`).join('')}</ol>`; oListItems=[]; inOList=false }
  }
  for (const line of lines) {
    if (line.startsWith('```')) {
      if (!inCode) { inCode=true; codeLang=line.slice(3).trim()||'text'; codeLines=[] }
      else { inCode=false; html+=`<div class="code-block"><div class="code-header"><span class="code-lang">${codeLang}</span><button onclick="navigator.clipboard.writeText(this.closest('.code-block').querySelector('code').textContent)">Copy</button></div><pre><code>${esc(codeLines.join('\n'))}</code></pre></div>` }
      continue
    }
    if (inCode) { codeLines.push(line); continue }
    if (!line.match(/^[\*\-\d] /) && !line.match(/^\d+\. /)) flushList()
    if (line.startsWith('#### ')) { html+=`<h4>${inline(line.slice(5))}</h4>`; continue }
    if (line.startsWith('### '))  { html+=`<h3>${inline(line.slice(4))}</h3>`; continue }
    if (line.startsWith('## '))   { html+=`<h2>${inline(line.slice(3))}</h2>`; continue }
    if (line.startsWith('# '))    { continue }
    if (line.match(/^[\*\-] /))   { inList=true; listItems.push(inline(line.slice(2))); continue }
    if (line.match(/^\d+\. /))    { inOList=true; oListItems.push(inline(line.replace(/^\d+\. /,''))); continue }
    if (line.startsWith('> '))    { html+=`<blockquote>${inline(line.slice(2))}</blockquote>`; continue }
    if (line.match(/^---+$/))     { html+=`<hr/>`; continue }
    if (line.trim()==='')         { html+=`<div class="spacer"></div>`; continue }
    if (line.match(/^!\[\[/))     { continue }
    html+=`<p>${inline(line)}</p>`
  }
  flushList()
  return html
}

/* ── Helpers ─────────────────────────────────────────────── */
const MATURITY = { seedling:'🌱', budding:'🌿', evergreen:'🌳' } as const
const folders = [...new Set(notes.map(n => n.folder))]

/* ── Component ──────────────────────────────────────────── */
export default function NoteReader({ onSearch }: { onSearch?: () => void }) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [videoOpen, setVideoOpen] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const note: NoteEntry | undefined = notes.find(n => n.slug === slug)
  const folderNotes = notes.filter(n => n.folder === note?.folder)
  const folderIdx = note ? folders.indexOf(note.folder) : -1
  const prevFolder = folderIdx > 0 ? folders[folderIdx - 1] : null
  const nextFolder = folderIdx < folders.length - 1 ? folders[folderIdx + 1] : null
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

      <div style={{ flex:1,display:'grid',gridTemplateColumns:'240px 1fr',maxWidth:1280,margin:'0 auto',width:'100%' }}>

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
            All Folders ({folders.length})
          </div>
          <div style={{ flex:1,overflowY:'auto' }}>
            {folders.map((f, i) => {
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
          {note.videoPath && (
            <div style={{ marginBottom: 28, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.03)' }}>
              {/* Player header */}
              <div style={{ display:'flex',alignItems:'center',gap:10,padding:'10px 16px',borderBottom: videoOpen ? '1px solid rgba(0,212,255,0.12)' : 'none', cursor:'pointer' }}
                onClick={() => setVideoOpen(v => !v)}>
                <span className="material-symbols-outlined" style={{ fontSize:18, color:'var(--cyan)' }}>play_circle</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12, fontWeight:600, color:'var(--text)' }}>Lecture Video</div>
                  <div className="mono" style={{ fontSize:10, color:'var(--text-faint)' }}>{note.title}</div>
                </div>
                {/* Speed controls — only when open */}
                {videoOpen && (
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
              {/* Video element */}
              {videoOpen && (
                <video
                  ref={videoRef}
                  key={slug}  /* re-mount when slug changes so src reloads */
                  controls
                  preload="metadata"
                  style={{ width:'100%', display:'block', maxHeight:480, background:'#000', outline:'none' }}
                  src={`/api/video?slug=${encodeURIComponent(note.slug)}`}
                />
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
      </div>
    </div>
  )
}
