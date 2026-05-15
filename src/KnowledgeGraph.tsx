import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { notes } from 'virtual:notes'

/* ── colour palette per folder ─────────────────────────── */
const FOLDER_COLORS = [
  '#00d4ff','#00ff88','#a78bfa','#fb923c','#f472b6',
  '#34d399','#fbbf24','#60a5fa','#e879f9','#2dd4bf',
  '#f87171','#818cf8','#c084fc','#4ade80','#facc15',
  '#38bdf8','#fb7185','#a3e635','#e2e8f0','#94a3b8',
]
const folders = [...new Set(notes.map(n => n.folder))]
const folderColor = (f: string) => FOLDER_COLORS[folders.indexOf(f) % FOLDER_COLORS.length]

/* ── build graph data ───────────────────────────────────── */
function buildGraph() {
  // Build lookup by multiple keys: full title, stripped title, slug fragment
  const titleMap = new Map<string, typeof notes[0]>()
  for (const n of notes) {
    titleMap.set(n.title.toLowerCase(), n)
    const stripped = n.title.replace(/^\d+\s+/, '').toLowerCase()
    titleMap.set(stripped, n)
    const parts = n.slug.split('--')
    if (parts[1]) titleMap.set(parts[1].replace(/-/g, ' '), n)
  }
  const edges: { source: string; target: string }[] = []
  const seen = new Set<string>()
  for (const note of notes) {
    for (const wl of note.wikilinks) {
      const target = titleMap.get(wl.toLowerCase())
      if (target && target.slug !== note.slug) {
        const edgeKey = [note.slug, target.slug].sort().join('|')
        if (!seen.has(edgeKey)) { seen.add(edgeKey); edges.push({ source: note.slug, target: target.slug }) }
      }
    }
  }
  return edges
}

const graphEdges = buildGraph()

/* ── Force simulation (no library) ────────────────────────*/
interface Pos { x: number; y: number; vx: number; vy: number }

function initPositions(w: number, h: number): Map<string, Pos> {
  const map = new Map<string, Pos>()
  // group by folder in rough rings
  for (const n of notes) {
    const fi = folders.indexOf(n.folder)
    const angle = (fi / folders.length) * Math.PI * 2 + (n.fileIndex * 0.4)
    const radius = 120 + (fi % 4) * 60 + Math.random() * 40
    map.set(n.slug, {
      x: w/2 + Math.cos(angle) * radius + (Math.random()-0.5)*30,
      y: h/2 + Math.sin(angle) * radius + (Math.random()-0.5)*30,
      vx: 0, vy: 0
    })
  }
  return map
}

export default function KnowledgeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const posRef = useRef<Map<string, Pos>>(new Map())
  const rafRef = useRef<number>(0)
  const scaleRef = useRef(1)
  const offsetRef = useRef({ x: 0, y: 0 })
  const draggingRef = useRef<{ slug: string; ox: number; oy: number } | null>(null)
  const panRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null)
  const [hovered, setHovered] = useState<typeof notes[0] | null>(null)
  const [filterFolder, setFilterFolder] = useState<string | null>(null)
  const [simDone, setSimDone] = useState(false)
  const navigate = useNavigate()

  const visibleSlugs = new Set(
    filterFolder ? notes.filter(n => n.folder === filterFolder).map(n => n.slug) : notes.map(n => n.slug)
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const W = canvas.width = canvas.offsetWidth
    const H = canvas.height = canvas.offsetHeight
    posRef.current = initPositions(W, H)

    let iter = 0
    const MAX = 300

    function tick() {
      const pos = posRef.current
      const k = Math.sqrt((W * H) / notes.length)
      const temp = Math.max(0.2, 1 - iter / MAX)

      // repulsion
      for (const a of notes) {
        const pa = pos.get(a.slug)!
        for (const b of notes) {
          if (a.slug === b.slug) continue
          const pb = pos.get(b.slug)!
          const dx = pa.x - pb.x, dy = pa.y - pb.y
          const d = Math.max(1, Math.sqrt(dx*dx+dy*dy))
          const f = (k*k) / (d*d) * 80
          pa.vx += (dx/d)*f; pa.vy += (dy/d)*f
        }
      }
      // attraction along edges
      for (const e of graphEdges) {
        const pa = pos.get(e.source), pb = pos.get(e.target)
        if (!pa || !pb) continue
        const dx = pb.x-pa.x, dy = pb.y-pa.y
        const d = Math.max(1, Math.sqrt(dx*dx+dy*dy))
        const f = (d*d)/(k*120)
        pa.vx += (dx/d)*f; pa.vy += (dy/d)*f
        pb.vx -= (dx/d)*f; pb.vy -= (dy/d)*f
      }
      // gravity to center
      for (const n of notes) {
        const p = pos.get(n.slug)!
        p.vx += (W/2-p.x)*0.0008
        p.vy += (H/2-p.y)*0.0008
      }
      // apply velocity with damping + boundary
      for (const n of notes) {
        const p = pos.get(n.slug)!
        p.vx *= 0.85; p.vy *= 0.85
        p.x += Math.max(-8, Math.min(8, p.vx*temp))
        p.y += Math.max(-8, Math.min(8, p.vy*temp))
        p.x = Math.max(20, Math.min(W-20, p.x))
        p.y = Math.max(20, Math.min(H-20, p.y))
      }
      iter++
      draw()
      if (iter < MAX) rafRef.current = requestAnimationFrame(tick)
      else setSimDone(true)
    }

    function draw() {
      const ctx = canvas.getContext('2d')!
      ctx.clearRect(0,0,W,H)
      ctx.save()
      ctx.translate(offsetRef.current.x, offsetRef.current.y)
      ctx.scale(scaleRef.current, scaleRef.current)

      // edges
      for (const e of graphEdges) {
        const pa = posRef.current.get(e.source), pb = posRef.current.get(e.target)
        if (!pa || !pb) continue
        if (!visibleSlugs.has(e.source) || !visibleSlugs.has(e.target)) continue
        ctx.beginPath()
        ctx.moveTo(pa.x, pa.y)
        ctx.lineTo(pb.x, pb.y)
        ctx.strokeStyle = 'rgba(0,212,255,0.08)'
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
      // notes
      for (const n of notes) {
        if (!visibleSlugs.has(n.slug)) continue
        const p = posRef.current.get(n.slug)!
        const r = n.maturity==='evergreen' ? 7 : n.maturity==='budding' ? 5 : 3.5
        const col = folderColor(n.folder)
        const isHov = hovered?.slug === n.slug
        ctx.beginPath()
        ctx.arc(p.x, p.y, r + (isHov ? 3 : 0), 0, Math.PI*2)
        ctx.fillStyle = isHov ? '#ffffff' : col
        ctx.globalAlpha = isHov ? 1 : 0.8
        ctx.fill()
        ctx.globalAlpha = 1
        if (isHov) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, r+8, 0, Math.PI*2)
          ctx.strokeStyle = col
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }
      ctx.restore()
    }

    rafRef.current = requestAnimationFrame(tick)

    // expose draw for pan/zoom
    ;(canvas as any).__draw = draw

    return () => cancelAnimationFrame(rafRef.current)
  }, [filterFolder])

  // re-draw when hovered changes (without restarting sim)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !(canvas as any).__draw) return
    ;(canvas as any).__draw()
  }, [hovered])

  function screenToWorld(cx: number, cy: number) {
    return {
      x: (cx - offsetRef.current.x) / scaleRef.current,
      y: (cy - offsetRef.current.y) / scaleRef.current,
    }
  }

  function hitTest(cx: number, cy: number) {
    const { x, y } = screenToWorld(cx, cy)
    for (const n of notes) {
      if (!visibleSlugs.has(n.slug)) continue
      const p = posRef.current.get(n.slug)!
      const r = n.maturity==='evergreen' ? 10 : n.maturity==='budding' ? 8 : 6
      if ((p.x-x)**2 + (p.y-y)**2 < r*r) return n
    }
    return null
  }

  function onMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left, cy = e.clientY - rect.top
    if (panRef.current) {
      offsetRef.current.x = panRef.current.ox + (e.clientX - panRef.current.sx)
      offsetRef.current.y = panRef.current.oy + (e.clientY - panRef.current.sy)
      ;(e.currentTarget as any).__draw?.()
      return
    }
    if (draggingRef.current) {
      const { x, y } = screenToWorld(cx, cy)
      const p = posRef.current.get(draggingRef.current.slug)!
      p.x = x + draggingRef.current.ox
      p.y = y + draggingRef.current.oy
      ;(e.currentTarget as any).__draw?.()
      return
    }
    setHovered(hitTest(cx, cy))
    e.currentTarget.style.cursor = hitTest(cx, cy) ? 'pointer' : 'grab'
  }

  function onMouseDown(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left, cy = e.clientY - rect.top
    const hit = hitTest(cx, cy)
    if (hit) {
      const p = posRef.current.get(hit.slug)!
      const { x, y } = screenToWorld(cx, cy)
      draggingRef.current = { slug: hit.slug, ox: p.x-x, oy: p.y-y }
    } else {
      panRef.current = { sx: e.clientX, sy: e.clientY, ox: offsetRef.current.x, oy: offsetRef.current.y }
    }
  }

  function onMouseUp(e: React.MouseEvent<HTMLCanvasElement>) {
    if (draggingRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top
      if (hitTest(cx, cy)?.slug === draggingRef.current.slug) {
        navigate(`/note/${draggingRef.current.slug}`)
      }
    }
    draggingRef.current = null; panRef.current = null
  }

  function onWheel(e: React.WheelEvent<HTMLCanvasElement>) {
    e.preventDefault()
    const factor = e.deltaY > 0 ? 0.9 : 1.1
    scaleRef.current = Math.max(0.2, Math.min(4, scaleRef.current * factor))
    ;(e.currentTarget as any).__draw?.()
  }

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
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)' }}>{notes.length} notes · {graphEdges.length} connections</div>
        </div>
        <div style={{ flex:1 }} />
        {!simDone && <div className="mono" style={{ fontSize:11,color:'var(--text-faint)',display:'flex',alignItems:'center',gap:6 }}><span className="material-symbols-outlined" style={{ fontSize:14 }}>sync</span>Simulating…</div>}
        <button onClick={() => { scaleRef.current = 1; offsetRef.current = {x:0,y:0}; (canvasRef.current as any)?.__draw?.() }} style={{ padding:'6px 12px',borderRadius:8,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.04)',color:'var(--text-dim)',cursor:'pointer',fontSize:12,fontFamily:'inherit',display:'flex',alignItems:'center',gap:6 }}>
          <span className="material-symbols-outlined" style={{ fontSize:14 }}>center_focus_strong</span> Reset
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

        {/* Canvas */}
        <div style={{ flex:1,position:'relative' }}>
          <canvas
            ref={canvasRef}
            style={{ width:'100%',height:'100%',display:'block',cursor:'grab' }}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={() => { setHovered(null); draggingRef.current=null; panRef.current=null }}
            onWheel={onWheel}
          />
          {/* Tooltip */}
          {hovered && (
            <div style={{ position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',background:'rgba(8,12,18,0.95)',border:'1px solid rgba(0,212,255,0.3)',borderRadius:10,padding:'10px 16px',maxWidth:320,textAlign:'center',pointerEvents:'none' }}>
              <div style={{ fontSize:13,fontWeight:600,color:'var(--text)',marginBottom:4 }}>{hovered.title}</div>
              <div style={{ fontSize:11,color:'var(--text-faint)',marginBottom:6 }}>{hovered.folder}</div>
              <div style={{ display:'flex',justifyContent:'center',gap:6,flexWrap:'wrap' }}>
                {hovered.tags.slice(0,3).map(t=><span key={t} className="tag tag-cyan" style={{ fontSize:9 }}>{t}</span>)}
              </div>
              <div className="mono" style={{ fontSize:9,color:'var(--text-faint)',marginTop:6 }}>Click to open · Drag to move</div>
            </div>
          )}

          {/* Legend */}
          <div style={{ position:'absolute',top:16,right:16,background:'rgba(8,12,18,0.85)',border:'1px solid var(--border)',borderRadius:10,padding:'12px 14px',display:'flex',flexDirection:'column',gap:6 }}>
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
