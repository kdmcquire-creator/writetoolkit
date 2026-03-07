import { Metadata } from 'next';
import GrammarCheckerClient from './GrammarCheckerClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Free Grammar Checker | Online Writing Tool | WriteToolkit',
  description: 'Clean up your writing with our instant grammar and spelling check. Improve clarity and fix errors effortlessly.',
  alternates: {
    canonical: '/tools/grammar-checker',
  },
};

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/tools', label: 'Tools' },
          { href: '/tools/grammar-checker', label: 'Grammar Checker' },
        ]}
      />
      <GrammarCheckerClient />
      <AffiliateBlock placement="toolPage" />
    </div>
  );
}
