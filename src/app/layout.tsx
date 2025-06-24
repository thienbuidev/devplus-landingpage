import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactQueryProvider } from '@/components/provider/ReactQueryProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Devplus',
  description: 'Devplus - Discover Climate Tech Companies in Vietnam',
  icons: {
    icon: '/logo.ico',
  },
  openGraph: {
    title: 'Devplus',
    description: 'Discover Climate Tech Companies in Vietnam',
    url: 'https://devplus.vn',
    siteName: 'Devplus',
    images: [
      {
        url: 'https://devplus.edu.vn/_next/static/media/h2_about.bec8a040.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <ReactQueryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
