import { Metadata } from 'next';
import HashtagGeneratorClient from './HashtagGeneratorClient';

export const metadata: Metadata = {
  title: 'Hashtag Generator | WriteToolkit',
  description: 'Generate trending and relevant hashtags for your social media posts.',
};

export default function Page() {
  return <HashtagGeneratorClient />;
}
