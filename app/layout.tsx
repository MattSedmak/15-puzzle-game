import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'fallback',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: '15 puzzle',
  description: '15 puzzle game!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
}
