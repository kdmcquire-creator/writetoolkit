import { notFound } from 'next/navigation';

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

const TOOL_PAGES: Record<string, React.ComponentType> = {
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

export default function ToolPage({ params }: { params: { tool: string } }) {
  const Component = TOOL_PAGES[params.tool];
  if (!Component) return notFound();
  return <Component />;
}
