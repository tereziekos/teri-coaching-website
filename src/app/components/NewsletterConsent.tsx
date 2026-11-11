'use client';
import { useId } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

/**
 * "Send me the newsletter too" checkbox for other forms on the site
 * (e.g. a future circle sign-up form). Unticked by default — GDPR requires an
 * active choice. When the form is submitted and `checked` is true, call
 * `subscribeToNewsletter(email, lang)` from content/newsletter.ts.
 *
 *   const [news, setNews] = useState(false);
 *   <NewsletterConsent checked={news} onChange={setNews} />
 *   ...on submit: if (news) await subscribeToNewsletter(email, lang);
 */
export default function NewsletterConsent({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const { lang } = useLanguage();
  const tr = t(lang);
  const id = useId();

  return (
    <label htmlFor={id} className="newsletter-consent">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{tr.newsletterOptIn}</span>
    </label>
  );
}
