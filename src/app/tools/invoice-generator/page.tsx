import { Metadata } from 'next';
import InvoiceGeneratorClient from './InvoiceGeneratorClient';

export const metadata: Metadata = {
  title: 'Free Invoice Generator | Create Professional Invoices | WriteToolkit',
  description: 'Create and download professional invoices for your clients in seconds with our free online invoice generator.',
};

export default function Page() {
  return <InvoiceGeneratorClient />;
}
