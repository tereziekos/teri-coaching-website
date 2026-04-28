import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import PlausibleProvider from 'next-plausible';
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'terezie alder \u00B7 coaching',
  description:
    'A slow space for the parts of you that don\u2019t speak first. Coaching in Czech or English.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <PlausibleProvider
          domain="tereziekos.cz"
          customDomain="https://plan.danielhnyk.cz"
          selfHosted
          trackOutboundLinks
        >
          <LanguageProvider>{children}</LanguageProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
