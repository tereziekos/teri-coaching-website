'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Footer() {
  const { lang, toggle } = useLanguage();
  const tr = t(lang);
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      e.preventDefault();
      navigator.clipboard
        .writeText('tereziealder@gmail.com')
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {});
    }
  };

  return (
    <footer className="site-footer">
      <p className="sig">{tr.footerSig}</p>

      <div className="footer-links">
        <a
          href="https://www.youtube.com/@TerezieAlder"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link footer-social"
          aria-label={tr.footerYoutube}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="4.5" />
            <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="mailto:tereziealder@gmail.com"
          className="footer-link footer-social footer-email"
          aria-label={tr.footerEmail}
          onClick={copyEmail}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m3.5 7 8.5 6 8.5-6" />
          </svg>
          {copied && (
            <span className="footer-copied" aria-live="polite">{tr.footerCopied}</span>
          )}
        </a>
        <a
          href="https://www.instagram.com/tereziealder/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link footer-social"
          aria-label={tr.footerInstagram}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
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
