import Link from 'next/link';

type Tool = {
  name: string;
  description: string;
  href: string;
};

const TOOLS: Tool[] = [
  { name: 'Word Counter', description: 'Count words, characters, and reading time.', href: '/tools/word-counter' },
  { name: 'AI Detector', description: 'Check text for AI likelihood signals.', href: '/tools/ai-detector' },
  { name: 'Grammar Checker', description: 'Quick grammar and clarity checks.', href: '/tools/grammar-checker' },
  { name: 'Case Converter', description: 'Convert text to UPPER, lower, or Title Case.', href: '/tools/case-converter' },
  { name: 'Invoice Generator', description: 'Create professional, printable invoices.', href: '/tools/invoice-generator' },
];

export default function ToolRenderer() {
  return (
    <section aria-label="Tools">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href} className="tool-card block hover:no-underline">
            <div className="text-base font-semibold text-gray-900">{t.name}</div>
            <div className="mt-1 text-sm text-gray-600">{t.description}</div>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-400 italic">
        More tools being added weekly.
      </p>
    </section>
  );
}
