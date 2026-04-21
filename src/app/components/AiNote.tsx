'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function AiNote() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block">
      <p className="label">{tr.aiLabel}</p>
      <hr className="hairline" />
      <p className="ai-open">{tr.aiOpen}</p>
      <p className="ai-body">{tr.aiP1}</p>
      <p className="ai-body">{tr.aiP2}</p>
      <p className="ai-body">{tr.aiP3}</p>
      <p className="ai-body">{tr.aiP4}</p>
      <p className="ai-body final">{tr.aiFinal}</p>
    </section>
  );
}
