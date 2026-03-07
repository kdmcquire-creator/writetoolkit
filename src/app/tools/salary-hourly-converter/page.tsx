import { Metadata } from 'next';
import SalaryConverterClient from './SalaryConverterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Salary Hourly Converter | WriteToolkit',
  description: 'Convert between hourly, weekly, monthly, and annual salary amounts quickly.',
  alternates: { canonical: '/tools/salary-hourly-converter' }
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'Salary Hourly Converter', href: '/tools/salary-hourly-converter' }
      ]} />
      <div className="mt-8">
        <SalaryConverterClient />
      </div>
      <AffiliateBlock placement="toolPage" />
    </div>
  );
}
