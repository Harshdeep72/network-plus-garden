import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import NoteReader from './NoteReader'
import KnowledgeGraph from './KnowledgeGraph'
import PracticeQuiz from './PracticeQuiz'
import StudyTimer from './StudyTimer'
import { ToastContainer } from './Toast'
import { CommandPalette } from './CommandPalette'
import { notes } from 'virtual:notes'

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setPaletteOpen(p => !p)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const firstSlug = notes[0]?.slug ?? ''

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard onSearch={() => setPaletteOpen(true)} />} />
        <Route path="/explore" element={<Navigate to={`/note/${firstSlug}`} replace />} />
        <Route path="/note/:slug" element={<NoteReader onSearch={() => setPaletteOpen(true)} />} />
        <Route path="/graph" element={<KnowledgeGraph />} />
        <Route path="/quiz" element={<PracticeQuiz />} />
        <Route path="/timer" element={<StudyTimer />} />
      </Routes>
      <ToastContainer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </HashRouter>
  )
}

export default App

