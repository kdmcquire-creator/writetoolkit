  
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
  
  { name: 'Salary Converter', description: 'Convert between hourly and annual pay.', href: '/tools/salary-hourly-converter' },
  
  { name: 'Lorem Ipsum', description: 'Generate custom placeholder text.', href: '/tools/lorem-ipsum-generator' },
  
  { name: 'Password Generator', description: 'Create strong, secure passwords.', href: '/tools/password-generator' },
  
  { name: 'Hashtag Generator', description: 'Find relevant tags for social media.', href: '/tools/hashtag-generator' },
  
  { name: 'Resume Scorer', description: 'Get instant feedback on your resume.', href: '/tools/resume-scorer' },
  
  { name: 'Headline Analyzer', description: 'Score headlines for impact and SEO.', href: '/tools/headline-analyzer' },
  
  { name: 'Markdown to HTML', description: 'Convert markdown to clean HTML code.', href: '/tools/markdown-to-html' },
  
];



export default function ToolRenderer() {
  
  return (
    
    <section aria-label=\"Tools\">
    
      <div className=\"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3\">
      
        {TOOLS.map((t) => (
      
          <Link
            
            key={t.href}
            
            href={t.href}
            
            className=\"tool-card block hover:no-underline\"
            
          >
          
            <div className=\"text-base font-semibold text-gray-900\">{t.name}</div>div>
          
            <div className=\"mt-1 text-sm text-gray-600\">{t.description}</div>div>
          
          </Link>Link>
      
        ))}
      
      </div>div>
    
    </section>section>
    
  );
  
}</section>





















