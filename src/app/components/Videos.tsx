'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function Videos() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block">
      <p className="label">{tr.videosLabel}</p>
      <hr className="hairline" />
      <div className="videos-grid">
        <div>
          <div className="video-player">
            <div className="play-triangle" />
          </div>
          <ol className="chapters">
            <li className="chapter-row">
              <span className="chapter-time">00:00</span>
              <span>{tr.chapter1}</span>
            </li>
            <li className="chapter-row">
              <span className="chapter-time">02:14</span>
              <span>{tr.chapter2}</span>
            </li>
            <li className="chapter-row">
              <span className="chapter-time">05:30</span>
              <span>{tr.chapter3}</span>
            </li>
          </ol>
        </div>
        <ul className="video-list">
          <li className="video-item">
            <p className="video-title">{tr.video1Title}</p>
            <div className="video-meta">
              <span className={`lang-tag${tr.video1Lang === lang ? ' active' : ''}`}>{tr.video1Lang}</span>
              <span>&middot; {tr.video1Duration}</span>
            </div>
          </li>
          <li className="video-item">
            <p className="video-title">{tr.video2Title}</p>
            <div className="video-meta">
              <span className={`lang-tag${tr.video2Lang === lang ? ' active' : ''}`}>{tr.video2Lang}</span>
              <span>&middot; {tr.video2Duration}</span>
            </div>
          </li>
          <li className="video-item">
            <p className="video-title">{tr.video3Title}</p>
            <div className="video-meta">
              <span className={`lang-tag${tr.video3Lang === lang ? ' active' : ''}`}>{tr.video3Lang}</span>
              <span>&middot; {tr.video3Duration}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
