import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// W SSG (generateStaticParams) ten kod działa podczas BUILD-a na Netlify,
// gdzie process.cwd() = /opt/build/repo i pliki .md istnieją na dysku
const contentDir = path.join(process.cwd(), 'src', 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  coverImage?: string
  contentHtml: string // HTML gotowy do dangerouslySetInnerHTML – bez problemów z ESM
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  const posts = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(contentDir, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // marked.parse() = synchroniczne (marked() w v14 zwraca Promise!)
      const contentHtml = marked.parse(content) as string

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        coverImage: data.coverImage || '',
        contentHtml,
      } as BlogPost
    })
    // Sortowanie malejąco po dacie
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDir, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const contentHtml = marked.parse(content) as string

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      coverImage: data.coverImage || '',
      contentHtml,
    } as BlogPost
  } catch (e) {
    console.error(`Błąd przy odczycie pliku ${slug}.md`, e)
    return null
  }
}
