'use client';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../content/translations';

export default function FaqClosing() {
  const { lang } = useLanguage();
  const tr = t(lang);
  return (
    <p className="faq-closing">
      {tr.faqClosingLead}{' '}
      <a href="mailto:tereziealder@gmail.com">tereziealder@gmail.com</a>{'. '}
      {tr.faqClosingTail}
    </p>
  );
}
