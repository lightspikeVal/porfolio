import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdownContent(filename: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'markdown', `${filename}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    return {
      content: processedContent.toString(),
      frontmatter: data
    }
  } catch (error) {
    return null
  }
}
