import Link from 'next/link';

export default function DisclosurePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>
      <div className="space-y-4 text-lg text-gray-700">
        <p>
          Some of the links on this website are affiliate links, which means we may earn a commission if you click on the link or make a purchase using the link.
        </p>
        <p>
          This comes at no additional cost to you. Our opinions are our own and we only recommend products or services we believe will add value to our readers.
        </p>
        <Link href="/tools" className="text-blue-600 hover:underline inline-block mt-4">
          &larr; Back to Tools
        </Link>
      </div>
    </main>
  );
}
