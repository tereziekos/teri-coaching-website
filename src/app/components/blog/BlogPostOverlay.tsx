'use client';
import Link from 'next/link';
import { t } from '../../content/translations';
import { Post, formatDate } from '../../content/posts';
import BlogPostBody from './BlogPostBody';

export default function BlogPostOverlay({ post, lang }: { post: Post; lang: 'en' | 'cs' }) {
  const tr = t(lang);
  return (
    <article className="blog-post blog-post--overlay">
      <Link href="/blog" className="blog-back">{tr.blogBack}</Link>
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
    </article>
  );
}
