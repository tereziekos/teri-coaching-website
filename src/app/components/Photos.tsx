'use client';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Photos() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block">
      <p className="label">{tr.photosLabel}</p>
      <hr className="hairline" />
      <div className="photos-grid">
        <figure style={{ margin: 0 }}>
          <div className="photo">
            <Image
              src="/images/MainProfileFace.jpeg"
              alt={tr.photoCaption1}
              width={400}
              height={500}
            />
          </div>
          <figcaption className="caption">{tr.photoCaption1}</figcaption>
        </figure>
        <figure style={{ margin: 0 }}>
          <div className="photo">
            <Image
              src="/images/PhotoWholePerson.jpeg"
              alt={tr.photoCaption2}
              width={400}
              height={500}
            />
          </div>
          <figcaption className="caption">{tr.photoCaption2}</figcaption>
        </figure>
        <figure style={{ margin: 0 }}>
          <div className="photo">
            <Image
              src="/images/action_photo.jpeg"
              alt={tr.photoCaption3}
              width={400}
              height={500}
            />
          </div>
          <figcaption className="caption">{tr.photoCaption3}</figcaption>
        </figure>
      </div>
    </section>
  );
}
