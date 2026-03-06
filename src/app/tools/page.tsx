import { Metadata } from 'next';
import Link from 'next/link';
import tools from '@/lib/tools';
import AffiliateBlock from '@/components/AffiliateBlock';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Writing Tools | WriteToolkit',
  description: 'Free online writing tools to help you write better content.',
  alternates: {
    canonical: '/tools',
  },
};

export default function ToolsPage() {
  const toolSlugs = ['word-counter', 'character-counter', 'case-converter', 'reading-time', 'ai-detector'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs 
        items={[
          { href: '/', label: 'Home' },
          { href: '/tools', label: 'Tools' }
        ]} 
      />
      
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Writing Tools</h1>
        <p className="text-xl text-gray-600 mb-12">
          Free online tools to help you improve your writing, check your grammar, and analyze your content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {toolSlugs.map((slug) => (
            <Link 
              key={slug} 
              href={`/tools/${slug}`}
              className="text-blue-600 hover:underline capitalize"
            >
{slug.replace(/-/g, ' ')})}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <AffiliateBlock />
      </div>
    </div>
  );
}
