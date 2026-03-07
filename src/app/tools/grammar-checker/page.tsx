import { Metadata } from 'next';
import GrammarCheckerClient from './GrammarCheckerClient';


export const metadata: Metadata = {
  title: 'Free Grammar Checker | Online Writing Tool | WriteToolkit',
  description: 'Clean up your writing with our instant grammar and spelling check. Improve clarity and fix errors effortlessly.',
  alternates: {
    canonical: 'https://writetoolkit-wtt2.vercel.app/tools/grammar-checker',
  },
};


export default function Page() {
  return <GrammarCheckerClient />;
}
