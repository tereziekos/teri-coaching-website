'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

const sessions = {
  en: [
    { label: 'INDIVIDUAL', items: [
      { duration: '60 min', price: '130 USD', url: 'https://cal.com/terezie-alder/60min', calSlug: 'terezie-alder/60min' },
      { duration: '90 min', price: '160 USD', url: 'https://cal.com/terezie-alder/90min', calSlug: 'terezie-alder/90min' },
    ]},
    { label: 'COUPLE', items: [
      { duration: '100 min', price: '200 USD', url: 'https://cal.com/terezie-alder/couples100', calSlug: 'terezie-alder/couples100' },
    ]},
  ],
  cs: [
    { label: 'INDIVIDU\u00C1LN\u00CD', items: [
      { duration: '60 min', price: '2\u00A0500 K\u010D', url: 'https://cal.com/terezie-alder/60min', calSlug: 'terezie-alder/60min' },
      { duration: '90 min', price: '3\u00A0000 K\u010D', url: 'https://cal.com/terezie-alder/90min', calSlug: 'terezie-alder/90min' },
    ]},
    { label: 'P\u00C1ROV\u00C9', items: [
      { duration: '100 min', price: '3\u00A0500 K\u010D', url: 'https://cal.com/terezie-alder/couples100', calSlug: 'terezie-alder/couples100' },
    ]},
  ],
};

export default function ContinuingSessions() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const groups = sessions[lang];
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section className="block" id="pricing">
      <p className="label">{tr.contLabel}</p>
      <hr className="hairline" />

      <div className={`pricing-layout ${activeSlug ? 'has-calendar' : ''}`}>
        <div className="continuing-wrap">
          {groups.map((group, gi) => (
            <div className="price-group" key={gi}>
              <p className="price-group-title">{group.label}</p>
              <div className="price-rows">
                {group.items.map((item, ii) => (
                  <div key={ii}>
                    <button
                      className={`price-row-btn ${activeSlug === item.calSlug ? 'active' : ''}`}
                      onClick={() => setActiveSlug(activeSlug === item.calSlug ? null : item.calSlug)}
                    >
                      <span>{item.duration}</span>
                      <span className="price">{item.price}</span>
                      <span className="price-book-cal">{activeSlug === item.calSlug ? 'hide' : 'book \u2192'}</span>
                    </button>
                  </div>
                ))}
              </div>
              {gi === groups.length - 1 && (
                <p className="price-note">{tr.contCoupleNote}</p>
              )}
            </div>
          ))}
        </div>
        {activeSlug && (
          <div className="cal-inline-side" key={activeSlug}>
            <iframe
              src={`https://cal.com/${activeSlug}?embed=true&theme=light&layout=column_view&hideEventTypeDetails=true`}
              frameBorder="0"
              title="Book session"
            />
          </div>
        )}
      </div>

      <p className="location-note location-note--icon">
        <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
        </svg>
        <span>{tr.contLocationNote}</span>
      </p>
      <p className="location-note">
        {tr.contBenefitNote}{' '}
        <a
          href="https://vyhledavac.pluxee.cz/cs/detail-provozovny/koucink-terezie-alder?resultPosition=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bullet-link"
        >
          Pluxee
        </a>
        .
      </p>
      <div className="benefit-logos">
        <img className="logo-benefit" src="/images/logos/benefit-plus.png" alt="Benefit Plus" />
        <a
          href="https://vyhledavac.pluxee.cz/cs/detail-provozovny/koucink-terezie-alder?resultPosition=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pluxee – profil Terezie Alder"
        >
          <img className="logo-pluxee" src="/images/logos/pluxee.png" alt="Pluxee" />
        </a>
      </div>
    </section>
  );
}
