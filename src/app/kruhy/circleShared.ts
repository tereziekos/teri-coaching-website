import type { Metadata } from 'next';
import { circles } from '../content/circles';
import { formatDate } from '../content/posts';

type Lang = 'cs' | 'en';
const BASE = 'https://tereziealder.cz';

const listUrl = (lang: Lang) => (lang === 'en' ? `${BASE}/en/kruhy` : `${BASE}/kruhy`);
const circleUrl = (lang: Lang, slug: string) => `${listUrl(lang)}/${slug}`;

export function circleStaticParams() {
  return circles.map((c) => ({ slug: c.slug }));
}

export function circlesListMetadata(lang: Lang): Metadata {
  const title = lang === 'en' ? 'women’s circles · terezie alder' : 'ženské kruhy · terezie alder';
  const description =
    lang === 'en'
      ? 'Women’s circles with Terezie Alder in Prague: evenings of presence, self-care and sharing. Held in Czech.'
      : 'Ženské kruhy s Terezií Alder v Praze: večery zpřítomnění, sebepéče a sdílení.';
  return {
    title,
    description,
    alternates: {
      canonical: listUrl(lang),
      languages: { cs: listUrl('cs'), en: listUrl('en'), 'x-default': listUrl('cs') },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: listUrl(lang),
      siteName: 'terezie alder coaching',
      images: [{ url: '/images/photos/photo-smile.jpg', width: 1400, height: 1050 }],
      locale: lang === 'en' ? 'en_US' : 'cs_CZ',
    },
  };
}

export function circleMetadata(lang: Lang, slug: string): Metadata {
  const c = circles.find((x) => x.slug === slug);
  if (!c) return circlesListMetadata(lang);
  const title = `Ženský kruh: ${c.title} · terezie alder`;
  const description = `${formatDate(c.date, 'cs')}, ${c.time}, ${c.venue}. ${c.excerpt}`;
  const image = c.image ? `${BASE}${c.image}` : `${BASE}/images/photos/photo-smile.jpg`;
  return {
    title,
    description,
    alternates: {
      canonical: circleUrl(lang, slug),
      languages: {
        cs: circleUrl('cs', slug),
        en: circleUrl('en', slug),
        'x-default': circleUrl('cs', slug),
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: circleUrl(lang, slug),
      siteName: 'terezie alder coaching',
      images: [{ url: image }],
      locale: lang === 'en' ? 'en_US' : 'cs_CZ',
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function circleJsonLd(lang: Lang, slug: string) {
  const c = circles.find((x) => x.slug === slug);
  if (!c) return [];
  const [start, end] = c.time.split(/[–-]/).map((s) => s.trim());
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `Ženský kruh: ${c.title}`,
      description: c.excerpt,
      startDate: `${c.date}T${start}`,
      endDate: end ? `${c.date}T${end}` : undefined,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: c.venue,
        address: { '@type': 'PostalAddress', addressLocality: 'Praha', addressCountry: 'CZ' },
      },
      offers: {
        '@type': 'Offer',
        price: c.price.replace(/\D/g, ''),
        priceCurrency: 'CZK',
        url: c.signupUrl,
        availability: 'https://schema.org/InStock',
      },
      organizer: { '@type': 'Person', name: 'Terezie Alder', url: BASE },
      inLanguage: 'cs',
      url: circleUrl(lang, slug),
    },
  ];
}
