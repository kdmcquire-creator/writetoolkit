import { Metadata } from 'next';
import LoremIpsumClient from './LoremIpsumClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator | WriteToolkit',
  description: 'Generate placeholder text for your designs and layouts with ease.',
  alternates: {
    canonical: '/tools/lorem-ipsum-generator',
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
            { href: '/tools/lorem-ipsum-generator', label: 'Lorem Ipsum Generator' },
          ]}
        />
        <div className="mt-8">
          <LoremIpsumClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
