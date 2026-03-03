import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | WriteToolkit',
  description: 'FTC compliance and affiliate disclosure for WriteToolkit.',
};

export default function DisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 prose">
      <h1 className="text-3xl font-bold mb-6 text-navy text-center">Affiliate Disclosure</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        In compliance with the FTC guidelines, please assume that any links on WriteToolkit 
        may be affiliate links.
      </p>

      <div className="space-y-6 text-gray-700">
        <p>
          WriteToolkit is a participant in various affiliate marketing programs, which means 
          we may get paid commissions on editorially chosen products purchased through our 
          links to retailer sites.
        </p>

        <p>
          Our editorial content is not influenced by our affiliate partnerships. We only 
          recommend tools and services that we believe will provide value to our users. 
          The compensation received helps us maintain and grow this platform, allowing us 
          to keep our core tools free for everyone.
        </p>

        <p>
          When you click on an affiliate link and make a purchase, the price you pay is 
          the same whether you use the affiliate link or go directly to the vendor's 
          website using a non-affiliate link.
        </p>

        <p>
          If you have any questions regarding our affiliate disclosure, please feel free 
          to reach out to us.
        </p>
      </div>

      <div className="mt-12 p-6 bg-gray-50 border border-border rounded-xl italic text-sm text-gray-500">
        Last Updated: March 3, 2026
      </div>
    </div>
  );
}
