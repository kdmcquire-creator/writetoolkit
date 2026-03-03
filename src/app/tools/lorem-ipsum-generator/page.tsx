import { Metadata } from 'next';
import LoremIpsumClient from './LoremIpsumClient';

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator | WriteToolkit',
  description: 'Generate placeholder text for your designs and layouts with ease.',
};

export default function Page() {
  return <LoremIpsumClient />;
}
