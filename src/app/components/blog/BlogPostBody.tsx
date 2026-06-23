import Link from 'next/link';
import { Block } from '../../content/posts';
import { t } from '../../content/translations';

export default function BlogPostBody({ body, lang }: { body: Block[]; lang: 'en' | 'cs' }) {
  const tr = t(lang);
  return (
    <div className="blog-post-body">
      {body.map((b, i) => {
        if (b.type === 'h2') return <h2 key={i} className="blog-post-h2">{b.text}</h2>;
        if (b.type === 'cta')
          return (
            <aside key={i} className="blog-cta">
              <p className="blog-cta-text">{b.text}</p>
              <Link href="/#first-conversation" className="btn-whisper">{tr.faqCtaPrimary}</Link>
            </aside>
          );
        if (b.type === 'video')
          return (
            <div key={i} className="blog-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${b.id}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          );
        return <p key={i}>{b.text}</p>;
      })}
    </div>
  );
}
