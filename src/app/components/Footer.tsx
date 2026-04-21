'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Footer() {
  const { lang, toggle } = useLanguage();
  const tr = t(lang);

  return (
    <footer className="site-footer">
      <p className="sig">{tr.footerSig}</p>
      <div className="footer-row">
        <div className="brand" style={{ fontSize: '13px' }}>
          <span className="brand-dot" />
          terezie
        </div>
        <div className="footer-links">
          <a href="mailto:kosikova.terezie@gmail.com">{tr.footerEmail}</a>
          <a href="#">{tr.footerYoutube}</a>
          <a href="#">{tr.footerBlog}</a>
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
