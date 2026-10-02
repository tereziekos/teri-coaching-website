'use client';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

type SingleItem = { duration: string; price: string; url: string; calSlug: string };
type WeeklyItem = { duration: string; perSession: string; monthly: string };

const pricing: Record<'en' | 'cs', {
  individual: SingleItem[];
  couple: SingleItem[];
  weeklyIndividual: WeeklyItem[];
  weeklyCouple: WeeklyItem;
}> = {
  en: {
    individual: [
      { duration: '60 min', price: '130 USD', url: 'https://cal.com/terezie-alder/60min', calSlug: 'terezie-alder/60min' },
      { duration: '90 min', price: '170 USD', url: 'https://cal.com/terezie-alder/90min', calSlug: 'terezie-alder/90min' },
    ],
    couple: [
      { duration: '100 min', price: '200 USD', url: 'https://cal.com/terezie-alder/couples100', calSlug: 'terezie-alder/couples100' },
    ],
    weeklyIndividual: [
      { duration: '60 min', perSession: '110 USD', monthly: '440 USD' },
      { duration: '90 min', perSession: '150 USD', monthly: '600 USD' },
    ],
    weeklyCouple: { duration: '100 min', perSession: '190 USD', monthly: '760 USD' },
  },
  cs: {
    individual: [
      { duration: '60 min', price: '2 500 Kč', url: 'https://cal.com/terezie-alder/60min', calSlug: 'terezie-alder/60min' },
      { duration: '90 min', price: '3 000 Kč', url: 'https://cal.com/terezie-alder/90min', calSlug: 'terezie-alder/90min' },
    ],
    couple: [
      { duration: '100 min', price: '3 500 Kč', url: 'https://cal.com/terezie-alder/couples100', calSlug: 'terezie-alder/couples100' },
    ],
    weeklyIndividual: [
      { duration: '60 min', perSession: '2 000 Kč', monthly: '8 000 Kč' },
      { duration: '90 min', perSession: '2 400 Kč', monthly: '9 600 Kč' },
    ],
    weeklyCouple: { duration: '100 min', perSession: '3 000 Kč', monthly: '12 000 Kč' },
  },
};

export default function ContinuingSessions() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const p = pricing[lang];
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const bookRow = (item: SingleItem) => (
    <button
      key={item.calSlug}
      className={`price-row-btn ${activeSlug === item.calSlug ? 'active' : ''}`}
      onClick={() => setActiveSlug(activeSlug === item.calSlug ? null : item.calSlug)}
    >
      <span>{item.duration}</span>
      <span className="price">{item.price}</span>
      <span className="price-book-cal">{activeSlug === item.calSlug ? 'hide' : 'book →'}</span>
    </button>
  );

  const weeklyRow = (item: WeeklyItem) => (
    <div className="weekly-row" key={item.duration}>
      <span className="weekly-row-dur">{item.duration}</span>
      <span className="weekly-row-prices">
        <span className="wk-per">{item.perSession} <em>{tr.contPerSession}</em></span>
        <span className="wk-month">{item.monthly} <em>{tr.contPerMonth}</em></span>
      </span>
    </div>
  );

  return (
    <section className="block" id="pricing">
      <p className="label">{tr.contLabel}</p>
      <hr className="hairline" />

      <div className={`pricing-layout ${activeSlug ? 'has-calendar' : ''}`}>
        <div className="continuing-wrap">
          <div className="price-group">
            <p className="price-group-title">{tr.contIndividual}</p>
            <div className="price-rows">
              {p.individual.map(bookRow)}
            </div>
          </div>
          <div className="price-group">
            <p className="price-group-title">{tr.contCouple}</p>
            <div className="price-rows">
              {p.couple.map(bookRow)}
            </div>
            <p className="price-note">{tr.contCoupleNote}</p>
          </div>
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

      <div className="weekly-block">
        <p className="price-group-title">{tr.contWeeklyTitle}</p>
        <p className="weekly-intro">{tr.contWeeklyIntro}</p>

        <div className="weekly-tier">
          <p className="weekly-tier-title">{tr.contIndividual}</p>
          <div className="weekly-rows">
            {p.weeklyIndividual.map(weeklyRow)}
          </div>
        </div>
        <div className="weekly-tier">
          <p className="weekly-tier-title">{tr.contCouple}</p>
          <div className="weekly-rows">
            {weeklyRow(p.weeklyCouple)}
          </div>
        </div>

        <div className="weekly-how">
          <p className="weekly-how-title">{tr.contWeeklyHowTitle}</p>
          <ul>
            {tr.contWeeklyHow.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
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
