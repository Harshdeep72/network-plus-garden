import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { notes } from 'virtual:notes'

/* ── Quiz generation ──────────────────────────────────────
   We generate MCQ questions purely from the note metadata.
   Strategy:
   1. "Which folder covers [topic]?" — answer is the folder name
   2. "What is the maturity of [note title]?" — seedling/budding/evergreen
   3. "Which note title belongs to folder [folder]?" — pick correct from 4 options
   4. "How many notes are in [folder]?" — numerical MCQ
────────────────────────────────────────────────────────── */

const folders = [...new Set(notes.map(n => n.folder))]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]]
  }
  return a
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

function wrongNotes(correct: typeof notes[0], count = 3) {
  return pick(notes.filter(n => n.slug !== correct.slug && n.folder !== correct.folder), count)
}

function wrongFolders(correct: string, count = 3) {
  return pick(folders.filter(f => f !== correct), count)
}

interface Question {
  id: number
  text: string
  options: string[]
  answer: string
  noteSlug?: string
  explanation: string
}

function generateQuestions(count = 15): Question[] {
  const pool: Question[] = []
  let id = 0

  for (const note of shuffle(notes)) {
    if (pool.length >= count * 4) break

    // Type 1: Which folder does this note belong to?
    const wrongF = wrongFolders(note.folder, 3)
    if (wrongF.length === 3) {
      pool.push({
        id: id++,
        text: `Which section/folder covers the topic: "${note.title}"?`,
        options: shuffle([note.folder, ...wrongF]),
        answer: note.folder,
        noteSlug: note.slug,
        explanation: `"${note.title}" is in the ${note.folder} section.`
      })
    }

    // Type 2: Which of these note titles is in [folder]?
    const siblings = notes.filter(n => n.folder === note.folder && n.slug !== note.slug)
    const wrongN = wrongNotes(note, 3)
    if (siblings.length > 0 && wrongN.length === 3) {
      pool.push({
        id: id++,
        text: `Which note belongs to the "${note.folder}" section?`,
        options: shuffle([note.title, ...wrongN.map(n=>n.title)]),
        answer: note.title,
        noteSlug: note.slug,
        explanation: `"${note.title}" is part of ${note.folder}.`
      })
    }

    // Type 3: What is the maturity stage of this note?
    pool.push({
      id: id++,
      text: `What is the knowledge maturity stage of the note "${note.title}"?`,
      options: shuffle(['🌱 Seedling', '🌿 Budding', '🌳 Evergreen']),
      answer: note.maturity === 'seedling' ? '🌱 Seedling' : note.maturity === 'budding' ? '🌿 Budding' : '🌳 Evergreen',
      noteSlug: note.slug,
      explanation: `"${note.title}" is marked as ${note.maturity}.`
    })
  }

  return shuffle(pool).slice(0, count)
}

const MATURITY_COLOR = { '🌱 Seedling':'var(--cyan)', '🌿 Budding':'var(--green)', '🌳 Evergreen':'#a78bfa' }

export default function PracticeQuiz() {
  const navigate = useNavigate()
  const [screen, setScreen] = useState<'home'|'quiz'|'result'>('home')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<string|null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState<Question[]>([])
  const [timeLeft, setTimeLeft] = useState(20)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const startQuiz = useCallback((count: number) => {
    setQuestions(generateQuestions(count))
    setQIdx(0); setSelected(null); setConfirmed(false)
    setScore(0); setWrong([]); setTimeLeft(20); setStreak(0); setMaxStreak(0)
    setScreen('quiz')
  }, [])

  useEffect(() => {
    if (screen !== 'quiz' || confirmed) return
    if (timeLeft <= 0) {
      // time out = wrong
      const q = questions[qIdx]
      setWrong(w => [...w, q])
      setStreak(0)
      setConfirmed(true)
      return
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(t)
  }, [screen, confirmed, timeLeft, qIdx, questions])

  function handleSelect(opt: string) {
    if (confirmed) return
    setSelected(opt)
  }

  function handleConfirm() {
    if (!selected || confirmed) return
    const q = questions[qIdx]
    const correct = selected === q.answer
    if (correct) {
      setScore(s => s+1)
      setStreak(s => { const ns = s+1; setMaxStreak(m => Math.max(m,ns)); return ns })
    } else {
      setWrong(w => [...w, q])
      setStreak(0)
    }
    setConfirmed(true)
  }

  function handleNext() {
    if (qIdx + 1 >= questions.length) { setScreen('result'); return }
    setQIdx(i => i+1); setSelected(null); setConfirmed(false); setTimeLeft(20)
  }

  const q = questions[qIdx]
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0

  /* ── Screens ── */
  if (screen === 'home') return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <span className="material-symbols-outlined" style={{ color:'var(--green)',fontSize:20 }}>quiz</span>
        <div style={{ fontSize:14,fontWeight:700,color:'var(--text)' }}>Practice Quiz</div>
      </header>
      <div style={{ flex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:32,padding:40 }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:48,marginBottom:12 }}>🧠</div>
          <h1 style={{ fontSize:28,fontWeight:800,color:'var(--text)',marginBottom:8 }}>Test Your Knowledge</h1>
          <p style={{ color:'var(--text-faint)',fontSize:14,maxWidth:400 }}>
            Questions are generated from your {notes.length} indexed notes. 20 seconds per question.
          </p>
        </div>
        <div style={{ display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center' }}>
          {[['Quick', 10, '#00d4ff'], ['Standard', 20, '#00ff88'], ['Full', 30, '#a78bfa']].map(([label, count, color]) => (
            <button key={String(label)} onClick={() => startQuiz(Number(count))}
              style={{ padding:'20px 32px',borderRadius:14,border:`1px solid ${color}30`,background:`${color}0d`,color:String(color),cursor:'pointer',fontFamily:'inherit',display:'flex',flexDirection:'column',alignItems:'center',gap:8,transition:'all 0.2s',minWidth:140 }}>
              <span style={{ fontSize:28,fontWeight:800 }}>{count}</span>
              <span style={{ fontSize:13,fontWeight:600 }}>{label} Quiz</span>
              <span style={{ fontSize:11,opacity:0.7 }}>~{Number(count)/3|0} min</span>
            </button>
          ))}
        </div>
        <div className="mono" style={{ fontSize:11,color:'var(--text-faint)' }}>
          {notes.length} notes indexed across {folders.length} sections
        </div>
      </div>
    </div>
  )

  if (screen === 'result') return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <span style={{ fontSize:14,fontWeight:700,color:'var(--text)' }}>Quiz Results</span>
      </header>
      <div style={{ flex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:28,padding:40 }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:56,marginBottom:8 }}>{pct>=80?'🎉':pct>=50?'👍':'📚'}</div>
          <div style={{ fontSize:48,fontWeight:900,color:pct>=80?'var(--green)':pct>=50?'var(--cyan)':'#fb923c' }}>{pct}%</div>
          <div style={{ fontSize:15,color:'var(--text-dim)',marginTop:4 }}>{score} / {questions.length} correct</div>
        </div>
        <div style={{ display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center' }}>
          {[['Best Streak',`${maxStreak}🔥`],['Wrong',`${wrong.length}`],['Score',`${pct}%`]].map(([l,v])=>(
            <div key={l} style={{ textAlign:'center',padding:'16px 24px',borderRadius:12,background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)' }}>
              <div style={{ fontSize:20,fontWeight:700,color:'var(--text)' }}>{v}</div>
              <div style={{ fontSize:11,color:'var(--text-faint)' }}>{l}</div>
            </div>
          ))}
        </div>
        {wrong.length > 0 && (
          <div style={{ width:'100%',maxWidth:500 }}>
            <div className="mono" style={{ fontSize:11,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:10 }}>Review These Topics</div>
            {wrong.map(wq => (
              <div key={wq.id} style={{ padding:'12px 16px',borderRadius:10,background:'rgba(251,146,60,0.06)',border:'1px solid rgba(251,146,60,0.2)',marginBottom:8 }}>
                <div style={{ fontSize:13,color:'var(--text)',marginBottom:4 }}>{wq.text}</div>
                <div style={{ fontSize:12,color:'var(--green)' }}>✓ {wq.answer}</div>
                <div style={{ fontSize:11,color:'var(--text-faint)',marginTop:2 }}>{wq.explanation}</div>
                {wq.noteSlug && <button onClick={() => navigate(`/note/${wq.noteSlug}`)} style={{ marginTop:6,fontSize:10,color:'var(--cyan)',background:'none',border:'none',cursor:'pointer',fontFamily:'monospace',padding:0 }}>Open note →</button>}
              </div>
            ))}
          </div>
        )}
        <div style={{ display:'flex',gap:12 }}>
          <button onClick={() => setScreen('home')} style={{ padding:'10px 24px',borderRadius:10,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.04)',color:'var(--text-dim)',cursor:'pointer',fontFamily:'inherit',fontSize:13 }}>← Back</button>
          <button onClick={() => startQuiz(questions.length)} style={{ padding:'10px 24px',borderRadius:10,border:'1px solid rgba(0,212,255,0.3)',background:'rgba(0,212,255,0.08)',color:'var(--cyan)',cursor:'pointer',fontFamily:'inherit',fontSize:13 }}>Retry Quiz</button>
        </div>
      </div>
    </div>
  )

  /* Quiz screen */
  return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12 }}>
        <button onClick={() => setScreen('home')} style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',background:'none',cursor:'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </button>
        <div style={{ flex:1,display:'flex',alignItems:'center',gap:12 }}>
          <div style={{ flex:1,height:4,background:'var(--surface-2)',borderRadius:2,overflow:'hidden' }}>
            <div style={{ height:'100%',background:'linear-gradient(90deg,var(--cyan),var(--green))',borderRadius:2,width:`${((qIdx)/questions.length)*100}%`,transition:'width 0.3s' }} />
          </div>
          <div className="mono" style={{ fontSize:11,color:'var(--text-faint)',flexShrink:0 }}>{qIdx+1}/{questions.length}</div>
        </div>
        {streak >= 2 && <div style={{ fontSize:13,color:'#fb923c' }}>{streak}🔥</div>}
        <div style={{ width:36,height:36,borderRadius:'50%',border:`2px solid ${timeLeft<=5?'#ff5f57':'rgba(0,212,255,0.4)'}`,display:'flex',alignItems:'center',justifyContent:'center',background:'transparent',position:'relative',flexShrink:0 }}>
          <svg style={{ position:'absolute',top:0,left:0,transform:'rotate(-90deg)'}} width={36} height={36}>
            <circle cx={18} cy={18} r={16} fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth={2} />
            <circle cx={18} cy={18} r={16} fill="none" stroke={timeLeft<=5?'#ff5f57':'var(--cyan)'}
              strokeWidth={2} strokeDasharray={`${2*Math.PI*16}`}
              strokeDashoffset={`${2*Math.PI*16*(1-timeLeft/20)}`}
              style={{ transition:'stroke-dashoffset 1s linear' }} />
          </svg>
          <span className="mono" style={{ fontSize:11,color:timeLeft<=5?'#ff5f57':'var(--cyan)',position:'relative',zIndex:1 }}>{timeLeft}</span>
        </div>
        <div style={{ fontSize:13,color:'var(--green)',fontWeight:600 }}>{score} pts</div>
      </header>

      <main style={{ flex:1,display:'flex',alignItems:'flex-start',justifyContent:'center',padding:'48px 24px' }}>
        <div style={{ width:'100%',maxWidth:580 }}>
          <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:16 }}>
            Question {qIdx+1} of {questions.length}
          </div>
          <h2 style={{ fontSize:20,fontWeight:700,color:'var(--text)',lineHeight:1.5,marginBottom:28 }}>{q.text}</h2>

          <div style={{ display:'flex',flexDirection:'column',gap:10,marginBottom:24 }}>
            {q.options.map(opt => {
              const isCorrect = opt === q.answer
              const isSelected = opt === selected
              let bg = 'rgba(255,255,255,0.03)', border = 'var(--border-2)', color = 'var(--text-dim)'
              if (confirmed) {
                if (isCorrect) { bg='rgba(0,255,136,0.08)'; border='rgba(0,255,136,0.4)'; color='var(--green)' }
                else if (isSelected && !isCorrect) { bg='rgba(255,95,87,0.08)'; border='rgba(255,95,87,0.4)'; color='#ff5f57' }
              } else if (isSelected) {
                bg='rgba(0,212,255,0.08)'; border='rgba(0,212,255,0.4)'; color='var(--cyan)'
              }
              return (
                <button key={opt} onClick={() => handleSelect(opt)} style={{ width:'100%',textAlign:'left',padding:'14px 18px',borderRadius:12,border:`1px solid ${border}`,background:bg,color,cursor:confirmed?'default':'pointer',fontFamily:'inherit',fontSize:14,transition:'all 0.15s',display:'flex',alignItems:'center',gap:12 }}>
                  {confirmed && isCorrect && <span className="material-symbols-outlined" style={{ fontSize:16 }}>check_circle</span>}
                  {confirmed && isSelected && !isCorrect && <span className="material-symbols-outlined" style={{ fontSize:16 }}>cancel</span>}
                  {(!confirmed || (!isCorrect && !isSelected)) && <span style={{ width:16,height:16,borderRadius:'50%',border:`1px solid ${color}40`,flexShrink:0,display:'inline-block' }} />}
                  {opt}
                </button>
              )
            })}
          </div>

          {confirmed && (
            <div style={{ padding:'12px 16px',borderRadius:10,background:'rgba(0,212,255,0.05)',border:'1px solid rgba(0,212,255,0.15)',marginBottom:20,fontSize:13,color:'var(--text-dim)' }}>
              💡 {q.explanation}
            </div>
          )}

          <div style={{ display:'flex',justifyContent:'flex-end',gap:10 }}>
            {!confirmed && (
              <button onClick={handleConfirm} disabled={!selected} style={{ padding:'10px 28px',borderRadius:10,border:'1px solid rgba(0,212,255,0.3)',background:selected?'rgba(0,212,255,0.1)':'rgba(255,255,255,0.02)',color:selected?'var(--cyan)':'var(--text-faint)',cursor:selected?'pointer':'not-allowed',fontFamily:'inherit',fontSize:13 }}>
                Confirm →
              </button>
            )}
            {confirmed && (
              <button onClick={handleNext} style={{ padding:'10px 28px',borderRadius:10,background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.3)',color:'var(--cyan)',cursor:'pointer',fontFamily:'inherit',fontSize:13 }}>
                {qIdx+1 >= questions.length ? 'See Results 🏁' : 'Next Question →'}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
