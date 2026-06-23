import type { Metadata } from 'next';
import { posts, Post } from '../content/posts';

type Lang = 'cs' | 'en';
const BASE = 'https://tereziealder.cz';

const postUrl = (lang: Lang, slug: string) =>
  lang === 'en' ? `${BASE}/en/blog/${slug}` : `${BASE}/blog/${slug}`;

export function postStaticParams(lang: Lang) {
  return posts[lang].map((p) => ({ slug: p.slug }));
}

function twinUrls(post: Post) {
  const cs = posts.cs.find((p) => p.id === post.id);
  const en = posts.en.find((p) => p.id === post.id);
  return {
    cs: cs ? `${BASE}/blog/${cs.slug}` : undefined,
    en: en ? `${BASE}/en/blog/${en.slug}` : undefined,
  };
}

export function postMetadata(lang: Lang, slug: string): Metadata {
  const post = posts[lang].find((p) => p.slug === slug);
  const self = postUrl(lang, slug);
  const title = post ? post.seoTitle ?? `${post.title} · terezie alder` : 'blog · terezie alder';
  const description = post?.seoDescription ?? post?.excerpt;
  const image = post?.image ? `${BASE}${post.image}` : `${BASE}/images/photos/photo-smile.jpg`;
  const tw = post ? twinUrls(post) : { cs: undefined, en: undefined };
  return {
    title,
    description,
    alternates: {
      canonical: self,
      languages: {
        ...(tw.cs && { cs: tw.cs }),
        ...(tw.en && { en: tw.en }),
        ...(tw.cs && { 'x-default': tw.cs }),
      },
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: self,
      siteName: 'terezie alder coaching',
      images: [{ url: image }],
      publishedTime: post?.date,
      locale: lang === 'en' ? 'en_US' : 'cs_CZ',
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function postJsonLd(lang: Lang, slug: string) {
  const post = posts[lang].find((p) => p.slug === slug);
  if (!post) return [];
  const self = postUrl(lang, slug);
  const home = lang === 'en' ? `${BASE}/en` : BASE;
  const blogUrl = lang === 'en' ? `${BASE}/en/blog` : `${BASE}/blog`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      datePublished: post.date,
      image: post.image ? `${BASE}${post.image}` : undefined,
      author: { '@type': 'Person', name: 'Terezie Alder' },
      publisher: { '@type': 'Person', name: 'Terezie Alder' },
      mainEntityOfPage: self,
      inLanguage: lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : 'Domů', item: home },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: blogUrl },
        { '@type': 'ListItem', position: 3, name: post.title, item: self },
      ],
    },
  ];
}
