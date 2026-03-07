import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';

import WordCounter from '../../../src/app/tools/word-counter/page';
import AIDetector from '../../../src/app/tools/ai-detector/page';
import GrammarChecker from '../../../src/app/tools/grammar-checker/page';
import CaseConverter from '../../../src/app/tools/case-converter/page';
import InvoiceGenerator from '../../../src/app/tools/invoice-generator/page';
import ReadingTime from '../../../src/app/tools/reading-time/page';
import ROICalculator from '../../../src/app/tools/roi-calculator/page';
import SalaryHourlyConverter from '../../../src/app/tools/salary-hourly-converter/page';
import LoremIpsumGenerator from '../../../src/app/tools/lorem-ipsum-generator/page';
import PasswordGenerator from '../../../src/app/tools/password-generator/page';
import HashtagGenerator from '../../../src/app/tools/hashtag-generator/page';
import ResumeScorer from '../../../src/app/tools/resume-scorer/page';
import HeadlineAnalyzer from '../../../src/app/tools/headline-analyzer/page';
import MarkdownToHtml from '../../../src/app/tools/markdown-to-html/page';

const TOOL_PAGES: Record<string, ComponentType> = {
  'word-counter': WordCounter,
  'ai-detector': AIDetector,
  'grammar-checker': GrammarChecker,
  'case-converter': CaseConverter,
  'invoice-generator': InvoiceGenerator,
  'reading-time': ReadingTime,
  'roi-calculator': ROICalculator,
  'salary-hourly-converter': SalaryHourlyConverter,
  'lorem-ipsum-generator': LoremIpsumGenerator,
  'password-generator': PasswordGenerator,
  'hashtag-generator': HashtagGenerator,
  'resume-scorer': ResumeScorer,
  'headline-analyzer': HeadlineAnalyzer,
  'markdown-to-html': MarkdownToHtml,
};

const TOOL_META: Record<string, { title: string; description: string }> = {
  'word-counter': {
    title: 'Word Counter',
    description: 'Count words, characters, and reading time in real-time with this free word counter.',
  },
  'ai-detector': {
    title: 'AI Detector',
    description: 'Analyze text for AI signals and get a quick, free AI detection readout.',
  },
  'grammar-checker': {
    title: 'Grammar Checker',
    description: 'Check grammar and polish writing with this free online grammar checker.',
  },
  'case-converter': {
    title: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, and more.',
  },
  'invoice-generator': {
    title: 'Invoice Generator',
    description: 'Generate a clean invoice in minutes with this free invoice generator.',
  },
  'reading-time': {
    title: 'Reading Time Calculator',
    description: 'Estimate reading time for your text with a free reading time calculator.',
  },
  'roi-calculator': {
    title: 'ROI Calculator',
    description: 'Calculate return on investment quickly with a free ROI calculator.',
  },
  'salary-hourly-converter': {
    title: 'Salary to Hourly Converter',
    description: 'Convert salary to hourly rate with a free salary/hourly converter.',
  },
  'lorem-ipsum-generator': {
    title: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text with a free lorem ipsum generator.',
  },
  'password-generator': {
    title: 'Password Generator',
    description: 'Create strong passwords with a free password generator.',
  },
  'hashtag-generator': {
    title: 'Hashtag Generator',
    description: 'Generate hashtags quickly with a free hashtag generator.',
  },
  'resume-scorer': {
    title: 'Resume Scorer',
    description: 'Score a resume against common best practices with a free resume scorer.',
  },
  'headline-analyzer': {
    title: 'Headline Analyzer',
    description: 'Analyze headlines to improve clarity and click-through with a free headline analyzer.',
  },
  'markdown-to-html': {
    title: 'Markdown to HTML',
    description: 'Convert Markdown to HTML with a free online converter.',
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TOOL_PAGES).map((tool) => ({ tool }));
}

export function generateMetadata({ params }: { params: { tool: string } }): Metadata {
  if (!TOOL_PAGES[params.tool]) {
    return { title: 'Not Found' };
  }

  const meta = TOOL_META[params.tool] ?? {
    title: params.tool,
    description: 'Free online tool on WriteToolkit.',
  };

  return {
    title: `${meta.title} | WriteToolkit`,
    description: meta.description,
    alternates: {
      canonical: `/tools/${params.tool}`,
    },
  };
}

export default function ToolPage({ params }: { params: { tool: string } }) {
  const Component = TOOL_PAGES[params.tool];
  if (!Component) return notFound();
  return <Component />;
}
