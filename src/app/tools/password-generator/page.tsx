import { Metadata } from 'next';
import PasswordGeneratorClient from './PasswordGeneratorClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateBlock from '@/components/AffiliateBlock';

export const metadata: Metadata = {
  title: 'Secure Password Generator | WriteToolkit',
  description: 'Generate strong, secure passwords instantly with customizable options.',
  alternates: {
    canonical: '/tools/password-generator',
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
            { href: '/tools/password-generator', label: 'Password Generator' },
          ]}
        />
        <div className="mt-8">
          <PasswordGeneratorClient />
        </div>
      </div>

      <AffiliateBlock placement="toolPage" />
    </>
  );
}
