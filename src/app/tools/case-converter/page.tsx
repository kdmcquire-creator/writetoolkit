import { Metadata } from 'next';
import CaseConverterClient from './CaseConverterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Case Converter | UPPERCASE to lowercase | WriteToolkit',
  description: 'Convert your text between UPPERCASE, lowercase, Title Case, and Sentence case instantly with our free online case converter.',
  alternates: {
    canonical: '/tools/case-converter',
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
            { href: '/tools/case-converter', label: 'Case Converter' },
          ]}
        />
        <div className="mt-8">
          <CaseConverterClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
