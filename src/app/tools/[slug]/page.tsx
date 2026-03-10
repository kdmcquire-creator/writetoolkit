import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { tools } from '@/lib/tools'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug)
  if (!tool) return {}

  return {
    title: tool.title,
    description: tool.description,
  }
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find((t) => t.slug === params.slug)
  if (!tool) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{tool.description}</p>
        {/* Tool implementation would go here */}
        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <p>Tool interactive component for {tool.name} coming soon.</p>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}
