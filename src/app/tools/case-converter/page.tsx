import { Metadata } from 'next';
import CaseConverterClient from './CaseConverterClient';

export const metadata: Metadata = {
  title: 'Case Converter | UPPERCASE to lowercase | WriteToolkit',
  description: 'Convert your text between UPPERCASE, lowercase, Title Case, and Sentence case instantly with our free online case converter.',
};

export default function Page() {
  return <CaseConverterClient />;
}
