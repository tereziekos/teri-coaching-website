'use client';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Nav() {
  const { lang, prefix, toggle } = useLanguage();
  const tr = t(lang);
  const home = prefix || '/';

  return (
    <nav className="top">
      <Link href={home} className="brand">
        <span className="brand-dot" />
        terezie alder
      </Link>
      <div className="nav-right">
        <Link href={`${home}#about`} className="nav-link nav-link-section">{tr.aboutLabel}</Link>
        <Link href={`${home}#approach`} className="nav-link nav-link-section">{tr.approachLabel}</Link>
        <Link href={`${home}#pricing`} className="nav-link nav-link-section">{tr.contLabel}</Link>
        <Link href={`${prefix}/faq`} className="nav-link nav-link-page">{tr.faqNav}</Link>
        <Link href={`${prefix}/blog`} className="nav-link nav-link-page">{tr.blogNav}</Link>
        <span className="lang-toggle" onClick={toggle}>
          <span className={lang === 'cs' ? 'active' : 'dim'}>cs</span>
          <span className="sep">&middot;</span>
          <span className={lang === 'en' ? 'active' : 'dim'}>en</span>
        </span>
        <Link href={`${home}#first-conversation`} className="book-link">
          {tr.bookLink}
        </Link>
      </div>
    </nav>
  );
}
