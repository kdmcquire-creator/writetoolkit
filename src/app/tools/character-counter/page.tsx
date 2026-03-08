import { Metadata } from 'next';
import CharacterCounterClient from './CharacterCounterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Character Counter | Free Online Tool | WriteToolkit',
  description: 'Count characters, words, and sentences in real-time with our free online character counter.',
  alternates: {
    canonical: '/tools/character-counter',
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
            { href: '/tools/character-counter', label: 'Character Counter' },
          ]}
        />
        <div className="mt-8">
          <CharacterCounterClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
