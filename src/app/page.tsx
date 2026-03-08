import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'WriteToolkit',
  description:
    'Free online tools for writers, marketers, and business owners. Word counter, AI detector, grammar checker, invoice generator, ROI calculator, and more.',
  alternates: { canonical: '/' },
}

export default function Home() {
  redirect('/tools')
}
