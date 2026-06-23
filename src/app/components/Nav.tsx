'use client';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const tr = t(lang);

  return (
    <nav className="top">
      <Link href="/" className="brand">
        <span className="brand-dot" />
        terezie alder
      </Link>
      <div className="nav-right">
        <Link href="/#about" className="nav-link nav-link-section">{tr.aboutLabel}</Link>
        <Link href="/#approach" className="nav-link nav-link-section">{tr.approachLabel}</Link>
        <Link href="/#pricing" className="nav-link nav-link-section">{tr.contLabel}</Link>
        <Link href="/faq" className="nav-link nav-link-page">{tr.faqNav}</Link>
        <Link href="/blog" className="nav-link nav-link-page">{tr.blogNav}</Link>
        <span className="lang-toggle" onClick={toggle}>
          <span className={lang === 'cs' ? 'active' : 'dim'}>cs</span>
          <span className="sep">&middot;</span>
          <span className={lang === 'en' ? 'active' : 'dim'}>en</span>
        </span>
        <Link href="/#first-conversation" className="book-link">
          {tr.bookLink}
        </Link>
      </div>
    </nav>
  );
}
