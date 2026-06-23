'use client';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { posts } from '../content/posts';

export default function Blog() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const items = posts[lang];

  return (
    <section className="block subpage" id="blog">
      <h1 className="subpage-title">{tr.blogTitle}</h1>
      <p className="faq-intro">{tr.blogIntro}</p>
      <hr className="hairline" />

      {items.length === 0 ? (
        <p className="blog-empty">{tr.blogEmpty}</p>
      ) : (
        <ul className="post-list">
          {items.map((post) => (
            <li key={post.slug} className="post-item">
              <Link href={`/blog/${post.slug}`} className="post-link">
                <time className="post-date">{post.date}</time>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
