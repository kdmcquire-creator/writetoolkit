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
  metadataBase: new URL('https://tools.aiproductivityhub.co'),
  openGraph: {
    siteName: 'WriteToolkit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
