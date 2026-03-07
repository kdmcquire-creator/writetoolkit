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
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Markdown to HTML', href: '/tools/markdown-to-html' },
        ]}
      />
      <div className="mt-8">
        <MarkdownToHtmlClient />
      </div>
      <AffiliateBlock placement="toolPage" />
    </div>
  );
}
