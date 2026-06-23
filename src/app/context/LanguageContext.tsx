'use client';
import { createContext, useContext, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { posts } from '../content/posts';

type Lang = 'en' | 'cs';

interface LanguageContextType {
  lang: Lang;
  prefix: string; // '' for cs, '/en' for en
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'cs',
  prefix: '',
  toggle: () => {},
});

function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'cs';
}

// Map the current path to its equivalent in the other language.
function twinPath(pathname: string, lang: Lang): string {
  const target: Lang = lang === 'cs' ? 'en' : 'cs';

  // Blog post detail — map the slug via the shared post id.
  const m = pathname.match(/^(?:\/en)?\/blog\/(.+)$/);
  if (m) {
    const current = posts[lang].find((p) => p.slug === m[1]);
    const twin = current && posts[target].find((p) => p.id === current.id);
    const slug = twin ? twin.slug : m[1];
    return target === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
  }

  // Everything else — just add or strip the /en prefix.
  const bare = pathname.replace(/^\/en/, '') || '/';
  if (target === 'cs') return bare;
  return bare === '/' ? '/en' : `/en${bare}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const lang = langFromPath(pathname);
  const prefix = lang === 'en' ? '/en' : '';

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => router.push(twinPath(pathname, lang));

  return (
    <LanguageContext.Provider value={{ lang, prefix, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
