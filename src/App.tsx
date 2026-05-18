import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NoteReader from './pages/NoteReader'
import KnowledgeGraph from './pages/KnowledgeGraph'
import PracticeQuiz from './pages/PracticeQuiz'
import StudyTimer from './pages/StudyTimer'
import MocView from './pages/MocView'
import { ToastContainer } from './components/Toast'
import { CommandPalette } from './components/CommandPalette'
import GardenExplorer from './pages/GardenExplorer'
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

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard onSearch={() => setPaletteOpen(true)} />} />
        <Route path="/explore" element={<GardenExplorer />} />
        <Route path="/moc/:folder" element={<MocView />} />
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

