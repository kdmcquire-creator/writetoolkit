import { Metadata } from 'next';
import ToolRenderer from '@/components/ToolRenderer';

export const metadata: Metadata = {
  title: 'WriteToolkit | Free Online Writing and SEO Tools',
  description: 'A professional writing toolkit with free tools for word counting, character counting, AI detection, grammar checking, and more.',
  alternates: {
    canonical: 'https://writetoolkit.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">WriteToolkit</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Free writing and productivity tools for creators
        </p>
        <ToolRenderer />
      </div>
    </main>
  );
}
