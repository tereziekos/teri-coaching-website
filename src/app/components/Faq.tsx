'use client';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import FaqAccordion from './faq/FaqAccordion';
import FaqClosing from './faq/FaqClosing';

export default function Faq() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block subpage" id="faq">
      <h1 className="subpage-title">{tr.faqTitle}</h1>
      <p className="faq-intro">{tr.faqIntro}</p>
      <hr className="hairline" />

      <FaqAccordion variant="bold" />

      <FaqClosing />

      <div className="faq-cta">
        <p className="faq-cta-title">{tr.faqCtaTitle}</p>
        <p className="faq-cta-text">{tr.faqCtaText}</p>
        <div className="faq-cta-actions">
          <Link href="/#first-conversation" className="btn-whisper">{tr.heroCta}</Link>
          <Link href="/#pricing" className="faq-cta-secondary">{tr.faqCtaSecondary}</Link>
        </div>
      </div>
    </section>
  );
}
