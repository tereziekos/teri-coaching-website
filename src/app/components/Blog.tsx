'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { posts } from '../content/posts';
import BlogCards from './blog/BlogCards';

export default function Blog() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const hasPosts = posts[lang].length > 0;

  return (
    <section className="block subpage" id="blog">
      <h1 className="subpage-title">{tr.blogTitle}</h1>
      <p className="faq-intro">{tr.blogIntro}</p>
      <hr className="hairline" />

      {hasPosts ? <BlogCards /> : <p className="blog-empty">{tr.blogEmpty}</p>}
    </section>
  );
}
