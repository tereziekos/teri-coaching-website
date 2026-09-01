'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../content/translations';
import { posts } from '../../content/posts';
import BlogPostOverlay from './BlogPostOverlay';

export default function BlogPost({ slug }: { slug: string }) {
  const { lang, prefix } = useLanguage();
  const tr = t(lang);
  const post = posts[lang].find((p) => p.slug === slug);
  const [stickyHidden, setStickyHidden] = useState(false);

  // Hide the floating CTA once the end CTA card scrolls into view.
  useEffect(() => {
    if (!post || typeof IntersectionObserver === 'undefined') return;
    const el = document.querySelector('.blog-cta');
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStickyHidden(entry.isIntersecting),
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [post, slug]);

  if (!post) {
    return (
      <section className="block subpage">
        <Link href={`${prefix}/blog`} className="blog-back">{tr.blogBack}</Link>
        <p className="blog-empty">{tr.blogEmpty}</p>
      </section>
    );
  }

  const bookHref = lang === 'en' ? '/en#first-conversation' : '/#first-conversation';

  return (
    <section className="block subpage blog-post-section">
      <BlogPostOverlay post={post} lang={lang} />
      <Link
        href={bookHref}
        className={`blog-side-cta ${stickyHidden ? 'is-hidden' : ''}`}
        aria-hidden={stickyHidden}
        tabIndex={stickyHidden ? -1 : undefined}
      >
        {tr.faqStickyCta}
      </Link>
    </section>
  );
}
