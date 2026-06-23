import type { Metadata } from 'next';
import Faq from '../components/Faq';

export const metadata: Metadata = {
  title: 'časté dotazy · terezie alder',
  description: 'Časté dotazy ke koučinku s Terezií Alder: jak probíhá první sezení, online i osobně, jazyky, platba přes benefity. Frequently asked questions about coaching.',
  alternates: { canonical: 'https://tereziealder.cz/faq' },
};

export default function FaqPage() {
  return <Faq />;
}
