import { Metadata } from 'next';
import CharacterCounterClient from './CharacterCounterClient';

export const metadata: Metadata = {
  title: 'Character Counter | Free Online Tool | WriteToolkit',
  description: 'Count characters, words, and sentences in real-time with our free online character counter.',
  alternates: {
    canonical: 'https://writetoolkit.com/tools/character-counter',
  },
};

export default function Page() {
  return <CharacterCounterClient />;
}
