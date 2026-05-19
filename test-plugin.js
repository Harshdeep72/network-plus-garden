import { notesPlugin } from './vite-plugin-notes.js'
const plugin = notesPlugin()
const res = plugin.load('\0virtual:notes')
const jsonStr = res.replace('export const notes = ', '')
const notes = JSON.parse(jsonStr)

let missing = 0
for (const note of notes) {
  if (!note.youtubeId) {
    missing++
    console.log('Missing:', note.title)
  }
}
console.log(`Total missing: ${missing} / ${notes.length}`)
