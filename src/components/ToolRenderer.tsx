type Tool = {
  name: string;
  description: string;
  href: string;
};

const TOOLS: Tool[] = [
  { name: 'Word Counter', description: 'Count words, characters, and reading time.', href: '/tools/word-counter' },
  { name: 'AI Detector', description: 'Check text for AI likelihood signals.', href: '/tools/ai-detector' },
  { name: 'Grammar Checker', description: 'Quick grammar and clarity checks.', href: '/tools/grammar-checker' },
];

export default function ToolRenderer() {
  return (
    <section aria-label="Tools">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {TOOLS.map((t) => (
          <a key={t.href} href={t.href} className="tool-card block">
            <div className="text-base font-semibold text-gray-900">{t.name}</div>
            <div className="mt-1 text-sm text-gray-600">{t.description}</div>
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        More tools coming soon.
      </p>
    </section>
  );
}
