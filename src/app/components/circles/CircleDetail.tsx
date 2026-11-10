'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../content/translations';
import { circles, circleAbout, weekday, isPast } from '../../content/circles';
import { formatDate } from '../../content/posts';

export default function CircleDetail({ slug }: { slug: string }) {
  const { lang, prefix } = useLanguage();
  const tr = t(lang);
  const c = circles.find((x) => x.slug === slug);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [stickyHidden, setStickyHidden] = useState(false);
  // Today is only known in the browser (static export), so a past circle closes sign-up after mount.
  const [past, setPast] = useState<boolean | null>(null);
  useEffect(() => {
    if (c) setPast(isPast(c.date, new Date().toISOString().slice(0, 10)));
  }, [c]);

  // Hide the floating CTA once the end CTA card scrolls into view.
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setStickyHidden(entry.isIntersecting),
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [slug]);

  if (!c) {
    return (
      <section className="block subpage">
        <Link href={`${prefix}/kruhy`} className="blog-back">{tr.circlesBack}</Link>
        <p className="blog-empty">{tr.circlesEmpty}</p>
      </section>
    );
  }

  const signupOpen = !!c.signupUrl && !past;
  // Until the date is known (first render), show no note rather than a possibly wrong one.
  const closedNote = past === null ? null : past ? tr.circlesClosedPast : tr.circlesClosedSoon;

  return (
    <section className={`block subpage circle-page ${c.image ? 'has-hero' : ''}`}>
      <article className="circle-detail">
        {c.image ? (
          <div
            className="circle-hero"
            style={{ backgroundImage: `url(${c.image})` }}
            role="img"
            aria-label={c.imageAlt || ''}
          >
            <div className="circle-hero-inner">
              <Link href={`${prefix}/kruhy`} className="blog-back">{tr.circlesBack}</Link>
              <div>
                <p className="circle-kicker">{tr.circlesKicker}</p>
                <h1 className="subpage-title circle-title">{c.title}</h1>
                <p className="faq-intro circle-subtitle">{c.subtitle}</p>
              </div>
            </div>
            {c.imageCredit && (
              <p className="circle-credit">
                {tr.circlesPhoto}{' '}
                {c.imageCreditUrl ? (
                  <a href={c.imageCreditUrl} target="_blank" rel="noopener noreferrer">{c.imageCredit}</a>
                ) : (
                  c.imageCredit
                )}
                {' '}/ Unsplash
              </p>
            )}
          </div>
        ) : (
          <>
            <Link href={`${prefix}/kruhy`} className="blog-back">{tr.circlesBack}</Link>
            <p className="circle-kicker">{tr.circlesKicker}</p>
            <h1 className="subpage-title circle-title">{c.title}</h1>
            <p className="faq-intro circle-subtitle">{c.subtitle}</p>
          </>
        )}

        <dl className="circle-facts">
          <div>
            <dt>{tr.circlesWhen}</dt>
            <dd>{weekday(c.date, lang)} {formatDate(c.date, lang)}, {c.time}</dd>
          </div>
          <div>
            <dt>{tr.circlesWhere}</dt>
            <dd>
              {c.venue}
              {c.mapUrl && (
                <>
                  {' '}
                  <a href={c.mapUrl} target="_blank" rel="noopener noreferrer">({tr.circlesMap})</a>
                </>
              )}
              {c.transport && <span className="circle-transport">{c.transport}</span>}
            </dd>
          </div>
          <div>
            <dt>{tr.circlesPrice}</dt>
            <dd>{c.price}</dd>
          </div>
          <div>
            <dt>{tr.circlesCapacity}</dt>
            <dd>{c.capacity}</dd>
          </div>
        </dl>

        {signupOpen ? (
          <a href={c.signupUrl} target="_blank" rel="noopener noreferrer" className="btn-whisper circle-signup">
            {tr.circlesSignup}
          </a>
        ) : (
          <p className="circle-closed">{closedNote}</p>
        )}

        {lang === 'en' && <p className="circle-lang-note">{tr.circlesLangNote}</p>}

        <ul className="circle-questions">
          {c.questions.map((q) => <li key={q}>{q}</li>)}
        </ul>

        <div className="blog-post-body circle-body">
          {c.body.map((p, i) => <p key={i}>{p}</p>)}

          <h2>{tr.circlesProgram}</h2>
          <p>{c.program.charAt(0).toUpperCase() + c.program.slice(1)}.</p>
          {c.note && <p>{c.note}</p>}

          {c.priceTiers && (
            <>
              <h2>{tr.circlesPriceHeading}</h2>
              {c.priceIntro && <p>{c.priceIntro}</p>}
              <ul className="circle-tiers">
                {c.priceTiers.map((tier) => (
                  <li key={tier.amount}>
                    <strong>{tier.amount}</strong> – {tier.label}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2>{tr.circlesCancellation}</h2>
          <p>{c.cancellation}</p>
        </div>

        <aside className="circle-about">
          <h2 className="circle-about-title">{circleAbout.title}</h2>
          {circleAbout.body.map((p, i) => <p key={i}>{p}</p>)}
          <p className="circle-about-sig">{circleAbout.signature}</p>
        </aside>

        <div className="faq-cta" ref={ctaRef}>
          <p className="faq-cta-title">{c.title}</p>
          <p className="faq-cta-text">
            {formatDate(c.date, lang)} · {c.time} · {c.price}
          </p>
          <div className="faq-cta-actions">
            {signupOpen ? (
              <a href={c.signupUrl} target="_blank" rel="noopener noreferrer" className="btn-whisper">
                {tr.circlesSignup}
              </a>
            ) : (
              <p className="circle-closed">{closedNote}</p>
            )}
          </div>
        </div>
      </article>

      {signupOpen && (
        <a
          href={c.signupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`faq-sticky ${stickyHidden ? 'is-hidden' : ''}`}
          aria-hidden={stickyHidden}
          tabIndex={stickyHidden ? -1 : undefined}
        >
          {tr.circlesSignup} →
        </a>
      )}
    </section>
  );
}
