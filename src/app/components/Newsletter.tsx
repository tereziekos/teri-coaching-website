'use client';
import { FormEvent, useId, useState, useSyncExternalStore } from 'react';
import { usePlausible } from 'next-plausible';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { NEWSLETTER_READY, subscribeToNewsletter } from '../content/newsletter';

type Variant = 'section' | 'card' | 'footer';
type Status = 'idle' | 'sending' | 'done' | 'error';

const noopSubscribe = () => () => {};
const previewRequested = () =>
  process.env.NODE_ENV === 'development' || new URLSearchParams(window.location.search).has('newsletter');

/** True once the newsletter is configured, or when previewing it (see NEWSLETTER_READY). */
export function useNewsletterVisible() {
  const preview = useSyncExternalStore(noopSubscribe, previewRequested, () => false);
  return NEWSLETTER_READY || preview;
}

/**
 * Newsletter sign-up. One component, one look (dark moss band), three layouts:
 *  - section: its own block on the home page, text beside the form
 *  - card:    blog posts, circle list and circle pages, stacked
 *  - footer:  centred band in the footer of the remaining pages
 * `place` is sent to Plausible so we can see which placement works.
 */
export default function Newsletter({ variant = 'card', place }: { variant?: Variant; place: string }) {
  const { lang } = useLanguage();
  const tr = t(lang);
  const plausible = usePlausible();
  const id = useId();
  const [email, setEmail] = useState('');
  const [trap, setTrap] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const visible = useNewsletterVisible();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    // Honeypot: real people never see this field, bots fill everything in.
    if (trap) {
      setStatus('done');
      return;
    }
    setStatus('sending');
    const result = await subscribeToNewsletter(email, lang);
    if (result === 'ok') {
      setStatus('done');
      plausible('Newsletter signup', { props: { place, lang } });
    } else {
      setStatus('error');
    }
  };

  if (!visible) return null;

  const Wrapper = variant === 'section' ? 'section' : 'div';

  return (
    <Wrapper
      className={`newsletter newsletter--${variant}${variant === 'section' ? ' block' : ''}`}
      id={variant === 'section' ? 'newsletter' : undefined}
    >
      <div className="newsletter-inner">
        <span className="newsletter-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m3.5 7 8.5 6 8.5-6" />
          </svg>
        </span>
        <div className="newsletter-copy">
          <p className="newsletter-kicker">{tr.newsletterLabel}</p>
          <p className="newsletter-title">{tr.newsletterTitle}</p>
          <p className="newsletter-text">{tr.newsletterText}</p>
        </div>

        {status === 'done' ? (
          <p className="newsletter-done" role="status">{tr.newsletterDone}</p>
        ) : (
          <form className="newsletter-form" onSubmit={submit}>
            <div className="newsletter-row">
              <label htmlFor={`${id}-email`} className="sr-only">{tr.newsletterEmailLabel}</label>
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={tr.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" disabled={status === 'sending'}>
                {status === 'sending' ? tr.newsletterSending : tr.newsletterButton}
              </button>
            </div>
            <div className="newsletter-trap" aria-hidden="true">
              <label>
                website
                <input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
              </label>
            </div>
            {status === 'error' && (
              <p className="newsletter-note newsletter-error" role="alert">{tr.newsletterError}</p>
            )}
          </form>
        )}
      </div>
    </Wrapper>
  );
}
