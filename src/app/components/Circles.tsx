'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { circles, weekday, isPast } from '../content/circles';
import { formatDate } from '../content/posts';

export default function Circles() {
  const { lang } = useLanguage();
  const tr = t(lang);
  // Today is only known in the browser (static export), so past circles get marked after mount.
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const sorted = [...circles].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = today ? sorted.filter((c) => !isPast(c.date, today)) : sorted;
  const past = today ? sorted.filter((c) => isPast(c.date, today)).reverse() : [];

  return (
    <section className="block subpage" id="kruhy">
      <h1 className="subpage-title">{tr.circlesTitle}</h1>
      <p className="faq-intro">{tr.circlesIntro}</p>
      <hr className="hairline" />

      {upcoming.length > 0 ? (
        <div className="circle-list">
          {upcoming.map((c) => <CircleCard key={c.slug} slug={c.slug} />)}
        </div>
      ) : (
        <p className="blog-empty">{tr.circlesEmpty}</p>
      )}

      {past.length > 0 && (
        <>
          <h2 className="circle-past-label">{tr.circlesPast}</h2>
          <div className="circle-list is-past">
            {past.map((c) => <CircleCard key={c.slug} slug={c.slug} />)}
          </div>
        </>
      )}
    </section>
  );
}

function CircleCard({ slug }: { slug: string }) {
  const { lang, prefix } = useLanguage();
  const tr = t(lang);
  const c = circles.find((x) => x.slug === slug)!;
  const [, m, d] = c.date.split('-').map(Number);

  return (
    <Link href={`${prefix}/kruhy/${c.slug}`} className="circle-card">
      <div
        className={`circle-card-date ${c.image ? 'has-image' : ''}`}
        style={c.image ? { backgroundImage: `url(${c.image})` } : undefined}
        aria-hidden="true"
      >
        <span className="circle-card-day">{d}. {m}.</span>
        <span className="circle-card-weekday">{weekday(c.date, lang)}</span>
      </div>
      <div className="circle-card-body">
        <p className="circle-card-meta">
          {formatDate(c.date, lang)} · {c.time} · {c.venue}
        </p>
        <h2 className="circle-card-title">{c.title}</h2>
        <p className="circle-card-subtitle">{c.subtitle}</p>
        <p className="circle-card-excerpt">{c.excerpt}</p>
        <div className="circle-card-foot">
          <span>{c.price} · {c.capacity}</span>
          <span className="circle-card-more">{tr.circlesMore} →</span>
        </div>
      </div>
    </Link>
  );
}
