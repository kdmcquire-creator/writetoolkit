import { Metadata } from 'next';
import ROICalculatorClient from './ROICalculatorClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'ROI Calculator | WriteToolkit',
  description: 'Calculate the return on investment (ROI) for your marketing campaigns or business projects.',
  alternates: {
    canonical: '/tools/roi-calculator',
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
            { href: '/tools/roi-calculator', label: 'ROI Calculator' },
          ]}
        />
        <div className="mt-8">
          <ROICalculatorClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
