import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

/* ── Types ─────────────────────────────────────────────── */
type Mode = 'focus' | 'short' | 'long'
interface Session { date: string; mode: Mode; duration: number; completed: boolean }

const DURATIONS: Record<Mode, number> = { focus: 25, short: 5, long: 15 }
const MODE_LABEL: Record<Mode, string> = { focus: '🎯 Focus', short: '☕ Short Break', long: '🌿 Long Break' }
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
  const [tick, setTick] = useState(0) // force re-render
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)
  const pausedAtRef = useRef<number>(0)

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
          new Notification('CyberNet Timer', { body: `${MODE_LABEL[mode]} complete! 🎉`, icon: '/vite.svg' })
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

  // Streak (consecutive days with at least 1 focus session)
  const daySet = new Set(sessions.filter(s=>s.mode==='focus'&&s.completed).map(s=>s.date))
  let streak = 0
  const d = new Date()
  while (daySet.has(d.toISOString().slice(0,10))) { streak++; d.setDate(d.getDate()-1) }

  // circumference for ring
  const R = 90
  const CIRC = 2 * Math.PI * R

  return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12,flexShrink:0 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <span className="material-symbols-outlined" style={{ color:'var(--cyan)',fontSize:20 }}>timer</span>
        <div style={{ fontSize:14,fontWeight:700,color:'var(--text)' }}>Study Timer</div>
        <div style={{ flex:1 }} />
        <button onClick={() => setShowSettings(s => !s)} style={{ display:'flex',alignItems:'center',gap:6,padding:'6px 12px',borderRadius:8,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.03)',color:'var(--text-dim)',cursor:'pointer',fontFamily:'inherit',fontSize:12 }}>
          <span className="material-symbols-outlined" style={{ fontSize:15 }}>settings</span> Settings
        </button>
      </header>

      <div style={{ flex:1,display:'grid',gridTemplateColumns:'1fr 300px',maxWidth:900,margin:'0 auto',width:'100%',padding:'0 0' }}>

        {/* Timer column */}
        <main style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:32,padding:'40px 32px' }}>

          {/* Mode selector */}
          <div style={{ display:'flex',gap:6,background:'rgba(255,255,255,0.04)',padding:4,borderRadius:12,border:'1px solid var(--border)' }}>
            {(['focus','short','long'] as Mode[]).map(m => (
              <button key={m} onClick={() => selectMode(m)}
                style={{ padding:'8px 16px',borderRadius:9,border:'none',background:mode===m?`${MODE_COLOR[m]}18`:'transparent',color:mode===m?MODE_COLOR[m]:'var(--text-faint)',cursor:'pointer',fontFamily:'inherit',fontSize:13,fontWeight:mode===m?600:400,transition:'all 0.2s',outline:mode===m?`1px solid ${MODE_COLOR[m]}40`:'none' }}>
                {MODE_LABEL[m]}
              </button>
            ))}
          </div>

          {/* Circular timer */}
          <div style={{ position:'relative',width:220,height:220 }}>
            <svg width={220} height={220} style={{ transform:'rotate(-90deg)' }}>
              <circle cx={110} cy={110} r={R} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={10} />
              <circle cx={110} cy={110} r={R} fill="none"
                stroke={MODE_COLOR[mode]} strokeWidth={10}
                strokeLinecap="round"
                strokeDasharray={CIRC}
                strokeDashoffset={CIRC * (1-pct)}
                style={{ transition:'stroke-dashoffset 0.5s linear,stroke 0.3s' }} />
            </svg>
            <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace',fontSize:48,fontWeight:700,color:'var(--text)',lineHeight:1 }}>{fmtTime(remaining)}</div>
              <div style={{ fontSize:12,color:'var(--text-faint)',marginTop:4 }}>{MODE_LABEL[mode]}</div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display:'flex',gap:12,alignItems:'center' }}>
            <button onClick={reset} style={{ width:44,height:44,borderRadius:12,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.04)',color:'var(--text-dim)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize:20 }}>restart_alt</span>
            </button>
            <button onClick={toggle}
              style={{ width:64,height:64,borderRadius:20,border:`2px solid ${MODE_COLOR[mode]}`,background:`${MODE_COLOR[mode]}15`,color:MODE_COLOR[mode],cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,transition:'all 0.2s',boxShadow:running?`0 0 24px ${MODE_COLOR[mode]}30`:'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize:30 }}>{running?'pause':'play_arrow'}</span>
            </button>
            {mode==='focus' && (
              <button onClick={skipToBreak} style={{ width:44,height:44,borderRadius:12,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.04)',color:'var(--text-dim)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center' }} title="Skip to break">
                <span className="material-symbols-outlined" style={{ fontSize:20 }}>skip_next</span>
              </button>
            )}
          </div>

          {/* Pomodoros this session */}
          <div style={{ display:'flex',gap:6,alignItems:'center' }}>
            {Array.from({ length: Math.max(4, pomCount+1) }).map((_, i) => (
              <div key={i} style={{ width:12,height:12,borderRadius:'50%',background:i<pomCount?'var(--cyan)':'rgba(255,255,255,0.1)',transition:'background 0.3s' }} />
            ))}
            <span style={{ fontSize:11,color:'var(--text-faint)',marginLeft:6 }}>{pomCount} pomodoro{pomCount!==1?'s':''} this session</span>
          </div>

          {/* Settings panel */}
          {showSettings && (
            <div style={{ width:'100%',maxWidth:340,padding:'20px',borderRadius:14,background:'rgba(255,255,255,0.03)',border:'1px solid var(--border-2)' }}>
              <div style={{ fontSize:13,fontWeight:600,color:'var(--text)',marginBottom:16 }}>Custom Durations (minutes)</div>
              {(['focus','short','long'] as Mode[]).map(m => (
                <div key={m} style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12 }}>
                  <label style={{ fontSize:13,color:'var(--text-dim)' }}>{MODE_LABEL[m]}</label>
                  <input type="number" min={1} max={60} value={customDurations[m]}
                    onChange={e => { const v = Math.max(1,Math.min(60,+e.target.value)); setCustomDurations(d=>({...d,[m]:v})); if(mode===m){setTotalSecs(v*60);setRemaining(v*60)} }}
                    style={{ width:64,padding:'5px 8px',borderRadius:7,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.06)',color:'var(--text)',fontFamily:'JetBrains Mono,monospace',fontSize:13,textAlign:'center' }} />
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Stats sidebar */}
        <aside style={{ borderLeft:'1px solid var(--border)',padding:'32px 20px',overflowY:'auto' }}>
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:16 }}>Today's Stats</div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:24 }}>
            {[
              ['Focus Sessions',focusToday.length,'🎯'],
              ['Focus Minutes',focusMinsToday,'⏱️'],
              ['Total Sessions',totalFocusSessions,'📊'],
              ['Study Streak',`${streak}d`,'🔥'],
            ].map(([l,v,e])=>(
              <div key={String(l)} style={{ padding:'14px 12px',borderRadius:12,background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',textAlign:'center' }}>
                <div style={{ fontSize:20,marginBottom:4 }}>{e}</div>
                <div style={{ fontSize:18,fontWeight:700,color:'var(--text)' }}>{v}</div>
                <div style={{ fontSize:10,color:'var(--text-faint)' }}>{l}</div>
              </div>
            ))}
          </div>

          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:12 }}>Session Log</div>
          <div style={{ display:'flex',flexDirection:'column',gap:4,maxHeight:320,overflowY:'auto' }}>
            {sessions.length === 0 && <div style={{ fontSize:12,color:'var(--text-faint)',padding:'16px 0' }}>No sessions yet. Start focusing! 🚀</div>}
            {[...sessions].reverse().slice(0,30).map((s,i) => (
              <div key={i} style={{ display:'flex',alignItems:'center',gap:10,padding:'8px 10px',borderRadius:8,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',fontSize:12 }}>
                <span style={{ color:MODE_COLOR[s.mode],fontSize:14 }}>{s.mode==='focus'?'🎯':s.mode==='short'?'☕':'🌿'}</span>
                <div style={{ flex:1 }}>
                  <div style={{ color:'var(--text-dim)' }}>{MODE_LABEL[s.mode]} · {s.duration}m</div>
                  <div className="mono" style={{ fontSize:9,color:'var(--text-faint)' }}>{s.date}</div>
                </div>
                {s.completed && <span className="material-symbols-outlined" style={{ fontSize:14,color:'var(--green)' }}>check</span>}
              </div>
            ))}
          </div>
          {sessions.length > 0 && (
            <button onClick={() => { if(confirm('Clear all session history?')){setSessions([]);saveSessions([])} }}
              style={{ marginTop:12,width:'100%',padding:'6px',borderRadius:8,border:'1px solid rgba(255,95,87,0.2)',background:'transparent',color:'rgba(255,95,87,0.5)',cursor:'pointer',fontFamily:'inherit',fontSize:11 }}>
              Clear History
            </button>
          )}
        </aside>
      </div>
    </div>
  )
}
