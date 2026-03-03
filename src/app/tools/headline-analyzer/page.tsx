import { Metadata } from 'next';
import HeadlineAnalyzerClient from './HeadlineAnalyzerClient';

export const metadata: Metadata = {
  title: 'Headline Analyzer | WriteToolkit',
  description: 'Analyze your headlines for engagement, sentiment, and power words.',
};

export default function Page() {
  return <HeadlineAnalyzerClient />;
}
