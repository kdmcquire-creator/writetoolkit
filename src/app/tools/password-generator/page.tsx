import { Metadata } from 'next';
import PasswordGeneratorClient from './PasswordGeneratorClient';

export const metadata: Metadata = {
  title: 'Secure Password Generator | WriteToolkit',
  description: 'Generate strong, secure passwords instantly with customizable options.',
};

export default function Page() {
  return <PasswordGeneratorClient />;
}
