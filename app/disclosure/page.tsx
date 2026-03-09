import Link from 'next/link';

export default function DisclosurePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>
      <div className="space-y-4 text-lg text-gray-700">
        <p>
          Disclosure: Some links may be affiliate links. If you buy through them, you may support the site at no extra cost to you.
        </p>
        <p>
          At WriteToolkit, we maintain strict editorial independence. Our reviews and recommendations are based on our own research and testing of the products. When you click on certain links and make a purchase, we may receive a small commission from the provider. This helps us keep the site running and providing free content to our users.
        </p>
        <p>
          Crucially, this comes at no additional cost to you. The price you pay is the same whether you use our affiliate link or go directly to the vendor's website.
        </p>
        <Link href="/tools" className="text-blue-600 hover:underline inline-block mt-4">
          &larr; Back to Tools
        </Link>
      </div>
    </main>
  );
}
