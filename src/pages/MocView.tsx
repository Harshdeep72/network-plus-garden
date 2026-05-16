import { useEffect, useRef, useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ForceGraph2D from 'react-force-graph-2d'
import { notes } from 'virtual:notes'
import { folderColor } from './KnowledgeGraph'

export default function MocView() {
  const { folder } = useParams()
  const navigate = useNavigate()
  const decodedFolder = decodeURIComponent(folder || '')
  
  const containerRef = useRef<HTMLDivElement>(null)
  const fgRef = useRef<any>(null)
  const [dim, setDim] = useState({ w: 0, h: 0 })
  const [hoverNode, setHoverNode] = useState<any | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        setDim({ w: entry.contentRect.width, h: entry.contentRect.height })
      }
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const folderNotes = useMemo(() => notes.filter(n => n.folder === decodedFolder), [decodedFolder])

  const graphData = useMemo(() => {
    const visibleSlugs = new Set(folderNotes.map(n => n.slug))
    const nodes = folderNotes.map(n => ({
      id: n.slug,
      name: n.title,
      val: n.maturity === 'evergreen' ? 7 : n.maturity === 'budding' ? 5 : 3.5,
      color: folderColor(n.folder),
      ...n
    }))

    const titleMap = new Map<string, typeof notes[0]>()
    for (const n of folderNotes) {
      titleMap.set(n.title.toLowerCase(), n)
      const stripped = n.title.replace(/^\d+\s+/, '').toLowerCase()
      titleMap.set(stripped, n)
      const parts = n.slug.split('--')
      if (parts[1]) titleMap.set(parts[1].replace(/-/g, ' '), n)
    }

    const links: { source: string; target: string }[] = []
    const seen = new Set<string>()

    for (const note of folderNotes) {
      for (const wl of note.wikilinks) {
        const target = titleMap.get(wl.toLowerCase())
        if (target && target.slug !== note.slug && visibleSlugs.has(target.slug)) {
          const edgeKey = [note.slug, target.slug].sort().join('|')
          if (!seen.has(edgeKey)) { 
            seen.add(edgeKey)
            links.push({ source: note.slug, target: target.slug })
          }
        }
      }
    }
    return { nodes, links }
  }, [folderNotes])

  if (!folderNotes.length) {
    return (
      <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:16 }}>
        <div style={{ fontSize:48 }}>🏜️</div>
        <div style={{ fontSize:20,color:'var(--text-faint)' }}>Folder not found</div>
        <Link to="/" style={{ color:'var(--cyan)',textDecoration:'none' }}>Return to Dashboard</Link>
      </div>
    )
  }

  return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      {/* Topbar */}
      <header style={{ height:60,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:16,flexShrink:0 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:34,height:34,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none',transition:'all 0.2s',background:'rgba(255,255,255,0.03)' }}>
          <span className="material-symbols-outlined" style={{ fontSize:18 }}>arrow_back</span>
        </Link>
        <div style={{ width:1,height:20,background:'var(--border-2)' }} />
        <div style={{ width:34,height:34,borderRadius:8,background:`${folderColor(decodedFolder)}15`,border:`1px solid ${folderColor(decodedFolder)}40`,display:'flex',alignItems:'center',justifyContent:'center' }}>
          <span className="material-symbols-outlined" style={{ fontSize:18,color:folderColor(decodedFolder) }}>folder_open</span>
        </div>
        <div>
          <div style={{ fontSize:16,fontWeight:700,color:'var(--text)' }}>{decodedFolder}</div>
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)' }}>Map of Content · {folderNotes.length} notes</div>
        </div>
      </header>

      <div style={{ flex:1,display:'flex',overflow:'hidden' }}>
        {/* Left: Notes List */}
        <aside style={{ width:360,borderRight:'1px solid var(--border)',display:'flex',flexDirection:'column',background:'rgba(255,255,255,0.01)' }}>
          <div style={{ padding:'20px 24px',borderBottom:'1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize:11,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:12 }}>Domain Notes</div>
            <div style={{ fontSize:13,color:'var(--text-dim)',lineHeight:1.5 }}>
              Explore the contents of the <strong>{decodedFolder}</strong> domain. Click any note to read the full content.
            </div>
          </div>
          <div style={{ flex:1,overflowY:'auto',padding:'12px 16px',display:'flex',flexDirection:'column',gap:8 }}>
            {folderNotes.map(n => (
              <button key={n.slug} onClick={() => navigate(`/note/${n.slug}`)} style={{ textAlign:'left',background:'rgba(255,255,255,0.02)',border:'1px solid var(--border-2)',borderRadius:10,padding:'14px',cursor:'pointer',transition:'all 0.2s',display:'flex',gap:12,alignItems:'flex-start' }}>
                <span style={{ fontSize:18,flexShrink:0 }}>
                  {n.maturity === 'seedling' ? '🌱' : n.maturity === 'budding' ? '🌿' : '🌳'}
                </span>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ fontSize:13,fontWeight:600,color:'var(--text)',marginBottom:4 }}>{n.title}</div>
                  <div style={{ fontSize:11,color:'var(--text-faint)',overflow:'hidden',textOverflow:'ellipsis',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical' }}>{n.excerpt}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Right: Graph */}
        <div ref={containerRef} style={{ flex:1,position:'relative' }}>
          {dim.w > 0 && dim.h > 0 && (
            <ForceGraph2D
              ref={fgRef}
              width={dim.w}
              height={dim.h}
              graphData={graphData}
              nodeLabel={() => ''}
              nodeColor="color"
              nodeRelSize={1.5}
              linkColor={() => 'rgba(255, 255, 255, 0.1)'}
              linkWidth={1}
              onNodeClick={(node: any) => navigate(`/note/${node.id}`)}
              onNodeHover={(node: any) => setHoverNode(node)}
              nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const r = node.val;
                const isHov = node === hoverNode;
                ctx.beginPath();
                ctx.arc(node.x, node.y, r + (isHov ? 4 : 0), 0, 2 * Math.PI, false);
                ctx.fillStyle = isHov ? '#ffffff' : node.color;
                ctx.fill();
                
                if (globalScale > 2 || isHov) {
                  const fontSize = 14 / globalScale;
                  ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  ctx.fillStyle = isHov ? '#ffffff' : 'rgba(255, 255, 255, 0.8)';
                  ctx.fillText(node.name, node.x, node.y + r + (10 / globalScale) + fontSize);
                }
              }}
              linkDirectionalParticles={2}
              linkDirectionalParticleWidth={1.5}
              linkDirectionalParticleColor={() => 'rgba(255, 255, 255, 0.3)'}
            />
          )}

          {/* Custom Tooltip */}
          {hoverNode && (
            <div style={{ position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',background:'rgba(8,12,18,0.95)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:10,padding:'10px 16px',textAlign:'center',pointerEvents:'none',zIndex:10 }}>
              <div style={{ fontSize:13,fontWeight:600,color:'var(--text)' }}>{hoverNode.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
