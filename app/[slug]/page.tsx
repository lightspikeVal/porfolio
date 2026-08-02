import { getMarkdownContent } from '@/lib/markdown'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const data = await getMarkdownContent(slug)

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <MarkdownRenderer content={data.content} />
      </div>
    </main>
  )
}
