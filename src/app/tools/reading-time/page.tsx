import { Metadata } from 'next';
import ReadingTimeClient from './ReadingTimeClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Reading Time Calculator | WriteToolkit',
  description: 'Estimate reading and speaking time for your content accurately.',
  alternates: {
    canonical: '/tools/reading-time',
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
            { href: '/tools/reading-time', label: 'Reading Time' },
          ]}
        />
        <div className="mt-8">
          <ReadingTimeClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
