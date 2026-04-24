'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

const videos = [
  { src: '/images/photos/video-cs-intro.mp4', lang: 'cs' },
];

export default function Videos() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="block">
      <p className="label">{tr.videosLabel}</p>
      <hr className="hairline" />
      <div className="videos-grid">
        <div>
          {videos[activeVideo]?.src ? (
            <video
              className="video-player-real"
              controls
              preload="metadata"
              key={activeVideo}
            >
              <source src={videos[activeVideo].src} type="video/mp4" />
            </video>
          ) : (
            <div className="video-player">
              <div className="play-triangle" />
            </div>
          )}
        </div>
        <ul className="video-list">
          <li
            className={`video-item ${activeVideo === 0 ? 'video-item-active' : ''}`}
            onClick={() => setActiveVideo(0)}
          >
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
