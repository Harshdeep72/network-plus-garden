import { useEffect, useRef, useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ForceGraph2D from 'react-force-graph-2d'
import { notes } from 'virtual:notes'

/* ── colour palette per folder ─────────────────────────── */
export const FOLDER_COLORS = [
  '#00d4ff','#00ff88','#a78bfa','#fb923c','#f472b6',
  '#34d399','#fbbf24','#60a5fa','#e879f9','#2dd4bf',
  '#f87171','#818cf8','#c084fc','#4ade80','#facc15',
  '#38bdf8','#fb7185','#a3e635','#e2e8f0','#94a3b8',
]
const folders = [...new Set(notes.map(n => n.folder))]
export const folderColor = (f: string) => FOLDER_COLORS[folders.indexOf(f) % FOLDER_COLORS.length]

export default function KnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null)
  const fgRef = useRef<any>(null)
  const [dim, setDim] = useState({ w: 0, h: 0 })
  const [hoverNode, setHoverNode] = useState<any | null>(null)
  const [filterFolder, setFilterFolder] = useState<string | null>(null)
  const navigate = useNavigate()

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

  const graphData = useMemo(() => {
    const visibleNotes = filterFolder 
      ? notes.filter(n => n.folder === filterFolder)
      : notes

    const visibleSlugs = new Set(visibleNotes.map(n => n.slug))

    const nodes = visibleNotes.map(n => ({
      id: n.slug,
      name: n.title,
      val: n.maturity === 'evergreen' ? 7 : n.maturity === 'budding' ? 5 : 3.5,
      color: folderColor(n.folder),
      ...n
    }))

    const titleMap = new Map<string, typeof notes[0]>()
    for (const n of visibleNotes) {
      titleMap.set(n.title.toLowerCase(), n)
      const stripped = n.title.replace(/^\d+\s+/, '').toLowerCase()
      titleMap.set(stripped, n)
      const parts = n.slug.split('--')
      if (parts[1]) titleMap.set(parts[1].replace(/-/g, ' '), n)
    }

    const links: { source: string; target: string }[] = []
    const seen = new Set<string>()

    for (const note of visibleNotes) {
      for (const wl of note.wikilinks) {
        let target = titleMap.get(wl.toLowerCase())
        if (!target) target = titleMap.get(wl.toLowerCase().replace(/[_]/g, ' '))
        if (!target) target = titleMap.get(wl.toLowerCase().replace(/[-]/g, ' '))
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
  }, [filterFolder])

  return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      {/* Topbar */}
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12,flexShrink:0 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <div style={{ width:1,height:18,background:'var(--border-2)' }} />
        <span className="material-symbols-outlined" style={{ color:'var(--cyan)',fontSize:20 }}>hub</span>
        <div>
          <div style={{ fontSize:14,fontWeight:700,color:'var(--text)' }}>Knowledge Graph</div>
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)' }}>{graphData.nodes.length} notes · {graphData.links.length} connections</div>
        </div>
        <div style={{ flex:1 }} />
        <button onClick={() => fgRef.current?.zoomToFit(400)} style={{ padding:'6px 12px',borderRadius:8,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.04)',color:'var(--text-dim)',cursor:'pointer',fontSize:12,fontFamily:'inherit',display:'flex',alignItems:'center',gap:6 }}>
          <span className="material-symbols-outlined" style={{ fontSize:14 }}>center_focus_strong</span> Reset View
        </button>
      </header>

      <div style={{ flex:1,display:'flex',overflow:'hidden' }}>
        {/* Folder filter */}
        <aside style={{ width:200,borderRight:'1px solid var(--border)',padding:'16px 10px',overflowY:'auto',flexShrink:0 }}>
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:10,padding:'0 6px' }}>Filter by Folder</div>
          <button onClick={() => setFilterFolder(null)} style={{ width:'100%',textAlign:'left',padding:'6px 10px',borderRadius:7,border:'none',background:!filterFolder?'rgba(0,212,255,0.08)':'transparent',color:!filterFolder?'var(--cyan)':'var(--text-faint)',cursor:'pointer',fontSize:12,fontFamily:'inherit',marginBottom:2,display:'flex',alignItems:'center',gap:8 }}>
            <span style={{ width:8,height:8,borderRadius:'50%',background:'var(--cyan)',flexShrink:0 }} />
            All Folders
          </button>
          {folders.map(f => (
            <button key={f} onClick={() => setFilterFolder(f===filterFolder?null:f)} style={{ width:'100%',textAlign:'left',padding:'6px 10px',borderRadius:7,border:'none',background:filterFolder===f?'rgba(255,255,255,0.05)':'transparent',color:filterFolder===f?'var(--text)':'var(--text-faint)',cursor:'pointer',fontSize:11,fontFamily:'inherit',marginBottom:1,display:'flex',alignItems:'center',gap:8,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis' }}>
              <span style={{ width:8,height:8,borderRadius:'50%',background:folderColor(f),flexShrink:0 }} />
              <span style={{ overflow:'hidden',textOverflow:'ellipsis' }}>{f}</span>
            </button>
          ))}
        </aside>

        {/* Canvas container */}
        <div ref={containerRef} style={{ flex:1,position:'relative' }}>
          {dim.w > 0 && dim.h > 0 && (
            <ForceGraph2D
              ref={fgRef}
              width={dim.w}
              height={dim.h}
              graphData={graphData}
              nodeLabel={() => ''} // Disabled default title tooltip in favor of bottom overlay
              nodeColor="color"
              nodeRelSize={1}
              linkColor={() => 'rgba(0, 212, 255, 0.15)'}
              linkWidth={0.8}
              onNodeClick={(node: any) => navigate(`/note/${node.id}`)}
              onNodeHover={(node: any) => setHoverNode(node)}
              nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const r = node.val;
                const isHov = node === hoverNode;
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, r + (isHov ? 3 : 0), 0, 2 * Math.PI, false);
                ctx.fillStyle = isHov ? '#ffffff' : node.color;
                ctx.globalAlpha = isHov ? 1 : 0.8;
                ctx.fill();
                ctx.globalAlpha = 1;
                
                if (isHov) {
                  ctx.beginPath();
                  ctx.arc(node.x, node.y, r + 6, 0, 2 * Math.PI, false);
                  ctx.strokeStyle = node.color;
                  ctx.lineWidth = 1.5 / globalScale;
                  ctx.stroke();
                }

                // Draw text label if zoomed in enough or if hovered
                if (globalScale > 2.5 || isHov) {
                  const fontSize = 12 / globalScale;
                  ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  ctx.fillStyle = isHov ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';
                  ctx.fillText(node.name, node.x, node.y + r + (8 / globalScale) + fontSize);
                }
              }}
              // Make lines point slightly more elegantly
              linkDirectionalParticles={2}
              linkDirectionalParticleWidth={1.2}
              linkDirectionalParticleColor={() => 'rgba(0, 212, 255, 0.4)'}
              // Adjust layout forces to spread notes out comfortably
            />
          )}

          {/* Custom Tooltip Overlay */}
          {hoverNode && (
            <div style={{ position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',background:'rgba(8,12,18,0.95)',border:'1px solid rgba(0,212,255,0.3)',borderRadius:10,padding:'10px 16px',maxWidth:320,textAlign:'center',pointerEvents:'none' }}>
              <div style={{ fontSize:13,fontWeight:600,color:'var(--text)',marginBottom:4 }}>{hoverNode.name}</div>
              <div style={{ fontSize:11,color:'var(--text-faint)',marginBottom:6 }}>{hoverNode.folder}</div>
              <div style={{ display:'flex',justifyContent:'center',gap:6,flexWrap:'wrap' }}>
                {hoverNode.tags?.slice(0,3).map((t: string)=><span key={t} className="tag tag-cyan" style={{ fontSize:9 }}>{t}</span>)}
              </div>
              <div className="mono" style={{ fontSize:9,color:'var(--text-faint)',marginTop:6 }}>Click to open · Drag to move</div>
            </div>
          )}

          {/* Legend */}
          <div style={{ position:'absolute',top:16,right:16,background:'rgba(8,12,18,0.85)',border:'1px solid var(--border)',borderRadius:10,padding:'12px 14px',display:'flex',flexDirection:'column',gap:6,pointerEvents:'none' }}>
            {[['🌱','seedling','#00d4ff',3.5],['🌿','budding','#00ff88',5],['🌳','evergreen','#a78bfa',7]].map(([e,l,c,r])=>(
              <div key={String(l)} style={{ display:'flex',alignItems:'center',gap:8,fontSize:11,color:'var(--text-faint)' }}>
                <svg width={20} height={20}><circle cx={10} cy={10} r={Number(r)} fill={String(c)} opacity={0.8} /></svg>
                {e} {l}
              </div>
            ))}
            <div style={{ borderTop:'1px solid var(--border)',marginTop:2,paddingTop:6,fontSize:10,color:'var(--text-faint)' }}>Scroll to zoom · Drag canvas to pan</div>
          </div>
        </div>
      </div>
    </div>
  )
}
