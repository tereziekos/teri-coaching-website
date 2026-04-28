'use client';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';

export default function FirstConversation() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const calLoaded = useRef(false);

  useEffect(() => {
    if (calLoaded.current) return;
    calLoaded.current = true;

    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {
        elementOrSelector:"#cal-inline-embed",
        calLink: "terezie-alder/intro60",
        layout: "month_view",
        config: {
          hideEventTypeDetails: "true",
          theme: "light"
        }
      });
      Cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
        styles: { branding: { brandColor: "#2B3A2A" } }
      });
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="block" id="first-conversation">
      <p className="label">{tr.firstConvLabel}</p>
      <hr className="hairline" />
      <div className="first-conv-wrap">
        <div className="first-conv-copy">
          <p className="intro">{tr.firstConvIntro}</p>
          <p className="meta">{tr.firstConvMeta}</p>
          <p className="fallback">
            {tr.firstConvFallback}{' '}
            <a href="mailto:kosikova.terezie@gmail.com">kosikova.terezie@gmail.com</a>
          </p>
        </div>
        <div className="cal-embed-container" id="cal-inline-embed" />
      </div>
    </section>
  );
}
