import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { tools } from '@/lib/tools'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AffiliateBanner from '@/components/AffiliateBanner'
import SidebarFreshbooks from '@/components/SidebarFreshbooks'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = tools.find(t => t.slug === params.slug)
  if (!tool) return {}

  return {
    title: tool.title,
    description: tool.description,
  }
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find(t => t.slug === params.slug)
  if (!tool) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{tool.description}</p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              {/* Tool implementation would go here */}
              <div className="bg-gray-100 p-12 rounded text-center">
                {tool.name} Interactive Component Coming Soon
              </div>
            </div>

            <div className="prose max-w-none">
              <p>Boost your productivity with our {tool.name.toLowerCase()}. This free online tool is designed to help you polish your content faster and more efficiently.</p>
            </div>
            
            <div className="mt-12">
              <AffiliateBanner />
            </div>
          </div>
          
          <aside className="md:w-1/3">
            <SidebarFreshbooks />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
