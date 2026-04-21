'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function MyApproach() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block">
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

      <p className="work-head">{tr.work1Head}</p>
      <p className="work-para">{tr.work1Para}</p>

      <p className="work-head">{tr.work2Head}</p>
      <p className="work-para">{tr.work2Para}</p>

      <p className="work-head">{tr.work3Head}</p>
      <p className="work-para">{tr.work3Para}</p>

      <p className="work-head">{tr.work4Head}</p>
      <p className="work-para">{tr.work4Para}</p>

      <p className="work-head">{tr.work5Head}</p>
      <p className="work-para">{tr.work5Para}</p>

      <p className="sublabel">{tr.restLabel}</p>
      <ul className="rest-list">
        {tr.restItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="sublabel">{tr.drawFromLabel}</p>
      <p className="methods">
        {tr.methodsMain}
        <span className="methods-main">{tr.methodsMainBold}</span>
        {tr.methodsMainEnd}
      </p>
      <p className="methods">{tr.methodsAlso}</p>

      <p className="sublabel">{tr.practicesLabel}</p>
      <p className="methods">{tr.practices}</p>

      <p className="sublabel">{tr.trainingLabel}</p>
      <p className="methods">{tr.training}</p>
    </section>
  );
}
