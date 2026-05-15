import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { notesPlugin } from './vite-plugin-notes.js'

export default defineConfig(({command}) => ({
  plugins: [react(), notesPlugin()],
  // Use repo-name base for GitHub Pages; root '/' for local dev
  base: command === 'build' ? '/network-plus-garden/' : '/',
  build: {
    chunkSizeWarningLimit: 1500,
  },
}))
