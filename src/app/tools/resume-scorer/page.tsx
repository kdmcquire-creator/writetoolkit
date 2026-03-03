import { Metadata } from 'next';
import ResumeScorerClient from './ResumeScorerClient';

export const metadata: Metadata = {
  title: 'Resume Scorer | WriteToolkit',
  description: 'Analyze and score your resume based on key industry standards and keywords.',
};

export default function Page() {
  return <ResumeScorerClient />;
}
