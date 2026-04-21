'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const tr = t(lang);

  return (
    <nav className="top">
      <div className="brand">
        <span className="brand-dot" />
        terezie alder
      </div>
      <div className="nav-right">
        <a href="#about" className="nav-link">{tr.aboutLabel}</a>
        <a href="#approach" className="nav-link">{tr.approachLabel}</a>
        <a href="#ai" className="nav-link">{tr.aiLabel}</a>
        <a href="#pricing" className="nav-link">{tr.contLabel}</a>
        <span className="lang-toggle" onClick={toggle}>
          <span className={lang === 'cs' ? 'active' : 'dim'}>cs</span>
          <span className="sep">&middot;</span>
          <span className={lang === 'en' ? 'active' : 'dim'}>en</span>
        </span>
        <a href="#first-conversation" className="book-link">
          {tr.bookLink}
        </a>
      </div>
    </nav>
  );
}
