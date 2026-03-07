import Link from 'next/link'

import AffiliateBlock from '@/components/AffiliateBlock'
import Breadcrumbs from '@/components/Breadcrumbs'
import { tools } from '@/lib/tools'

export const metadata = {
  title: 'Writing Tools | WriteToolkit',
  description:
    'Free online writing utilities including word counters, grammar checkers, and more to improve your writing process.',
  alternates: {
    canonical: '/tools',
  },
}

const exploreLinks: Array<{ href: string; label: string }> = [
  { href: '/tools/word-counter', label: 'Word Counter' },
  { href: '/tools/case-converter', label: 'Case Converter' },
  { href: '/tools/ai-detector', label: 'AI Detector' },
  { href: '/tools/grammar-checker', label: 'Grammar Checker' },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Home' },
              { href: '/tools', label: 'Tools' },
            ]}
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Writing Tools</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Boost your productivity with our suite of free writing utilities. From counting words to generating invoices,
            we have tools to help you polish content faster.
          </p>
        </div>

        <div className="mb-10">
          <AffiliateBlock placement="toolsIndex" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(tools as any[]).map((tool) => {
            const slug =
              tool?.slug ??
              tool?.id ??
              (typeof tool?.name === 'string'
                ? tool.name.toLowerCase().trim().replace(/\s+/g, '-')
                : '')

            if (!slug) return null

            return (
              <Link
                key={slug}
                href={`/tools/${slug}`}
                className="block rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow"
              >
                <div className="text-lg font-semibold text-gray-900">{tool?.name ?? slug}</div>
                {tool?.description ? (
                  <div className="mt-2 text-sm text-gray-600">{tool.description}</div>
                ) : null}
              </Link>
            )
          })}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Explore</h2>
          <p className="mt-2 text-sm text-gray-600">A few popular tools to start with.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {exploreLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 hover:bg-gray-100"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
