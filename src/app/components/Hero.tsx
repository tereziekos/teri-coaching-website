'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{tr.heroTitle}</h1>
        <p className="lede">{tr.heroLede}</p>
        <a href="#first-conversation" className="btn-whisper">
          {tr.heroCta}
        </a>
        <div className="scroll-hint">
          <span className="scroll-arrow">&#8595;</span>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src="/images/photos/photo-smile.jpg"
          alt="terezie alder"
          width={1000}
          height={750}
          priority
        />
      </div>
    </section>
  );
}
