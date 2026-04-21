'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function AiNote() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block" id="ai">
      <p className="label">{tr.aiLabel}</p>
      <hr className="hairline" />
      <p className="ai-open">{tr.aiOpen}</p>
      {tr.aiP1 && <p className="ai-body">{tr.aiP1}</p>}
      {tr.aiP2 && <p className="ai-body">{tr.aiP2}</p>}
      {tr.aiP3 && <p className="ai-body">{tr.aiP3}</p>}
      {tr.aiP4 && <p className="ai-body">{tr.aiP4}</p>}
      {tr.aiFinal && <p className="ai-body final">{tr.aiFinal}</p>}
    </section>
  );
}
