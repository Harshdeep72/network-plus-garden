import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

/* ── Types ─────────────────────────────────────────────── */
type Mode = 'focus' | 'short' | 'long'
interface Session { date: string; mode: Mode; duration: number; completed: boolean }

const DURATIONS: Record<Mode, number> = { focus: 25, short: 5, long: 15 }
const MODE_LABEL: Record<Mode, string> = { focus: 'SYS.FOCUS', short: 'SYS.SHORT_BRK', long: 'SYS.LONG_BRK' }
const MODE_COLOR: Record<Mode, string> = { focus: 'var(--cyan)', short: 'var(--green)', long: '#a78bfa' }

const STORAGE_KEY = 'cybernetTimerSessions'
function loadSessions(): Session[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
}
function saveSessions(s: Session[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s.slice(-200)))
}

function todayKey() { return new Date().toISOString().slice(0, 10) }
function fmtTime(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function StudyTimer() {
  const [mode, setMode] = useState<Mode>('focus')
  const [customDurations, setCustomDurations] = useState<Record<Mode, number>>({ ...DURATIONS })
  const [totalSecs, setTotalSecs] = useState(DURATIONS.focus * 60)
  const [remaining, setRemaining] = useState(DURATIONS.focus * 60)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState<Session[]>(loadSessions)
  const [pomCount, setPomCount] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  
  // Objective Tracking
  const [objective, setObjective] = useState<string>('')
  
  const [, setTick] = useState(0) // force re-render
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)

  const pct = remaining / totalSecs

  const selectMode = useCallback((m: Mode) => {
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setMode(m)
    const d = customDurations[m] * 60
    setTotalSecs(d)
    setRemaining(d)
  }, [customDurations])

  useEffect(() => { selectMode(mode) }, []) // init

  useEffect(() => {
    if (!running) return
    startTimeRef.current = Date.now() - (totalSecs - remaining) * 1000
    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
      const rem = Math.max(0, totalSecs - elapsed)
      setRemaining(rem)
      setTick(t => t+1)
      if (rem === 0) {
        clearInterval(intervalRef.current!)
        setRunning(false)
        // record completed session
        const newSession: Session = { date: todayKey(), mode, duration: customDurations[mode], completed: true }
        const updated = [...sessions, newSession]
        setSessions(updated)
        saveSessions(updated)
        if (mode === 'focus') setPomCount(p => p+1)
        // Notification
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification("CyberNet System", { body: `${MODE_LABEL[mode]} complete. Awaiting next command.`, icon: '/vite.svg' })
        }
        // beep
        try {
          const ctx = new AudioContext()
          const osc = ctx.createOscillator()
          osc.connect(ctx.destination)
          osc.frequency.value = 880
          osc.start()
          setTimeout(() => osc.stop(), 300)
        } catch {}
      }
    }, 250)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [running])

  function toggle() {
    if (remaining === 0) { selectMode(mode); return }
    if (!running && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
    setRunning(r => !r)
  }

  function reset() { setRunning(false); if (intervalRef.current) clearInterval(intervalRef.current); selectMode(mode) }

  function skipToBreak() {
    if (pomCount > 0 && pomCount % 4 === 0) selectMode('long')
    else selectMode('short')
  }

  // Stats
  const today = sessions.filter(s => s.date === todayKey())
  const focusToday = today.filter(s => s.mode === 'focus' && s.completed)
  const focusMinsToday = focusToday.reduce((a,s) => a + s.duration, 0)
  const totalFocusSessions = sessions.filter(s => s.mode === 'focus' && s.completed).length

  // Streak
  const daySet = new Set(sessions.filter(s=>s.mode==='focus'&&s.completed).map(s=>s.date))
  let streak = 0
  const d = new Date()
  while (daySet.has(d.toISOString().slice(0,10))) { streak++; d.setDate(d.getDate()-1) }

  // Heatmap Data (Last 14 days)
  const heatmapData = []
  for (let i = 13; i >= 0; i--) {
    const hd = new Date()
    hd.setDate(hd.getDate() - i)
    const dateStr = hd.toISOString().slice(0, 10)
    const count = sessions.filter(s => s.date === dateStr && s.mode === 'focus' && s.completed).length
    heatmapData.push({ date: dateStr, count })
  }

  // SVG Ring Math
  const R = 110
  const CIRC = 2 * Math.PI * R

  return (
    <div className="grid-bg" style={{ minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12,flexShrink:0 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <span className="material-symbols-outlined" style={{ color:'var(--cyan)',fontSize:20 }}>timer</span>
        <div style={{ fontSize:14,fontWeight:700,color:'var(--text)', letterSpacing:'0.05em' }} className="mono">CYBERNET // TIMER_PROTOCOL</div>
        <div style={{ flex:1 }} />
        <button onClick={() => setShowSettings(s => !s)} style={{ display:'flex',alignItems:'center',gap:6,padding:'6px 12px',borderRadius:8,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.03)',color:'var(--text-dim)',cursor:'pointer',fontFamily:'inherit',fontSize:12 }}>
          <span className="material-symbols-outlined" style={{ fontSize:15 }}>settings</span> Config
        </button>
      </header>

      <div style={{ flex:1,display:'grid',gridTemplateColumns:'1fr 340px',maxWidth:1200,margin:'0 auto',width:'100%',padding:'24px',gap:'24px' }}>

        {/* Main HUD Column */}
        <main style={{ display:'flex',flexDirection:'column',gap:24 }}>
          
          {/* Objective Box */}
          <div className="glass scan-line" style={{ padding: '20px 24px', position: 'relative', overflow: 'hidden' }}>
            <div className="mono" style={{ fontSize: 10, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
              Active Objective Directive
            </div>
            {running && objective ? (
              <div className="mono cursor-blink" style={{ fontSize: 18, color: 'var(--text)', fontWeight: 600 }}>
                {`> ${objective}`}
              </div>
            ) : (
              <input 
                type="text" 
                placeholder="> Enter mission objective..." 
                value={objective}
                onChange={e => setObjective(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', color: 'var(--text)', fontSize: 18, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}
              />
            )}
          </div>

          {/* Central Timer Interface */}
          <div className="glass" style={{ flex:1, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'40px 32px',position:'relative' }}>
            
            {/* Mode selector */}
            <div style={{ display:'flex',gap:6,background:'rgba(255,255,255,0.02)',padding:6,borderRadius:12,border:'1px solid var(--border-2)',marginBottom:40,zIndex:10 }}>
              {(['focus','short','long'] as Mode[]).map(m => (
                <button key={m} onClick={() => selectMode(m)}
                  className="mono"
                  style={{ padding:'8px 16px',borderRadius:8,border:'1px solid transparent',background:mode===m?`${MODE_COLOR[m]}20`:'transparent',color:mode===m?MODE_COLOR[m]:'var(--text-faint)',cursor:'pointer',fontSize:12,fontWeight:mode===m?600:400,transition:'all 0.2s',borderColor:mode===m?`${MODE_COLOR[m]}50`:'transparent' }}>
                  {MODE_LABEL[m]}
                </button>
              ))}
            </div>

            {/* Circular HUD Timer */}
            <div style={{ position:'relative',width:300,height:300,marginBottom:40 }}>
              {/* Decorative outer rings */}
              <div style={{ position:'absolute',inset:-20,border:'1px dashed rgba(255,255,255,0.1)',borderRadius:'50%',animation:'rotate-slow 30s linear infinite' }} />
              <div style={{ position:'absolute',inset:-35,border:'1px dotted rgba(0,212,255,0.2)',borderRadius:'50%',animation:'rotate-slow 40s linear infinite reverse' }} />
              
              {/* Pulse effect when running */}
              {running && <div className="pulse-dot" style={{ position:'absolute',inset:0,borderRadius:'50%',boxShadow:`0 0 0 0 ${MODE_COLOR[mode]}80` }} />}

              <svg width={300} height={300} style={{ transform:'rotate(-90deg)', filter: running ? `drop-shadow(0 0 10px ${MODE_COLOR[mode]}50)` : 'none' }}>
                <circle cx={150} cy={150} r={R} fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.05)" strokeWidth={4} />
                <circle cx={150} cy={150} r={R} fill="none"
                  stroke={MODE_COLOR[mode]} strokeWidth={8}
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={CIRC * (1-pct)}
                  style={{ transition:'stroke-dashoffset 0.5s linear, stroke 0.3s' }} />
              </svg>

              <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                <div style={{ fontFamily:'JetBrains Mono,monospace',fontSize:64,fontWeight:800,color:'var(--text)',lineHeight:1,textShadow:running?`0 0 20px ${MODE_COLOR[mode]}80`:'none' }}>{fmtTime(remaining)}</div>
                <div className="mono" style={{ fontSize:12,color:MODE_COLOR[mode],marginTop:8,letterSpacing:'0.2em' }}>{running ? 'ENGAGED' : 'STANDBY'}</div>
              </div>
            </div>

            {/* Controls */}
            <div style={{ display:'flex',gap:16,alignItems:'center',zIndex:10 }}>
              <button onClick={reset} style={{ width:50,height:50,borderRadius:14,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.02)',color:'var(--text-dim)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s' }}>
                <span className="material-symbols-outlined" style={{ fontSize:24 }}>restart_alt</span>
              </button>
              
              <button onClick={toggle}
                className={running ? 'glow-cyan' : ''}
                style={{ width:80,height:80,borderRadius:24,border:`2px solid ${MODE_COLOR[mode]}`,background:`${MODE_COLOR[mode]}15`,color:MODE_COLOR[mode],cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s' }}>
                <span className="material-symbols-outlined" style={{ fontSize:40 }}>{running?'pause':'play_arrow'}</span>
              </button>

              <div style={{ width:50,height:50 }}>
                {mode==='focus' && (
                  <button onClick={skipToBreak} style={{ width:'100%',height:'100%',borderRadius:14,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.02)',color:'var(--text-dim)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s' }} title="Skip to break">
                    <span className="material-symbols-outlined" style={{ fontSize:24 }}>skip_next</span>
                  </button>
                )}
              </div>
            </div>

            {/* Settings panel overlay */}
            {showSettings && (
              <div className="glass" style={{ position:'absolute',bottom:24,left:24,padding:'20px',borderRadius:14,zIndex:20,width:260 }}>
                <div className="mono" style={{ fontSize:11,color:'var(--cyan)',marginBottom:16,letterSpacing:'0.1em' }}>TIMING CONFIG</div>
                {(['focus','short','long'] as Mode[]).map(m => (
                  <div key={m} style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12 }}>
                    <label className="mono" style={{ fontSize:11,color:'var(--text-dim)' }}>{MODE_LABEL[m]}</label>
                    <input type="number" min={1} max={60} value={customDurations[m]}
                      onChange={e => { const v = Math.max(1,Math.min(60,+e.target.value)); setCustomDurations(d=>({...d,[m]:v})); if(mode===m){setTotalSecs(v*60);setRemaining(v*60)} }}
                      style={{ width:60,padding:'4px 8px',borderRadius:6,border:'1px solid var(--border-2)',background:'rgba(0,0,0,0.3)',color:'var(--text)',fontFamily:'JetBrains Mono,monospace',fontSize:12,textAlign:'center' }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Sidebar Column */}
        <aside style={{ display:'flex',flexDirection:'column',gap:24 }}>
          
          {/* Spotify Player */}
          <div className="glass" style={{ padding:0, overflow:'hidden', borderRadius:14, height:152 }}>
            <iframe 
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              style={{ borderRadius:0 }}>
            </iframe>
          </div>

          {/* Stats Overview */}
          <div className="glass" style={{ padding:20 }}>
            <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',letterSpacing:'0.1em',marginBottom:16 }}>// TODAY'S TELEMETRY</div>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12 }}>
              <div style={{ background:'rgba(0,0,0,0.2)',padding:12,borderRadius:8,border:'1px solid var(--border-2)' }}>
                <div className="mono" style={{ fontSize:24,color:'var(--cyan)',fontWeight:700 }}>{focusToday.length}</div>
                <div className="mono" style={{ fontSize:9,color:'var(--text-faint)',marginTop:4 }}>CYCLES COMPLETE</div>
              </div>
              <div style={{ background:'rgba(0,0,0,0.2)',padding:12,borderRadius:8,border:'1px solid var(--border-2)' }}>
                <div className="mono" style={{ fontSize:24,color:'var(--green)',fontWeight:700 }}>{focusMinsToday}m</div>
                <div className="mono" style={{ fontSize:9,color:'var(--text-faint)',marginTop:4 }}>FOCUS DURATION</div>
              </div>
              <div style={{ background:'rgba(0,0,0,0.2)',padding:12,borderRadius:8,border:'1px solid var(--border-2)' }}>
                <div className="mono" style={{ fontSize:24,color:'#a78bfa',fontWeight:700 }}>{streak}d</div>
                <div className="mono" style={{ fontSize:9,color:'var(--text-faint)',marginTop:4 }}>ACTIVE STREAK</div>
              </div>
              <div style={{ background:'rgba(0,0,0,0.2)',padding:12,borderRadius:8,border:'1px solid var(--border-2)' }}>
                <div className="mono" style={{ fontSize:24,color:'var(--text)',fontWeight:700 }}>{totalFocusSessions}</div>
                <div className="mono" style={{ fontSize:9,color:'var(--text-faint)',marginTop:4 }}>TOTAL CYCLES</div>
              </div>
            </div>
          </div>

          {/* Activity Heatmap */}
          <div className="glass" style={{ padding:20 }}>
            <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',letterSpacing:'0.1em',marginBottom:16 }}>// ACTIVITY MATRIX (14D)</div>
            <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
              {heatmapData.map((d, i) => {
                let bg = 'rgba(255,255,255,0.05)'
                if (d.count === 1) bg = 'rgba(0,212,255,0.3)'
                else if (d.count === 2) bg = 'rgba(0,212,255,0.6)'
                else if (d.count >= 3) bg = 'var(--cyan)'
                
                return (
                  <div key={i} title={`${d.date}: ${d.count} sessions`} style={{ width:18,height:18,borderRadius:4,background:bg,border:'1px solid rgba(0,0,0,0.2)' }} />
                )
              })}
            </div>
          </div>

          {/* Session Log */}
          <div className="glass" style={{ padding:20, flex:1, display:'flex', flexDirection:'column' }}>
            <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',letterSpacing:'0.1em',marginBottom:16 }}>// EVENT LOG</div>
            <div style={{ display:'flex',flexDirection:'column',gap:8,overflowY:'auto',maxHeight:240,paddingRight:4 }}>
              {sessions.length === 0 && <div className="mono" style={{ fontSize:11,color:'var(--text-faint)' }}>NO DATA AWAITING INPUT</div>}
              {[...sessions].reverse().slice(0,30).map((s,i) => (
                <div key={i} style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 12px',borderRadius:6,background:'rgba(0,0,0,0.2)',borderLeft:`2px solid ${MODE_COLOR[s.mode]}` }}>
                  <div>
                    <div className="mono" style={{ color:MODE_COLOR[s.mode],fontSize:11 }}>{MODE_LABEL[s.mode]}</div>
                    <div className="mono" style={{ fontSize:9,color:'var(--text-faint)' }}>{s.date} · {s.duration}m</div>
                  </div>
                  {s.completed && <span className="material-symbols-outlined" style={{ fontSize:14,color:'var(--green)' }}>check</span>}
                </div>
              ))}
            </div>
            {sessions.length > 0 && (
              <button onClick={() => { if(confirm('Purge telemetry data?')){setSessions([]);saveSessions([])} }}
                className="mono"
                style={{ marginTop:16,width:'100%',padding:'8px',borderRadius:6,border:'1px solid rgba(255,95,87,0.3)',background:'transparent',color:'rgba(255,95,87,0.8)',cursor:'pointer',fontSize:10,letterSpacing:'0.1em' }}>
                PURGE LOGS
              </button>
            )}
          </div>
          
        </aside>
      </div>
    </div>
  )
}
