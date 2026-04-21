'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="hero">
      <h1>{tr.heroTitle}</h1>
      <p className="lede">{tr.heroLede}</p>
      <a href="#first-conversation" className="btn-whisper">
        {tr.heroCta}
      </a>
      <div className="scroll-hint">
        <span className="scroll-line" />
        <span>{tr.scrollHint}</span>
      </div>
    </section>
  );
}
