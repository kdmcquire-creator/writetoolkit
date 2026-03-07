import { Metadata } from 'next';
import HashtagGeneratorClient from './HashtagGeneratorClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Hashtag Generator | WriteToolkit',
  description: 'Generate trending and relevant hashtags for your social media posts.',
  alternates: {
    canonical: '/tools/hashtag-generator',
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
            { href: '/tools/hashtag-generator', label: 'Hashtag Generator' },
          ]}
        />
        <div className="mt-8">
          <HashtagGeneratorClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
