'use client';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../content/translations';
import { posts } from '../../content/posts';
import BlogPostOverlay from './BlogPostOverlay';

export default function BlogPost({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const tr = t(lang);
  const post = posts[lang].find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="block subpage">
        <Link href="/blog" className="blog-back">{tr.blogBack}</Link>
        <p className="blog-empty">{tr.blogEmpty}</p>
      </section>
    );
  }

  return (
    <section className="block subpage blog-post-section">
      <BlogPostOverlay post={post} lang={lang} />
    </section>
  );
}
