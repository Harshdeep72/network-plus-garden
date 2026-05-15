import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { notes, type NoteEntry } from 'virtual:notes'

const MATURITY_ICON: Record<string, string> = { seedling: '🌱', budding: '🌿', evergreen: '🌳' }

interface Props { open: boolean; onClose: () => void }

export function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const filtered: NoteEntry[] = query.length < 1
    ? notes.slice(0, 10)
    : notes.filter(n =>
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.folder.toLowerCase().includes(query.toLowerCase()) ||
        n.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 14)

  useEffect(() => {
    if (open) { setQuery(''); setSel(0); setTimeout(() => inputRef.current?.focus(), 30) }
  }, [open])
  useEffect(() => setSel(0), [query])

  function go(note: NoteEntry) { navigate(`/note/${note.slug}`); onClose() }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s+1, filtered.length-1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSel(s => Math.max(s-1, 0)) }
    if (e.key === 'Enter')     { filtered[sel] && go(filtered[sel]) }
    if (e.key === 'Escape')    onClose()
  }

  if (!open) return null

  return (
    <div
      style={{ position:'fixed',inset:0,zIndex:9000,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:'12vh',background:'rgba(0,0,0,0.7)',backdropFilter:'blur(6px)' }}
      onClick={onClose}
    >
      <div
        style={{ width:620,maxWidth:'92vw',background:'#0d1117',border:'1px solid rgba(0,212,255,0.35)',borderRadius:16,overflow:'hidden',boxShadow:'0 24px 64px rgba(0,0,0,0.6),0 0 0 1px rgba(0,212,255,0.08)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div style={{ display:'flex',alignItems:'center',gap:12,padding:'16px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
          <span className="material-symbols-outlined" style={{ color:'var(--cyan)',fontSize:20,flexShrink:0 }}>search</span>
          <input
            ref={inputRef} value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search notes, folders, tags…"
            style={{ flex:1,background:'none',border:'none',outline:'none',fontSize:16,color:'var(--text)',fontFamily:'Inter,sans-serif' }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ background:'none',border:'none',cursor:'pointer',color:'var(--text-faint)',display:'flex' }}>
              <span className="material-symbols-outlined" style={{ fontSize:18 }}>close</span>
            </button>
          )}
          <kbd style={{ fontSize:11,color:'var(--text-faint)',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:4,padding:'2px 6px',fontFamily:'monospace',flexShrink:0 }}>ESC</kbd>
        </div>

        {/* Results */}
        <div ref={listRef} style={{ maxHeight:420,overflowY:'auto' }}>
          {!query && (
            <div className="mono" style={{ padding:'8px 20px 4px',fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em' }}>
              Recent / All Notes — {notes.length} indexed
            </div>
          )}
          {filtered.length === 0 && (
            <div style={{ padding:'28px',textAlign:'center',color:'var(--text-faint)',fontSize:14 }}>
              No notes found for "<span style={{ color:'var(--cyan)' }}>{query}</span>"
            </div>
          )}
          {filtered.map((note, i) => (
            <div
              key={note.slug}
              onClick={() => go(note)}
              onMouseEnter={() => setSel(i)}
              style={{ padding:'11px 20px',cursor:'pointer',display:'flex',alignItems:'center',gap:14,borderBottom:'1px solid rgba(255,255,255,0.04)',background:i===sel?'rgba(0,212,255,0.07)':'transparent',borderLeft:i===sel?'3px solid var(--cyan)':'3px solid transparent',transition:'all 0.08s' }}
            >
              <span style={{ fontSize:16,flexShrink:0 }}>{MATURITY_ICON[note.maturity]}</span>
              <div style={{ flex:1,minWidth:0 }}>
                <div style={{ fontSize:14,fontWeight:600,color:i===sel?'var(--text)':'var(--text-dim)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis' }}>{note.title}</div>
                <div style={{ fontSize:11,color:'var(--text-faint)',display:'flex',alignItems:'center',gap:6,marginTop:2 }}>
                  <span>{note.folder}</span>
                  {note.tags.slice(0,2).map(t => (
                    <span key={t} style={{ background:'rgba(0,212,255,0.08)',color:'var(--cyan)',padding:'1px 5px',borderRadius:3,fontSize:9,fontFamily:'monospace' }}>{t}</span>
                  ))}
                </div>
              </div>
              {i===sel && <span className="material-symbols-outlined" style={{ color:'var(--cyan)',fontSize:16,flexShrink:0 }}>chevron_right</span>}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding:'9px 20px',borderTop:'1px solid rgba(255,255,255,0.07)',display:'flex',gap:16,alignItems:'center' }}>
          {[['↑↓','Navigate'],['↵','Open'],['ESC','Close']].map(([k,l]) => (
            <div key={k} style={{ display:'flex',alignItems:'center',gap:5,fontSize:11,color:'var(--text-faint)' }}>
              <kbd style={{ background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:3,padding:'1px 5px',fontFamily:'monospace',fontSize:10 }}>{k}</kbd>
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
