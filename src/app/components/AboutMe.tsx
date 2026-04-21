'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function AboutMe() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block">
      <p className="label">{tr.aboutLabel}</p>
      <hr className="hairline" />
      <div className="about-grid">
        <div className="prose">
          <p>{tr.aboutP1}</p>
          <p>{tr.aboutP2}</p>
          <p className="caption-intro">{tr.aboutBulletIntro}</p>
          <ul className="bullet-list">
            {tr.aboutBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.5rem' }}>{tr.aboutBackground}</p>
          <p>{tr.aboutClosing}</p>
        </div>
        <figure style={{ margin: 0 }}>
          <div className="portrait">
            <Image
              src="/images/PhotoWholePerson.jpeg"
              alt="Terezie"
              width={500}
              height={625}
            />
          </div>
          <figcaption className="caption">{tr.aboutCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
