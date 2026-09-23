import '../../../../packages/ui/src/styles/globals.css';
import '@/styles/print.css';
import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  title: {
    template: '%s · US Tech-for-Good',
    default: 'US Tech-for-Good',
  },
  description: 'A directory of US organisations using technology for public good.',
  icons: { icon: '/favicon.svg' },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="min-h-screen antialiased flex flex-col">
        <div
          id="scroll-progress"
          className="fixed top-0 left-0 z-[100] h-0.5 bg-brand transition-all"
          style={{ width: '0%' }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
