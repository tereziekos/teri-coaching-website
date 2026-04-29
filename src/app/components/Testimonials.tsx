'use client';
import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { testimonials } from '../content/testimonials';

export default function Testimonials() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const items = testimonials[lang];
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  const show = useCallback(
    (i: number) => {
      setOpacity(0);
      setTimeout(() => {
        setCurrent(i);
        setOpacity(1);
      }, 250);
    },
    []
  );

  const prev = () => { setPaused(true); show((current - 1 + total) % total); };
  const next = () => { setPaused(true); show((current + 1) % total); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setPaused(true);
      if (e.key === 'ArrowLeft') show((current - 1 + total) % total);
      if (e.key === 'ArrowRight') show((current + 1) % total);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [current, total, show]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      show((current + 1) % total);
    }, 15000);
    return () => clearInterval(timer);
  }, [current, total, show, paused]);

  return (
    <section className="block">
      <p className="label">{tr.testimonialsLabel}</p>
      <hr className="hairline" />
      <div className="testimonial-stage" onClick={() => setPaused(true)}>
        <span className="qmark">&ldquo;</span>
        <p className="testimonial-quote" style={{ opacity }}>
          {items[current].quote}
        </p>
        <div className="testimonial-attr" style={{ opacity }}>
          {items[current].name}
        </div>
        {lang === 'cs' && (
          <p className="testimonial-note" style={{ opacity }}>(překlad z angličtiny)</p>
        )}
        <div className="carousel-nav">
          <button className="t-arrow" onClick={prev} aria-label="previous testimonial">
            &larr;
          </button>
          <div className="t-dots">
            {items.map((_, i) => (
              <span
                key={i}
                className={i === current ? 'active' : ''}
                onClick={() => { setPaused(true); show(i); }}
              />
            ))}
          </div>
          <button className="t-arrow" onClick={next} aria-label="next testimonial">
            &rarr;
          </button>
          <span className="t-idx">
            {current + 1} / {total}
          </span>
        </div>
      </div>
    </section>
  );
}
