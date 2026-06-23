import type { Metadata } from 'next';
import Blog from '../../components/Blog';

export const metadata: Metadata = {
  title: 'blog · terezie alder',
  description: 'Notes on coaching, relationships, and the inner work, by Terezie Alder.',
  alternates: {
    canonical: 'https://tereziealder.cz/en/blog',
    languages: {
      cs: 'https://tereziealder.cz/blog',
      en: 'https://tereziealder.cz/en/blog',
      'x-default': 'https://tereziealder.cz/blog',
    },
  },
  openGraph: {
    type: 'website',
    title: 'blog · terezie alder',
    description: 'Notes on coaching, relationships, and the inner work.',
    url: 'https://tereziealder.cz/en/blog',
    siteName: 'terezie alder coaching',
    images: [{ url: '/images/photos/photo-smile.jpg', width: 1400, height: 1050 }],
    locale: 'en_US',
  },
};

export default function EnBlogPage() {
  return <Blog />;
}
