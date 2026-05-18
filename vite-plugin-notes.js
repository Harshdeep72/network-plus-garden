// Force restart v2 — YouTube embed support
import { readFileSync, readdirSync, statSync, createReadStream } from 'fs'
import { join, extname, basename } from 'path'

const CONTENT_DIR = join(process.cwd(), 'content')
const VIDEO_DIR   = '/run/media/harshdeep/ExternalSSD/Documents/Networking/@Hack_institute CompTIA Network+ (N10-009) Full Course & Practice Exam'
const YOUTUBE_MAPPING_FILE = join(process.cwd(), 'youtube_mapping.json')
const VIRTUAL_ID  = 'virtual:notes'
const RESOLVED    = '\0' + VIRTUAL_ID

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function extractExcerpt(content) {
  const text = content
    .replace(/^---[\s\S]*?---\n/, '')
    .replace(/^#+ .+$/gm, '')
    .replace(/!\[\[.*?\]\]/g, '')
    .replace(/\*\*(?:Tags|Module\/Section):[^\n]+/g, '')
    .replace(/\*\*/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim()
  const lines = text.split('\n').filter(l => l.trim().length > 15)
  return lines.slice(0, 2).join(' ').slice(0, 200) + '…'
}

function extractWikilinks(content) {
  const links = new Set()
  const re = /\[\[([^\]|#]+?)(?:\|[^\]]+)?\]\]/g
  let m
  while ((m = re.exec(content)) !== null) {
    links.add(m[1].trim())
  }
  return [...links]
}

/* Build a map: "01" → "01 - Introduction", "02" → "02 - Network Fundamentals", etc. */
function buildVideoFolderMap() {
  const map = new Map()
  try {
    for (const d of readdirSync(VIDEO_DIR)) {
      const m = d.match(/^(\d+)/)
      if (m) map.set(m[1].padStart(2, '0'), d)
    }
  } catch {}
  return map
}

function findVideoPath(folderName, fileName) {
  const folderNum = (folderName.match(/^(\d+)/) || [])[1]
  if (!folderNum) return null
  const videoFolderMap = buildVideoFolderMap()
  const videoFolder = videoFolderMap.get(folderNum.padStart(2, '0'))
  if (!videoFolder) return null
  // fileName looks like "001 Introduction.md" — match "001" prefix in the video folder
  const noteNum = (fileName.match(/^(\d+)/) || [])[1]
  if (!noteNum) return null
  try {
    const files = readdirSync(join(VIDEO_DIR, videoFolder))
    const match = files.find(f => f.startsWith(noteNum + ' ') && f.endsWith('.mp4'))
    if (match) return { path: join(VIDEO_DIR, videoFolder, match), filename: match }
  } catch {}
  return null
}

function loadYoutubeMapping() {
  try {
    return JSON.parse(readFileSync(YOUTUBE_MAPPING_FILE, 'utf-8'))
  } catch {
    return {}
  }
}

function scanNotes() {
  const notes = []
  const entries = readdirSync(CONTENT_DIR).sort()
  const folders = entries.filter(f => {
    try { return statSync(join(CONTENT_DIR, f)).isDirectory() && f !== 'MOCs' } catch { return false }
  })
  const youtubeMapping = loadYoutubeMapping()

  for (const folder of folders) {
    const folderMatch = folder.match(/^(\d+)/)
    const folderIndex = folderMatch ? parseInt(folderMatch[1]) : 99
    const folderPath = join(CONTENT_DIR, folder)
    let files
    try { files = readdirSync(folderPath).filter(f => extname(f) === '.md' && f !== 'index.md').sort() }
    catch { continue }

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      let content
      try { content = readFileSync(join(folderPath, file), 'utf-8') } catch { continue }

      const titleMatch = content.match(/^# (.+)$/m)
      const title = titleMatch ? titleMatch[1] : basename(file, '.md')
      const tagsMatch = content.match(/\*\*Tags:\*\*\s*(.+)/)
      const tags = tagsMatch ? tagsMatch[1].split(/[\s,]+/).filter(t => t.startsWith('#')) : []
      const maturity = tags.find(t => t.includes('evergreen')) ? 'evergreen'
        : tags.find(t => t.includes('budding')) ? 'budding' : 'seedling'
      const slug = `${slugify(folder)}--${slugify(basename(file, '.md'))}`

      const videoResult = findVideoPath(folder, file)
      const videoPath = videoResult ? videoResult.path : null
      const ytMatch = content.match(/^youtubeId:\s*(.+)$/m)
      const frontmatterYoutubeId = ytMatch ? ytMatch[1].trim() : null
      const videoFilename = basename(file, '.md') + '.mp4'
      const youtubeId = frontmatterYoutubeId || (youtubeMapping[videoFilename] || null)

      notes.push({
        slug, title, folder, folderIndex, fileIndex: i, tags, maturity,
        excerpt: extractExcerpt(content),
        wikilinks: extractWikilinks(content),
        relativePath: folder + '/' + file,
        content,                   // ← full markdown for static build
        videoPath: videoPath || null,
        youtubeId: youtubeId || null,
        prevSlug: i > 0 ? `${slugify(folder)}--${slugify(basename(files[i-1], '.md'))}` : null,
        nextSlug: i < files.length-1 ? `${slugify(folder)}--${slugify(basename(files[i+1], '.md'))}` : null,
        prevTitle: i > 0 ? basename(files[i-1], '.md') : null,
        nextTitle: i < files.length-1 ? basename(files[i+1], '.md') : null,
      })
    }
  }
  return notes
}

export function notesPlugin() {
  let cache = null
  return {
    name: 'vite-plugin-notes',
    resolveId(id) { if (id === VIRTUAL_ID) return RESOLVED },
    load(id) {
      if (id !== RESOLVED) return
      if (!cache) cache = scanNotes()
      return `export const notes = ${JSON.stringify(cache)}`
    },
    configureServer(server) {
      // /api/note
      server.middlewares.use('/api/note', (req, res, next) => {
        if (!req.url) return next()
        try {
          const slug = new URL(req.url, 'http://localhost').searchParams.get('slug')
          if (!slug) { res.statusCode = 400; res.end('{}'); return }
          if (!cache) cache = scanNotes()
          const note = cache.find(n => n.slug === slug)
          if (!note) { res.statusCode = 404; res.end('{}'); return }
          const content = readFileSync(join(CONTENT_DIR, note.relativePath), 'utf-8')
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.end(JSON.stringify({ content, note }))
        } catch(e) { res.statusCode = 500; res.end('{}') }
      })

      // /api/video — streams MP4 with full Range request support
      server.middlewares.use('/api/video', (req, res, next) => {
        if (!req.url) return next()
        try {
          const slug = new URL(req.url, 'http://localhost').searchParams.get('slug')
          if (!slug) { res.statusCode = 400; res.end(); return }
          if (!cache) cache = scanNotes()
          const note = cache.find(n => n.slug === slug)
          if (!note || !note.videoPath) { res.statusCode = 404; res.end(); return }
          const path = note.videoPath
          const stat = statSync(path)
          const total = stat.size
          const rangeHeader = req.headers['range']
          res.setHeader('Content-Type', 'video/mp4')
          res.setHeader('Accept-Ranges', 'bytes')
          res.setHeader('Access-Control-Allow-Origin', '*')
          if (rangeHeader) {
            const [, startStr, endStr] = rangeHeader.match(/bytes=(\d+)-?(\d*)/)
            const start = parseInt(startStr, 10)
            const end = endStr ? parseInt(endStr, 10) : Math.min(start + 1024*1024 - 1, total - 1)
            res.statusCode = 206
            res.setHeader('Content-Range', `bytes ${start}-${end}/${total}`)
            res.setHeader('Content-Length', end - start + 1)
            createReadStream(path, { start, end }).pipe(res)
          } else {
            res.setHeader('Content-Length', total)
            createReadStream(path).pipe(res)
          }
        } catch(e) { res.statusCode = 500; res.end() }
      })
    }
  }
}
