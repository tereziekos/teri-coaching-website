'use client';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../content/translations';
import { posts, formatDate } from '../../content/posts';

export default function BlogCards() {
  const { lang, prefix } = useLanguage();
  const tr = t(lang);
  const items = posts[lang];

  return (
    <div className="blog-v-cards">
      {items.map((p) => (
        <Link href={`${prefix}/blog/${p.slug}`} className="blog-card" key={p.slug}>
          <div className={`blog-card-media ${p.image ? '' : 'is-empty'}`}>
            {p.image ? (
              <img src={p.image} alt={p.imageAlt || ''} loading="lazy" />
            ) : (
              <span className="blog-card-dot" aria-hidden="true" />
            )}
          </div>
          <div className="blog-card-body">
            <time className="blog-card-date">{formatDate(p.date, lang)}</time>
            <h2 className="blog-card-title">{p.title}</h2>
            <p className="blog-card-excerpt">{p.excerpt}</p>
            <span className="blog-card-more">{tr.blogReadMore} →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
