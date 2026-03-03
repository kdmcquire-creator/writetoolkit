import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} WriteToolkit. All rights reserved.
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/disclosure" className="text-xs text-gray-400 hover:text-brand transition-colors">
            Affiliate Disclosure
          </Link>
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-brand transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-gray-400 hover:text-brand transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
