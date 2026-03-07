import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import AffiliateBlock from '@/components/AffiliateBlock'
import { tools } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Writing Tools | WriteToolkit',
  description: 'Free online writing tools to help you write better content.',
  alternates: {
    canonical: 'https://writetoolkit.com/tools',
  },
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools' }]} />
      
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900">Writing Tools</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore our collection of free tools to enhance your writing process.
        </p>
      </div>

      <AffiliateBlock placement="top" />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group block rounded-xl border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
              {tool.name}
            </h2>
            <p className="mt-2 text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>

      <AffiliateBlock placement="bottom" />
    </div>
  )
}
