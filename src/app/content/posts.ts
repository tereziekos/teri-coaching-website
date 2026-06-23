export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
}

// Až budou články, přidej je sem (zvlášť EN a CS). Prázdné pole = blog
// ukáže "připravujeme" stav. Detail článku (/blog/[slug]) doplníme později.
export const posts: Record<'en' | 'cs', Post[]> = {
  en: [],
  cs: [],
};
