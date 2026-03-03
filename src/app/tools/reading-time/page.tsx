import { Metadata } from 'next';
import ReadingTimeClient from './ReadingTimeClient';

export const metadata: Metadata = {
  title: 'Reading Time Calculator | WriteToolkit',
  description: 'Estimate reading and speaking time for your content accurately.',
};

export default function Page() {
  return <ReadingTimeClient />;
}
