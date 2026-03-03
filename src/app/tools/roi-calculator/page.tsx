import { Metadata } from 'next';
import ROICalculatorClient from './ROICalculatorClient';

export const metadata: Metadata = {
  title: 'ROI Calculator | WriteToolkit',
  description: 'Calculate the return on investment (ROI) for your marketing campaigns or business projects.',
};

export default function Page() {
  return <ROICalculatorClient />;
}
