import { Metadata } from 'next';
import WordCounterClient from './WordCounterClient';
import Breadcrumbs from '@/components/Breadcrumbs'
import AffiliateBlock from '@/components/AffiliateBlock';
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
        <AffiliateBlock placement="toolPage" />
      </div>


      <section className="mt-12 border-t pt-8">
