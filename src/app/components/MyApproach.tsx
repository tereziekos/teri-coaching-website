'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function MyApproach() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block" id="approach">
      <p className="label">{tr.approachLabel}</p>
      <hr className="hairline" />

      <blockquote className="epigraph">
        {tr.epigraph}
        <span className="epigraph-attr">{tr.epigraphAttr}</span>
      </blockquote>

      <p className="approach-body">{tr.approachP1}</p>
      <p className="approach-body">{tr.approachP2}</p>
      <p className="approach-body">{tr.approachP3}</p>
      <p className="approach-body">{tr.approachP4}</p>

      <p className="sublabel">{tr.workWithLabel}</p>
      <ul className="bullet-list">
        {(tr.workWithItems as unknown as string[]).map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="sublabel">{tr.drawFromLabel}</p>
      <p className="methods">{tr.drawFromItems}</p>

      <p className="sublabel">{tr.trainingLabel}</p>
      <ul className="bullet-list">
        {(tr.trainingItems as unknown as { text: string; url?: string }[]).map((item, i) => (
          <li key={i}>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="bullet-link">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
