import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WriteToolkit — Free Online Writing & SEO Tools',
    template: '%s | WriteToolkit',
  },
  description: 'Free online tools for writers, marketers, and business owners. Word counter, AI detector, grammar checker, invoice generator, ROI calculator, and 13 more — no login required.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://writetoolkit.com'),
  openGraph: {
    siteName: 'WriteToolkit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=\"en\">
      <head>
        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />
        <script
          type=\"application/ld+json\"
          dangerouslySetInnerHTML={{\n            __html: JSON.stringify({\n              '@context': 'https://schema.org',\n              '@type': 'WebSite',\n              name: 'WriteToolkit',\n              url: 'https://writetoolkit.com',\n              description: 'Free online tools for writers, marketers, and business owners.',\n            }),\n          }}\n        />
      </head>
      <body className={`${inter.className} bg-white text-navy antialiased`}>
        <Header />
        <main className=\"min-h-screen\">{children}</main>\n        <Footer />
      </body>
    </html>
  )\n}