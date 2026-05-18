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

// Obsidian-style background
const BG = '#0f1117'

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

    // Physics tuning: Obsidian-like feel
    setTimeout(() => {
      if (fgRef.current) {
        fgRef.current.d3Force('charge').strength(-180)
        fgRef.current.d3Force('link').distance((link: any) => link.isSpine ? 40 : 80)
        fgRef.current.d3Force('center').strength(0.05)
      }
    }, 200)

    return () => ro.disconnect()
  }, [])

  const graphData = useMemo(() => {
    const visibleNotes = filterFolder
      ? notes.filter(n => n.folder === filterFolder)
      : notes

    const visibleSlugs = new Set(visibleNotes.map(n => n.slug))

    // Build connection degree map (like Obsidian sizes nodes by connections)
    const degree = new Map<string, number>()
    for (const n of visibleNotes) degree.set(n.slug, 0)

    const titleMap = new Map<string, typeof notes[0]>()
    for (const n of visibleNotes) {
      titleMap.set(n.title.toLowerCase(), n)
      const stripped = n.title.replace(/^\d+\s+/, '').toLowerCase()
      titleMap.set(stripped, n)
      const parts = n.slug.split('--')
      if (parts[1]) titleMap.set(parts[1].replace(/-/g, ' '), n)
    }

    const links: { source: string; target: string; isSpine?: boolean }[] = []
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
            degree.set(note.slug, (degree.get(note.slug) ?? 0) + 1)
            degree.set(target.slug, (degree.get(target.slug) ?? 0) + 1)
          }
        }
      }

      if (note.nextSlug && visibleSlugs.has(note.nextSlug)) {
        const edgeKey = [note.slug, note.nextSlug].sort().join('|')
        if (!seen.has(edgeKey)) {
          seen.add(edgeKey)
          links.push({ source: note.slug, target: note.nextSlug, isSpine: true })
          degree.set(note.slug, (degree.get(note.slug) ?? 0) + 1)
          degree.set(note.nextSlug, (degree.get(note.nextSlug) ?? 0) + 1)
        }
      }
    }

    const nodes = visibleNotes.map(n => {
      const d = degree.get(n.slug) ?? 0
      const maturityBonus = n.maturity === 'evergreen' ? 2 : n.maturity === 'budding' ? 1 : 0
      const val = Math.max(2, Math.min(10, 2 + d * 0.6 + maturityBonus))
      return { id: n.slug, name: n.title, val, color: folderColor(n.folder), degree: d, ...n }
    })

    return { nodes, links }
  }, [filterFolder])

  return (
    <div style={{ background: BG, minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Topbar */}
      <header style={{ height: 52, borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', padding: '0 20px', background: 'rgba(15,17,23,0.95)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50, gap: 10, flexShrink: 0 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 7, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
        </Link>
        <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.07)' }} />
        <span className="material-symbols-outlined" style={{ color: '#00d4ff', fontSize: 18 }}>hub</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Knowledge Graph</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{graphData.nodes.length} notes · {graphData.links.length} connections</div>
        </div>
        <div style={{ flex: 1 }} />
        <button onClick={() => fgRef.current?.zoomToFit(600)} style={{ padding: '5px 11px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 11, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 13 }}>center_focus_strong</span> Reset View
        </button>
      </header>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Folder filter sidebar */}
        <aside style={{ width: 188, borderRight: '1px solid rgba(255,255,255,0.06)', padding: '14px 8px', overflowY: 'auto', flexShrink: 0, background: 'rgba(10,12,18,0.6)' }}>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8, padding: '0 8px', fontFamily: 'monospace' }}>Folders</div>
          <button onClick={() => setFilterFolder(null)} style={{ width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: 5, border: 'none', background: !filterFolder ? 'rgba(0,212,255,0.1)' : 'transparent', color: !filterFolder ? '#00d4ff' : 'rgba(255,255,255,0.35)', cursor: 'pointer', fontSize: 11, fontFamily: 'inherit', marginBottom: 1, display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', flexShrink: 0 }} />
            All Folders
          </button>
          {folders.map(f => (
            <button key={f} onClick={() => setFilterFolder(f === filterFolder ? null : f)} style={{ width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: 5, border: 'none', background: filterFolder === f ? 'rgba(255,255,255,0.05)' : 'transparent', color: filterFolder === f ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 10, fontFamily: 'inherit', marginBottom: 1, display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: folderColor(f), flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{f}</span>
            </button>
          ))}
        </aside>

        {/* Canvas */}
        <div ref={containerRef} style={{ flex: 1, position: 'relative', background: BG }}>
          {dim.w > 0 && dim.h > 0 && (
            <ForceGraph2D
              ref={fgRef}
              width={dim.w}
              height={dim.h}
              graphData={graphData}
              backgroundColor={BG}
              nodeLabel={() => ''}
              nodeRelSize={1}
              linkColor={(link: any) => link.isSpine ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.13)'}
              linkWidth={(link: any) => link.isSpine ? 0.4 : 0.7}
              linkLineDash={(link: any) => link.isSpine ? [3, 4] : null}
              onNodeClick={(node: any) => navigate(`/note/${node.id}`)}
              onNodeHover={(node: any) => setHoverNode(node)}
              nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const r = Math.max(node.val ?? 2, 1.5)
                const isHov = node === hoverNode
                if (node.x == null || node.y == null) return

                const color: string = node.color ?? '#00d4ff'

                // Glow halo only on hover (Obsidian-style: clean by default)
                if (isHov) {
                  try {
                    const gr = r + 14
                    const g = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, gr)
                    g.addColorStop(0, color + '66')
                    g.addColorStop(1, 'rgba(0,0,0,0)')
                    ctx.beginPath()
                    ctx.arc(node.x, node.y, gr, 0, 2 * Math.PI)
                    ctx.fillStyle = g
                    ctx.fill()
                  } catch { /* noop */ }
                }

                // Core dot
                ctx.beginPath()
                ctx.arc(node.x, node.y, isHov ? r + 1.5 : r, 0, 2 * Math.PI)
                ctx.fillStyle = isHov ? '#ffffff' : color
                ctx.globalAlpha = isHov ? 1 : 0.82
                ctx.fill()
                ctx.globalAlpha = 1

                // Obsidian-style label: always rendered but only visible when node is large enough
                // screenR = how big the node appears on screen in pixels
                const screenR = r * globalScale
                const showLabel = screenR > 10 || isHov

                if (showLabel) {
                  const LABEL_PX = 11
                  const fontSize = LABEL_PX / globalScale
                  ctx.font = `${isHov ? '600' : '400'} ${fontSize}px "Inter", system-ui, sans-serif`
                  ctx.textAlign = 'center'
                  ctx.textBaseline = 'top'

                  const label = node.name as string
                  const tw = ctx.measureText(label).width
                  const pad = 1.5 / globalScale
                  const labelY = node.y + r + 3 / globalScale

                  // Pill background for readability (our custom touch over Obsidian)
                  ctx.fillStyle = 'rgba(15,17,23,0.75)'
                  ctx.fillRect(node.x - tw / 2 - pad, labelY - pad / 2, tw + pad * 2, fontSize + pad)

                  ctx.fillStyle = isHov ? '#ffffff' : 'rgba(195,205,220,0.6)'
                  ctx.fillText(label, node.x, labelY)
                }
              }}
              linkDirectionalParticles={0}
            />
          )}

          {/* Hover tooltip */}
          {hoverNode && (
            <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', background: 'rgba(10,12,18,0.97)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 10, padding: '10px 16px', maxWidth: 300, textAlign: 'center', pointerEvents: 'none', backdropFilter: 'blur(16px)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{hoverNode.name}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: folderColor(hoverNode.folder), display: 'inline-block' }} />
                {hoverNode.folder}
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                <span>{hoverNode.degree ?? 0} links</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                {hoverNode.tags?.slice(0, 4).map((t: string) => (
                  <span key={t} style={{ padding: '1px 6px', borderRadius: 4, background: 'rgba(0,212,255,0.08)', color: '#00d4ff', fontSize: 9, fontFamily: 'monospace' }}>{t}</span>
                ))}
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.18)', marginTop: 7 }}>Click to open note</div>
            </div>
          )}

          {/* Legend */}
          <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(10,12,18,0.88)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 5, pointerEvents: 'none' }}>
            {[['🌱', 'seedling'], ['🌿', 'budding'], ['🌳', 'evergreen']].map(([e, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: 'rgba(255,255,255,0.28)' }}>
                <span>{e}</span>{l}
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 3, paddingTop: 5, fontSize: 9, color: 'rgba(255,255,255,0.18)' }}>Scroll to zoom · Drag to pan</div>
          </div>
        </div>
      </div>
    </div>
  )
}
