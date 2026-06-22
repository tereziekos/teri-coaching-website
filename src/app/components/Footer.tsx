'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Footer() {
  const { lang, toggle } = useLanguage();
  const tr = t(lang);

  return (
    <footer className="site-footer">
      <p className="sig">{tr.footerSig}</p>

      <div className="footer-links">
        <a href="mailto:tereziealder@gmail.com" className="footer-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m3.5 7 8.5 6 8.5-6" />
          </svg>
          {tr.footerEmail}
        </a>
        <a
          href="https://www.youtube.com/@TerezieAlder"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="4.5" />
            <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
          </svg>
          {tr.footerYoutube}
        </a>
      </div>

      <div className="footer-meta">
        <div className="brand" style={{ fontSize: '13px' }}>
          <span className="brand-dot" />
          terezie alder
        </div>
        <span className="lang-toggle" onClick={toggle}>
          <span className={lang === 'cs' ? 'active' : 'dim'}>cs</span>
          <span className="sep">&middot;</span>
          <span className={lang === 'en' ? 'active' : 'dim'}>en</span>
        </span>
      </div>
    </footer>
  );
}
