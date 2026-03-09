import { Metadata } from 'next';
import EmailSubjectTesterClient from './EmailSubjectTesterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Email Subject Line Tester | Free Online Tool | WriteToolkit',
  description: 'Score your email subject line for open rate potential. Get tips on how to improve your email marketing performance.',
  alternates: { canonical: '/tools/email-subject-tester' },
};

export default function Page() {
  const toolLinks = [
    { slug: 'headline-analyzer', name: 'Headline Analyzer' },
    { slug: 'word-counter', name: 'Word Counter' },
    { slug: 'character-counter', name: 'Character Counter' },
    { slug: 'case-converter', name: 'Case Converter' },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/tools', label: 'Tools' }, { href: '/tools/email-subject-tester', label: 'Email Subject Tester' }]} />
        <div className="mt-8"><EmailSubjectTesterClient /></div>
      </div>
      <AffiliateBlock placement="toolPage" />
      <section className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore More Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolLinks.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-600">{tool.name}</h3>
                <p className="text-gray-600 text-sm mt-2">Free online tool to help with your digital writing.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
