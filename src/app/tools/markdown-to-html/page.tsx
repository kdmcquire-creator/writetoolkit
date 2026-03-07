import { Metadata } from 'next';
import MarkdownToHtmlClient from './MarkdownToHtmlClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Markdown to HTML Converter | WriteToolkit',
  description: 'Convert your Markdown text to clean HTML code instantly with live preview.',
  alternates: {
    canonical: '/tools/markdown-to-html',
  },
};

export default function Page() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/tools', label: 'Tools' },
            { href: '/tools/markdown-to-html', label: 'Markdown to HTML' },
          ]}
        />
        <div className="mt-8">
          <MarkdownToHtmlClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
