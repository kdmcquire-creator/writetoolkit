import { Metadata } from 'next';
import ResumeScorerClient from './ResumeScorerClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Resume Scorer | WriteToolkit',
  description: 'Analyze and score your resume based on key industry standards and keywords.',
  alternates: {
    canonical: '/tools/resume-scorer',
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
            { href: '/tools/resume-scorer', label: 'Resume Scorer' },
          ]}
        />
        <div className="mt-8">
          <ResumeScorerClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
