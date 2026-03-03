export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const tools: Tool[] = [
  { id: 'char-counter', name: 'Character Counter', description: 'Count characters and spaces', category: 'Writing' },
  { id: 'word-counter', name: 'Word Counter', description: 'Count words in your text', category: 'Writing' },
  { id: 'case-converter', name: 'Case Converter', description: 'Convert text case easily', category: 'Writing' },
  { id: 'keyword-density', name: 'Keyword Density', description: 'Analyze keyword frequency', category: 'SEO' },
  { id: 'reading-time', name: 'Reading Time', description: 'Calculate reading duration', category: 'Reading' },
  { id: 'meta-preview', name: 'Meta Tag Preview', description: 'Preview SEO meta tags', category: 'SEO' },
  { id: 'email-subject', name: 'Subject Tester', description: 'Test email subject lines', category: 'Marketing' },
  { id: 'loan-calc', name: 'Loan Calculator', description: 'Calculate loan payments', category: 'Finance' },
  { id: 'roi-calc', name: 'ROI Calculator', description: 'Calculate return on investment', category: 'Finance' },
];