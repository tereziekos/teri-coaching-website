import type { Metadata } from 'next';
import HomeMain from '../components/HomeMain';

export const metadata: Metadata = {
  title: 'terezie alder · coaching',
  description:
    'Coaching for relationships, emotions and self-acceptance. I work with IFS, mindfulness and body-based work. In Czech or English, online.',
  alternates: {
    canonical: 'https://tereziealder.cz/en',
    languages: {
      cs: 'https://tereziealder.cz',
      en: 'https://tereziealder.cz/en',
      'x-default': 'https://tereziealder.cz',
    },
  },
  openGraph: {
    title: 'terezie alder · coaching',
    description:
      'Coaching for relationships, emotions and self-acceptance. IFS, mindfulness, body-based work. Czech or English.',
    url: 'https://tereziealder.cz/en',
    siteName: 'terezie alder coaching',
    images: [{ url: '/images/photos/photo-smile.jpg', width: 1400, height: 1050 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnHomePage() {
  return <HomeMain />;
}
