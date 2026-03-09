import { Metadata } from 'next';
import LoanCalculatorClient from './LoanCalculatorClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Calculator | Free Online Tool | WriteToolkit',
  description: 'Calculate monthly loan payments, total interest, and amortization schedule for any loan.',
  alternates: { canonical: '/tools/loan-calculator' },
};

export default function Page() {
  const toolLinks = [
    { slug: 'roi-calculator', name: 'ROI Calculator' },
    { slug: 'salary-hourly-converter', name: 'Salary Converter' },
    { slug: 'break-even-calculator', name: 'Break-Even Calculator' },
    { slug: 'invoice-generator', name: 'Invoice Generator' },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/tools', label: 'Tools' }, { href: '/tools/loan-calculator', label: 'Loan Calculator' }]} />
        <div className="mt-8"><LoanCalculatorClient /></div>
      </div>
      <AffiliateBlock placement="toolPage" />
      <section className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore More Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolLinks.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-600">{tool.name}</h3>
                <p className="text-gray-600 text-sm mt-2">Free online tool to help with your business calculations.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
