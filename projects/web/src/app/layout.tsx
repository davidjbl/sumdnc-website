import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TRPCProvider } from '@/lib/providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// AIDEV-NOTE: Configure Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sumdnc - Modern Web Platform',
  description: 'Enterprise-grade web platform built with Next.js, React, and TypeScript',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Sumdnc Team' }],
  creator: 'Sumdnc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sumdnc.com',
    title: 'Sumdnc - Modern Web Platform',
    description: 'Enterprise-grade web platform built with Next.js, React, and TypeScript',
    siteName: 'Sumdnc',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumdnc - Modern Web Platform',
    description: 'Enterprise-grade web platform built with Next.js, React, and TypeScript',
  },
};

// AIDEV-NOTE: Root layout wraps all pages with header, footer, and tRPC provider
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TRPCProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </TRPCProvider>
      </body>
    </html>
  );
}
