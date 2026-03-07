import AffiliateBlock from '@/components/AffiliateBlock';

import { Metadata } from 'next';

import Link from 'next/link';

import { tools } from '@/lib/tools';



export const metadata: Metadata = {
  
  title: 'Writing Tools | WriteToolkit',
  
  description: 'Free online writing utilities including word counters, grammar checkers, and more to improve your writing process.',
  
};



export default function ToolsPage() {
  
  return (
    
    <div className=\"min-h-screen bg-gray-50\">
    
      <main className=\"max-w-7xl mx-auto px-4 py-12\">
      
        <div className=\"text-center mb-12\">
        
          <h1 className=\"text-4xl font-bold text-gray-900 mb-4\">Writing Tools</h1>h1>
        
          <p className=\"text-xl text-gray-600 max-w-2xl mx-auto\">
          
            Boost your productivity with our suite of free writing utilities. From counting words to generating resumes, we have everything you need to perfect your content.
          
          </p>p>
        
        </div>div>
      

      
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16\">
        
          {tools.map((tool) => (
      
            <Link
              
              key={tool.slug}
              
              href={`/tools/${tool.slug}`}
              
              className=\"block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow\"
              
            >
            
              <h2 className=\"text-xl font-semibold text-blue-600 mb-2\">{tool.name}</h2>h2>
            
              <p className=\"text-gray-600\">{tool.description}</p>p>
            
            </Link>Link>
      
          ))}
        
        </div>div>
      
        
      
        <AffiliateBlock />
      
      </main>main>
    
    </div>div>
    
  );
  
}</div>




