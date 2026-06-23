import type { Metadata } from 'next';
import HomeMain from './components/HomeMain';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://tereziealder.cz',
    languages: {
      cs: 'https://tereziealder.cz',
      en: 'https://tereziealder.cz/en',
      'x-default': 'https://tereziealder.cz',
    },
  },
};

export default function MainPage() {
  return <HomeMain />;
}
