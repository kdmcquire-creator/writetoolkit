import { Metadata } from 'next';
import WordCounterClient from './WordCounterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Word Counter | Free Online Tool | WriteToolkit',
  description: 'Count words, characters, and sentences in real-time with our free online word counter.',
  alternates: {
    canonical: '/tools/word-counter',
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

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">More tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {toolLinks.map((tool) => (
            <Link 
              key={tool.slug} 
              href={`/tools/${tool.slug}`}
              className="text-blue-600 hover:underline"
            >
              {tool.name}
            </Link>
          ))}
          <Link href="/tools" className="text-blue-600 hover:underline font-semibold">
            View all tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
