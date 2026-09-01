'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function SocialRow() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <div className="social-row">
      <span className="social-row-label">{tr.followLabel}</span>
      <div className="social-row-icons">
        <a
          href="https://www.youtube.com/@TerezieAlder"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="YouTube"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="4.5" />
            <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/tereziealder/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </div>
  );
}
