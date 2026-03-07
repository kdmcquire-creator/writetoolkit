import { Metadata } from 'next';
import HeadlineAnalyzerClient from './HeadlineAnalyzerClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Headline Analyzer | WriteToolkit',
  description: 'Analyze your headlines for engagement, sentiment, and power words.',
  alternates: {
    canonical: '/tools/headline-analyzer',
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
            { href: '/tools/headline-analyzer', label: 'Headline Analyzer' },
          ]}
        />
        <div className="mt-8">
          <HeadlineAnalyzerClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
