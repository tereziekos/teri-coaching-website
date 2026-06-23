import type { Metadata } from 'next';
import Blog from '../components/Blog';

export const metadata: Metadata = {
  title: 'blog · terezie alder',
  description: 'Blog Terezie Alder: poznámky o koučinku, vztazích a vnitřní práci. Notes on coaching, relationships, and inner work.',
  alternates: { canonical: 'https://tereziealder.cz/blog' },
};

export default function BlogPage() {
  return <Blog />;
}
