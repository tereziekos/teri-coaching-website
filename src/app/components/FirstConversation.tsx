'use client';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../content/translations';
import { InlineWidget } from 'react-calendly';

export default function FirstConversation() {
  const { lang } = useLanguage();
  const tr = t(lang);

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
        <div className="calendly-container">
          <InlineWidget
            url="https://calendly.com/kosikova-terezie/intro_coaching_session"
            styles={{ minWidth: '300px', height: '500px' }}
            pageSettings={{
              backgroundColor: 'EEEFEA',
              primaryColor: '2B3A2A',
              textColor: '2B3A2A',
            }}
          />
        </div>
      </div>
    </section>
  );
}
