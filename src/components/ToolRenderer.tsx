import AffiliateBlock from '@/components/AffiliateBlock'
import Link from 'next/link'

type Tool = {
  name: string;
  description: string;
  href: string;
};

const TOOLS: Tool[] = [
  { name: 'Word Counter', description: 'Count words, characters, and reading time.', href: '/tools/word-counter' },
  { name: 'Character Counter', description: 'Count characters, spaces, and paragraphs.', href: '/tools/character-counter' },
  { name: 'AI Detector', description: 'Check text for AI likelihood signals.', href: '/tools/ai-detector' },
  { name: 'Grammar Checker', description: 'Quick grammar and clarity checks.', href: '/tools/grammar-checker' },
  { name: 'Case Converter', description: 'Convert text to UPPER, lower, or Title Case.', href: '/tools/case-converter' },
  { name: 'Invoice Generator', description: 'Create professional, printable invoices.', href: '/tools/invoice-generator' },
  { name: 'Reading Time', description: 'Estimate reading and speaking time.', href: '/tools/reading-time' },
  { name: 'ROI Calculator', description: 'Calculate return on investment.', href: '/tools/roi-calculator' },
];

export default function ToolRenderer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {TOOLS.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
          aria-label={tool.name}
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {tool.name}
          </h2>
          <p className="font-normal text-gray-700">
            {tool.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
