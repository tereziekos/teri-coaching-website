'use client';
import Link from 'next/link';
import { t } from '../../content/translations';
import { Post, formatDate } from '../../content/posts';
import BlogPostBody from './BlogPostBody';

export default function BlogPostOverlay({ post, lang }: { post: Post; lang: 'en' | 'cs' }) {
  const tr = t(lang);
  const prefix = lang === 'en' ? '/en' : '';
  return (
    <article className="blog-post blog-post--overlay">
      <Link href={`${prefix}/blog`} className="blog-back">{tr.blogBack}</Link>
      <div
        className="blog-overlay-banner"
        style={post.image ? { backgroundImage: `url(${post.image})` } : undefined}
        role="img"
        aria-label={post.imageAlt || ''}
      >
        <div className="blog-overlay-inner">
          <time className="blog-post-date">{formatDate(post.date, lang)}</time>
          <h1 className="blog-post-title">{post.title}</h1>
        </div>
      </div>
      <BlogPostBody body={post.body} />
      <a
        href="https://www.youtube.com/@TerezieAlder"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-youtube"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="4.5" />
          <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
        </svg>
        {tr.blogYoutube}
      </a>
    </article>
  );
}
