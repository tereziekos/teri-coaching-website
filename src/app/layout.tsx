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
  metadataBase: new URL('https://www.tereziekos.cz'),
  title: 'terezie alder \u00B7 coaching',
  description: 'Kou\u010Dink pro vztahy, emoce a sebep\u0159ijet\u00ED. Pracuji s IFS, mindfulness a pr\u00E1c\u00ED s t\u011Blem. \u010Cesky i anglicky, online. Coaching for relationships, emotions and self-acceptance.',
  keywords: ['kou\u010Dink', 'coaching', 'IFS', 'terapie', 'mindfulness', 'Praha', 'online', 'vztahy', 'emoce', 'Radical Honesty', 'tantra', 'p\u00E1rov\u00FD kou\u010Dink', 'couples coaching', 'attachment', 'sebep\u0159ijet\u00ED'],
  authors: [{ name: 'Terezie Alder' }],
  openGraph: {
    title: 'terezie alder \u00B7 coaching',
    description: 'Kou\u010Dink pro vztahy, emoce a sebep\u0159ijet\u00ED. Pracuji s IFS, mindfulness a pr\u00E1c\u00ED s t\u011Blem. \u010Cesky i anglicky.',
    url: 'https://www.tereziekos.cz',
    siteName: 'terezie alder coaching',
    images: [{ url: '/images/photos/photo-smile.jpg', width: 1400, height: 1050 }],
    locale: 'cs_CZ',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'terezie alder \u00B7 coaching',
    description: 'Kou\u010Dink pro vztahy, emoce a sebep\u0159ijet\u00ED. IFS, mindfulness, pr\u00E1ce s t\u011Blem. \u010Cesky i anglicky.',
    images: ['/images/photos/photo-smile.jpg'],
  },
  alternates: {
    canonical: 'https://www.tereziekos.cz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Terezie Alder Coaching',
  description: 'Kou\u010Dink pro vztahy, emoce a sebep\u0159ijet\u00ED. IFS, mindfulness, Radical Honesty, pr\u00E1ce s t\u011Blem.',
  url: 'https://www.tereziekos.cz',
  image: 'https://www.tereziekos.cz/images/photos/photo-smile.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Praha',
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.0755,
    longitude: 14.4378,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  sameAs: [],
  founder: {
    '@type': 'Person',
    name: 'Terezie Alder',
    jobTitle: 'Coach',
    knowsLanguage: ['cs', 'en'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Coaching sessions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Free intro session', description: '60 minute free introductory coaching session' },
        price: '0',
        priceCurrency: 'CZK',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Individual coaching 60 min' },
        price: '2500',
        priceCurrency: 'CZK',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Individual coaching 90 min' },
        price: '3000',
        priceCurrency: 'CZK',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Couples coaching 100 min' },
        price: '3500',
        priceCurrency: 'CZK',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://cal.com" />
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
