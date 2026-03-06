import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Jean-Pierre Brill | AI Developer & Engineer',
    template: '%s | Jean-Pierre Brill'
  },
  description: 'Building AI-native experiences that feel inevitable, not artificial. Portfolio showcasing AI-driven applications built with modern tools.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'Jean-Pierre Brill - Portfolio',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
