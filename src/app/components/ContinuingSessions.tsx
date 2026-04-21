'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function ContinuingSessions() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section className="block" id="pricing">
      <p className="label">{tr.contLabel}</p>
      <hr className="hairline" />
      <div className="continuing-wrap">
        {tr.contIntro && <p className="continuing-intro">{tr.contIntro}</p>}

        <div className="price-group">
          <p className="price-group-title">{tr.contIndividual}</p>
          <div className="price-rows">
            <div className="price-row">
              <span>{tr.cont60}</span>
              <span className="price">{tr.cont60Price}</span>
            </div>
            <div className="price-row">
              <span>{tr.cont90}</span>
              <span className="price">{tr.cont90Price}</span>
            </div>
          </div>
        </div>

        <div className="price-group">
          <p className="price-group-title">{tr.contCouple}</p>
          <div className="price-rows">
            <div className="price-row">
              <span>{tr.cont100}</span>
              <span className="price">{tr.cont100Price}</span>
            </div>
          </div>
          <p className="price-note">{tr.contCoupleNote}</p>
        </div>

        <a href="#first-conversation" className="secondary-link">
          {tr.contBook}
        </a>
      </div>
    </section>
  );
}
