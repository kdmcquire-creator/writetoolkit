import { Metadata } from 'next';
import SalaryConverterClient from './SalaryConverterClient';

export const metadata: Metadata = {
  title: 'Salary Hourly Converter | WriteToolkit',
  description: 'Convert between hourly, weekly, monthly, and annual salary amounts quickly.',
};

export default function Page() {
  return <SalaryConverterClient />;
}
