// Newsletter — self-hosted Listmonk (see NEWSLETTER.md).
//
// The browser never talks to Listmonk directly: nginx proxies this same-origin
// path to Listmonk's public subscription API (see nginx.conf). That keeps CORS
// out of the picture and lets nginx rate-limit sign-ups.
//
// List UUIDs are public identifiers (Listmonk shows them under Lists → list →
// "UUID"); they are not secrets. One list per language, so Czech readers get
// Czech letters and English readers English ones.

export type NewsletterLang = 'cs' | 'en';

export const NEWSLETTER_ENDPOINT = '/_n/subscribe';

export const NEWSLETTER_LISTS: Record<NewsletterLang, string> = {
  cs: 'REPLACE-WITH-CZECH-LIST-UUID',
  en: 'REPLACE-WITH-ENGLISH-LIST-UUID',
};

// Until the real list UUIDs are filled in, the form is hidden on the live site
// (sign-ups would only fail). It still shows in `pnpm dev` and on any page
// opened with `?newsletter` in the URL, for previewing.
export const NEWSLETTER_READY = !Object.values(NEWSLETTER_LISTS).some((uuid) => uuid.startsWith('REPLACE'));

export type SubscribeResult = 'ok' | 'error';

/**
 * Subscribe an e-mail address to the newsletter in the given language.
 *
 * Reusable from any form on the site — e.g. a future sign-up form with a
 * "send me the newsletter too" checkbox (see NewsletterConsent).
 * The lists use double opt-in, so Listmonk sends a confirmation e-mail and the
 * address is only subscribed once the person clicks it.
 */
export async function subscribeToNewsletter(
  email: string,
  lang: NewsletterLang,
  name = '',
): Promise<SubscribeResult> {
  try {
    const res = await fetch(NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.trim(),
        name: name.trim(),
        list_uuids: [NEWSLETTER_LISTS[lang]],
      }),
    });
    return res.ok ? 'ok' : 'error';
  } catch {
    return 'error';
  }
}
