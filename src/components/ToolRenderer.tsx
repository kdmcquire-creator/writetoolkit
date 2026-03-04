import Link from 'next/link';












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
