import { Metadata } from 'next';
import WordCounterClient from './WordCounterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Word Counter | Free Online Tool | WriteToolkit',
  description: 'Count words, characters, and sentences in real-time with our free online word counter.',
  alternates: {
    canonical: '/tools/word-counter'
  },
};

export default function Page() {
  const toolLinks = [
    { slug: 'word-counter', name: 'Word Counter' },
    { slug: 'character-counter', name: 'Character Counter' },
    { slug: 'case-converter', name: 'Case Converter' },
    { slug: 'grammar-checker', name: 'Grammar Checker' },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/tools', label: 'Tools' },
            { href: '/tools/word-counter', label: 'Word Counter' },
          ]}
        />
        <div className="mt-8">
          <WordCounterClient />
        </div>
      </div>
      
      <AffiliateBlock placement="toolPage" />

      <section className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore More Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolLinks.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-blue-600">{tool.name}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Free online tool to help with your writing and editing tasks.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
