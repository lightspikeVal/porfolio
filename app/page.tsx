import { getMarkdownContent } from '@/lib/markdown'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { redirect } from 'next/navigation'

export default async function Page() {
  const data = await getMarkdownContent('home')

  if (!data) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl font-serif mb-8">Portfolio</h1>
          <p className="text-muted-foreground">
            Create a home.md file in public/markdown/ to get started.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <MarkdownRenderer content={data.content} />
      </div>
    </main>
  )
}
