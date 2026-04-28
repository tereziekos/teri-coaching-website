'use client';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

// Chapter timestamps in seconds — update these with real times
const chapters = {
  en: [
    { time: 0, label: '' },
    { time: 73, label: '' },
    { time: 128, label: '' },
  ],
  cs: [
    { time: 0, label: '' },
    { time: 66, label: '' },
    { time: 96, label: '' },
  ],
};

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function Videos() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = lang === 'cs'
    ? '/images/photos/video-cs-intro.mp4'
    : '/images/photos/video-en-intro.mp4';
  const posterSrc = lang === 'cs'
    ? '/images/photos/thumb-cs.jpg'
    : '/images/photos/thumb-en.jpg';
  const ch = chapters[lang];

  const seekTo = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play();
    }
  };

  return (
    <section className="block">
      <p className="label">{tr.videosLabel}</p>
      <hr className="hairline" />
      <div className="videos-grid">
        <div>
          <video
            key={lang}
            ref={videoRef}
            className="video-player-real"
            controls
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <ul className="video-list">
          <li className="video-item" onClick={() => seekTo(ch[0].time)}>
            <p className="video-title">{tr.video1Title}</p>
            <div className="video-meta">
              <span className="chapter-time">{formatTime(ch[0].time)}</span>
            </div>
          </li>
          <li className="video-item" onClick={() => seekTo(ch[1].time)}>
            <p className="video-title">{tr.video2Title}</p>
            <div className="video-meta">
              <span className="chapter-time">{formatTime(ch[1].time)}</span>
            </div>
          </li>
          <li className="video-item" onClick={() => seekTo(ch[2].time)}>
            <p className="video-title">{tr.video3Title}</p>
            <div className="video-meta">
              <span className="chapter-time">{formatTime(ch[2].time)}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
