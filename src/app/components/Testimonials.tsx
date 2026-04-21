'use client';
import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { testimonials } from '../content/testimonials';

export default function Testimonials() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const total = testimonials.length;

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

  const prev = () => show((current - 1 + total) % total);
  const next = () => show((current + 1) % total);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') show((current - 1 + total) % total);
      if (e.key === 'ArrowRight') show((current + 1) % total);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [current, total, show]);

  return (
    <section className="block">
      <p className="label">{tr.testimonialsLabel}</p>
      <hr className="hairline" />
      <div className="testimonial-stage">
        <span className="qmark">&ldquo;</span>
        <p className="testimonial-quote" style={{ opacity }}>
          {testimonials[current].quote}
        </p>
        <div className="testimonial-attr" style={{ opacity }}>
          {testimonials[current].name}
        </div>
        <div className="carousel-nav">
          <button className="t-arrow" onClick={prev} aria-label="previous testimonial">
            &larr;
          </button>
          <div className="t-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={i === current ? 'active' : ''}
                onClick={() => show(i)}
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
