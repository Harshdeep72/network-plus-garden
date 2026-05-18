declare module 'virtual:notes' {
  export interface NoteEntry {
    slug: string
    title: string
    folder: string
    folderIndex: number
    fileIndex: number
    tags: string[]
    maturity: 'seedling' | 'budding' | 'evergreen'
    excerpt: string
    wikilinks: string[]
    relativePath: string
    content: string
    prevSlug: string | null
    nextSlug: string | null
    prevTitle: string | null
    nextTitle: string | null
    videoPath: string | null
    youtubeId: string | null
  }
  export const notes: NoteEntry[]
}
