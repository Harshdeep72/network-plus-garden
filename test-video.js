import { readdirSync } from 'fs'
import { join } from 'path'
const VIDEO_DIR = '/run/media/harshdeep/ExternalSSD/Documents/Networking/@Hack_institute CompTIA Network+ (N10-009) Full Course & Practice Exam'

function buildVideoFolderMap() {
  const map = new Map()
  for (const d of readdirSync(VIDEO_DIR)) {
    const m = d.match(/^(\d+)/)
    if (m) map.set(m[1].padStart(2, '0'), d)
  }
  return map
}

function findVideoPath(folderName, fileName) {
  const folderNum = (folderName.match(/^(\d+)/) || [])[1]
  if (!folderNum) return null
  const videoFolderMap = buildVideoFolderMap()
  const videoFolder = videoFolderMap.get(folderNum.padStart(2, '0'))
  if (!videoFolder) return null
  const noteNum = (fileName.match(/^(\d+)/) || [])[1]
  if (!noteNum) return null
  try {
    const files = readdirSync(join(VIDEO_DIR, videoFolder))
    const match = files.find(f => f.startsWith(noteNum + ' ') && f.endsWith('.mp4'))
    if (match) return { path: join(VIDEO_DIR, videoFolder, match), filename: match }
  } catch {}
  return null
}
console.log(findVideoPath("01 Introduction", "001 Introduction.md"))
console.log(findVideoPath("02 Network Fundamentals", "001 Network Fundamentals.md"))
