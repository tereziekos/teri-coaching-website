'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import FaqAccordion from './faq/FaqAccordion';
import FaqClosing from './faq/FaqClosing';

export default function Faq() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [stickyHidden, setStickyHidden] = useState(false);

  // Hide the floating CTA once the big end-CTA scrolls into view (avoid two CTAs at once).
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setStickyHidden(entry.isIntersecting),
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="block subpage" id="faq">
      <h1 className="subpage-title">{tr.faqTitle}</h1>
      <p className="faq-intro">{tr.faqIntro}</p>
      <hr className="hairline" />

      <FaqAccordion variant="bold" />

      <FaqClosing />

      <div className="faq-cta" ref={ctaRef}>
        <p className="faq-cta-title">{tr.faqCtaTitle}</p>
        <p className="faq-cta-text">{tr.faqCtaText}</p>
        <div className="faq-cta-actions">
          <Link href="/#first-conversation" className="btn-whisper">{tr.faqCtaPrimary}</Link>
          <Link href="/#pricing" className="faq-cta-secondary">{tr.faqCtaSecondary}</Link>
        </div>
      </div>

      <Link
        href="/#first-conversation"
        className={`faq-sticky ${stickyHidden ? 'is-hidden' : ''}`}
        aria-hidden={stickyHidden}
        tabIndex={stickyHidden ? -1 : undefined}
      >
        {tr.faqStickyCta}
      </Link>
    </section>
  );
}
