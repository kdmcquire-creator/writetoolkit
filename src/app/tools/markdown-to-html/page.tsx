import { Metadata } from 'next';
import MarkdownToHtmlClient from './MarkdownToHtmlClient';

export const metadata: Metadata = {
  title: 'Markdown to HTML Converter | WriteToolkit',
  description: 'Convert your Markdown text to clean HTML code instantly with live preview.',
};

export default function Page() {
  return <MarkdownToHtmlClient />;
}
