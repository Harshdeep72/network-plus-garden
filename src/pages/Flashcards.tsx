import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { notes } from 'virtual:notes'

// --- SM-2 Algorithm & Flashcard Logic ---
export interface Flashcard {
  id: string
  front: string
  back: string
  noteSlug: string
  noteTitle: string
}

export interface SRSData {
  interval: number
  repetition: number
  efactor: number
  nextReviewDate: number // timestamp
}

const SRS_STORAGE_KEY = 'cybernetSRS'

function loadSRSData(): Record<string, SRSData> {
  try {
    return JSON.parse(localStorage.getItem(SRS_STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveSRSData(data: Record<string, SRSData>) {
  localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(data))
}

function calculateSM2(quality: number, data?: SRSData): SRSData {
  let { interval = 0, repetition = 0, efactor = 2.5 } = data || {}

  if (quality >= 3) {
    if (repetition === 0) interval = 1
    else if (repetition === 1) interval = 6
    else interval = Math.round(interval * efactor)
    repetition += 1
  } else {
    repetition = 0
    interval = 1
  }

  efactor = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  if (efactor < 1.3) efactor = 1.3

  const nextReviewDate = Date.now() + interval * 24 * 60 * 60 * 1000

  return { interval, repetition, efactor, nextReviewDate }
}

function extractFlashcards(): Flashcard[] {
  const cards: Flashcard[] = []
  
  for (const note of notes) {
    if (!note.content) continue
    
    // Parse Q&A format: Q: [Question] \n A: [Answer]
    const qaRegex = /Q:\s*(.+?)\n*A:\s*(.+?)(?=\n\n|$)/g
    let match
    while ((match = qaRegex.exec(note.content)) !== null) {
      cards.push({
        id: `${note.slug}-qa-${match.index}`,
        front: match[1].trim(),
        back: match[2].trim(),
        noteSlug: note.slug,
        noteTitle: note.title
      })
    }

    // Parse bold terms format: **Term**: Definition
    const termRegex = /\*\*(.+?)\*\*:\s*(.+?)(?=\n|$)/g
    while ((match = termRegex.exec(note.content)) !== null) {
      // Exclude generic tags or metadata fields if they accidentally match
      if (match[1].toLowerCase() === 'tags') continue
      
      cards.push({
        id: `${note.slug}-term-${match.index}`,
        front: `What is meant by "${match[1].trim()}"?`,
        back: match[2].trim(),
        noteSlug: note.slug,
        noteTitle: note.title
      })
    }
  }
  return cards
}

export default function Flashcards() {
  const [cards, setCards] = useState<Flashcard[]>([])
  const [srsData, setSrsData] = useState<Record<string, SRSData>>({})
  const [currentIdx, setCurrentIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [viewState, setViewState] = useState<'home' | 'review' | 'done'>('home')
  
  const allCards = useMemo(() => extractFlashcards(), [])
  
  // Cards due for review today (or completely new cards)
  const dueCards = useMemo(() => {
    const now = Date.now()
    return allCards.filter(card => {
      const data = srsData[card.id]
      return !data || data.nextReviewDate <= now
    }).sort(() => Math.random() - 0.5) // Shuffle due cards
  }, [allCards, srsData, viewState])

  useEffect(() => {
    setSrsData(loadSRSData())
  }, [])

  const startReview = () => {
    setCards(dueCards)
    setCurrentIdx(0)
    setFlipped(false)
    setViewState(dueCards.length > 0 ? 'review' : 'done')
  }

  const handleRating = (quality: number) => {
    const card = cards[currentIdx]
    const currentData = srsData[card.id]
    const newData = calculateSM2(quality, currentData)
    
    const nextSrsData = { ...srsData, [card.id]: newData }
    setSrsData(nextSrsData)
    saveSRSData(nextSrsData)
    
    setFlipped(false)
    
    if (currentIdx + 1 >= cards.length) {
      setViewState('done')
    } else {
      setCurrentIdx(i => i + 1)
    }
  }

  if (viewState === 'home') return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <span className="material-symbols-outlined" style={{ color:'#f472b6',fontSize:20 }}>style</span>
        <div style={{ fontSize:14,fontWeight:700,color:'var(--text)' }}>Spaced Repetition</div>
      </header>
      <div style={{ flex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:32,padding:40 }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:48,marginBottom:12 }}>🗂️</div>
          <h1 style={{ fontSize:28,fontWeight:800,color:'var(--text)',marginBottom:8 }}>Flashcard Reviews</h1>
          <p style={{ color:'var(--text-faint)',fontSize:14,maxWidth:400 }}>
            Master your knowledge with SM-2 spaced repetition. Cards are auto-generated from bolded terms and Q&A blocks in your notes.
          </p>
        </div>
        <div style={{ display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center' }}>
          <div style={{ textAlign:'center',padding:'24px 32px',borderRadius:14,background:'rgba(255,255,255,0.02)',border:'1px solid var(--border-2)',minWidth:160 }}>
            <div style={{ fontSize:32,fontWeight:800,color:'var(--text)',marginBottom:4 }}>{allCards.length}</div>
            <div style={{ fontSize:12,color:'var(--text-faint)' }}>Total Cards</div>
          </div>
          <div style={{ textAlign:'center',padding:'24px 32px',borderRadius:14,background:'rgba(244,114,182,0.05)',border:'1px solid rgba(244,114,182,0.3)',minWidth:160 }}>
            <div style={{ fontSize:32,fontWeight:800,color:'#f472b6',marginBottom:4 }}>{dueCards.length}</div>
            <div style={{ fontSize:12,color:'#f472b6' }}>Due for Review</div>
          </div>
        </div>
        <button onClick={startReview} disabled={dueCards.length === 0}
          style={{ padding:'16px 40px',borderRadius:12,border:dueCards.length>0?'1px solid rgba(244,114,182,0.4)':'1px solid var(--border)',background:dueCards.length>0?'rgba(244,114,182,0.1)':'rgba(255,255,255,0.02)',color:dueCards.length>0?'#f472b6':'var(--text-faint)',cursor:dueCards.length>0?'pointer':'not-allowed',fontFamily:'inherit',fontSize:15,fontWeight:600,transition:'all 0.2s' }}>
          {dueCards.length > 0 ? 'Start Review Session' : 'All Caught Up! 🎉'}
        </button>
      </div>
    </div>
  )

  if (viewState === 'done') return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12 }}>
        <Link to="/" style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',textDecoration:'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>arrow_back</span>
        </Link>
        <span style={{ fontSize:14,fontWeight:700,color:'var(--text)' }}>Session Complete</span>
      </header>
      <div style={{ flex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:24,padding:40 }}>
        <div style={{ fontSize:56,marginBottom:8 }}>✅</div>
        <h2 style={{ fontSize:24,fontWeight:700,color:'var(--text)' }}>You're all caught up!</h2>
        <p style={{ color:'var(--text-faint)',fontSize:14,textAlign:'center',maxWidth:400 }}>
          Great job! Come back later to review more cards as they become due.
        </p>
        <button onClick={() => setViewState('home')} style={{ padding:'10px 24px',borderRadius:10,border:'1px solid var(--border-2)',background:'rgba(255,255,255,0.04)',color:'var(--text-dim)',cursor:'pointer',fontFamily:'inherit',fontSize:13,marginTop:10 }}>← Back to Overview</button>
      </div>
    </div>
  )

  const card = cards[currentIdx]

  return (
    <div style={{ background:'var(--bg)',minHeight:'100dvh',display:'flex',flexDirection:'column' }}>
      <header style={{ height:58,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',padding:'0 24px',background:'rgba(8,12,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:50,gap:12 }}>
        <button onClick={() => setViewState('home')} style={{ display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:8,border:'1px solid var(--border-2)',color:'var(--text-dim)',background:'none',cursor:'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize:17 }}>close</span>
        </button>
        <div style={{ flex:1,display:'flex',alignItems:'center',gap:12 }}>
          <div style={{ flex:1,height:4,background:'var(--surface-2)',borderRadius:2,overflow:'hidden' }}>
            <div style={{ height:'100%',background:'linear-gradient(90deg,#f472b6,#818cf8)',borderRadius:2,width:`${((currentIdx)/cards.length)*100}%`,transition:'width 0.3s' }} />
          </div>
          <div className="mono" style={{ fontSize:11,color:'var(--text-faint)',flexShrink:0 }}>{currentIdx+1}/{cards.length}</div>
        </div>
      </header>
      
      <main style={{ flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'40px 24px' }}>
        <div className="mono" style={{ fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:16 }}>
          From: {card.noteTitle}
        </div>
        
        {/* Flashcard container */}
        <div 
          onClick={() => !flipped && setFlipped(true)}
          style={{ width:'100%',maxWidth:580,minHeight:320,background:'rgba(255,255,255,0.02)',border:'1px solid var(--border-2)',borderRadius:16,padding:40,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',cursor:flipped?'default':'pointer',transition:'transform 0.3s, background 0.3s',boxShadow:'0 10px 40px rgba(0,0,0,0.2)' }}
        >
          <div style={{ fontSize:22,fontWeight:600,color:'var(--text)',lineHeight:1.5 }}>
            {card.front}
          </div>
          
          {flipped && (
            <>
              <div style={{ width:60,height:2,background:'var(--border-2)',margin:'32px 0' }} />
              <div style={{ fontSize:18,color:'var(--text-dim)',lineHeight:1.6,whiteSpace:'pre-wrap' }}>
                {card.back}
              </div>
            </>
          )}
          
          {!flipped && (
            <div className="mono" style={{ fontSize:11,color:'rgba(255,255,255,0.2)',marginTop:40 }}>
              Click to reveal answer
            </div>
          )}
        </div>

        {/* Rating Actions */}
        <div style={{ height:80,marginTop:32,display:'flex',alignItems:'center',justifyContent:'center' }}>
          {flipped && (
            <div style={{ display:'flex',gap:16 }}>
              <button onClick={() => handleRating(1)} style={{ padding:'12px 24px',borderRadius:12,border:'1px solid rgba(255,95,87,0.3)',background:'rgba(255,95,87,0.08)',color:'#ff5f57',cursor:'pointer',fontFamily:'inherit',fontSize:14,fontWeight:600 }}>Hard (Again)</button>
              <button onClick={() => handleRating(4)} style={{ padding:'12px 24px',borderRadius:12,border:'1px solid rgba(0,212,255,0.3)',background:'rgba(0,212,255,0.08)',color:'#00d4ff',cursor:'pointer',fontFamily:'inherit',fontSize:14,fontWeight:600 }}>Good</button>
              <button onClick={() => handleRating(5)} style={{ padding:'12px 24px',borderRadius:12,border:'1px solid rgba(0,255,136,0.3)',background:'rgba(0,255,136,0.08)',color:'var(--green)',cursor:'pointer',fontFamily:'inherit',fontSize:14,fontWeight:600 }}>Easy</button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
