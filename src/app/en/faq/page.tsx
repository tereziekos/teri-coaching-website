import type { Metadata } from 'next';
import Faq from '../../components/Faq';
import { faq } from '../../content/faq';

export const metadata: Metadata = {
  title: 'frequently asked · terezie alder',
  description:
    'Frequently asked questions about coaching with Terezie Alder: how a first session works, online or in person, languages, paying through employee benefits.',
  alternates: {
    canonical: 'https://tereziealder.cz/en/faq',
    languages: {
      cs: 'https://tereziealder.cz/faq',
      en: 'https://tereziealder.cz/en/faq',
      'x-default': 'https://tereziealder.cz/faq',
    },
  },
  openGraph: {
    type: 'website',
    title: 'frequently asked · terezie alder',
    description:
      'Frequently asked questions about coaching with Terezie Alder: first session, online or in person, languages, employee benefits.',
    url: 'https://tereziealder.cz/en/faq',
    siteName: 'terezie alder coaching',
    images: [{ url: '/images/photos/photo-smile.jpg', width: 1400, height: 1050 }],
    locale: 'en_US',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.en.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a.join(' ') },
  })),
};

export default function EnFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Faq />
    </>
  );
}
