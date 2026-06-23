'use client';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { faq } from '../../content/faq';

export type FaqStyle = 'minimal' | 'card' | 'numbered' | 'bold';

export default function FaqAccordion({ variant }: { variant: FaqStyle }) {
  const { lang } = useLanguage();
  const items = faq[lang];
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const icon = variant === 'card' || variant === 'numbered' ? 'chev' : 'plus';

  return (
    <ul className={`faq-acc faq-acc--${variant}`}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <li key={i} className={`faq-acc-item ${isOpen ? 'open' : ''}`}>
            <button
              className="faq-acc-q"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              {variant === 'numbered' && (
                <span className="faq-acc-num">{String(i + 1).padStart(2, '0')}</span>
              )}
              <span className="faq-acc-qtext">{item.q}</span>
              <span className={`faq-acc-icon ${icon}`} aria-hidden="true" />
            </button>
            <div className="faq-acc-wrap">
              <div className="faq-acc-inner">
                {item.a.map((p, j) => (
                  <p key={j} className="faq-acc-a">{p}</p>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
