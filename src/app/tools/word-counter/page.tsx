import { Metadata } from 'next';
import WordCounterClient from './WordCounterClient';

export const metadata: Metadata = {
  title: 'Word Counter | Free Online Tool | WriteToolkit',
  description: 'Count words, characters, and sentences in real-time with our free online word counter.',
};

export default function Page() {
  return <WordCounterClient />;
}
