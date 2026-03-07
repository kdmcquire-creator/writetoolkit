import { Metadata } from 'next';
import InvoiceGeneratorClient from './InvoiceGeneratorClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Free Invoice Generator | Create Professional Invoices | WriteToolkit',
  description: 'Create and download professional invoices for your clients in seconds with our free online invoice generator.',
  alternates: {
    canonical: '/tools/invoice-generator',
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
            { href: '/tools/invoice-generator', label: 'Invoice Generator' },
          ]}
        />
        <div className="mt-8">
          <InvoiceGeneratorClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
