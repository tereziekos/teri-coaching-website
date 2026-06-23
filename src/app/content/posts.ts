export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'cta'; text: string }
  | { type: 'video'; id: string };

export interface Post {
  id: string; // sdílené ID napříč jazyky (páruje CZ a EN verzi)
  slug: string; // URL slug — podle jazyka (CZ vs EN)
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  body: Block[];
  image?: string; // cover fotka (cesta v /public), volitelná
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Každý článek má stejné `id` v obou jazycích, ale vlastní `slug`.
export const posts: Record<'en' | 'cs', Post[]> = {
  en: [
    {
      id: 'mytus-osviceni',
      slug: 'myth-of-enlightenment',
      title: 'the myth of enlightenment: why meditation can’t give you what you want',
      date: '2026-06-20',
      image: '/images/photos/photo-golden.jpg',
      imageAlt: 'Terezie Alder meditating',
      excerpt:
        'Six years of meditation and I’m not enlightened. On the myth of enlightenment, why it can hurt your practice, and why meditation makes you feel more, not less.',
      seoTitle: 'The Myth of Enlightenment: Why Meditation Won’t Fix You',
      seoDescription:
        'Six years of meditation and I’m not enlightened. On the myth of enlightenment, why it can hurt your practice, and why meditation makes you feel more, not less.',
      body: [
        { type: 'p', text: 'Six years of meditation, over a thousand hours of practice, more than ten multi-day retreats. And I’m not enlightened. Yet I’m more grateful for the journey than I can say. The biggest release came the moment I let the idea of enlightenment go.' },
        { type: 'p', text: 'When I started, I was chasing a quiet goal I wasn’t even aware of. Sit down, breathe, examine my emotions. And underneath it all ran a program: one day this will all transform and my anxiety and sadness will leave for good. It took me years to see that this goal was what hurt my practice most.' },
        { type: 'h2', text: 'what the myth of enlightenment is' },
        { type: 'p', text: 'Meditation teacher and therapist Tucker Peck calls it the myth of enlightenment in his book Sanity and Sainthood. Most of his students believe in one map: I’ll meditate, gradually feel calmer and better, until only the pleasant emotions remain and that state lasts forever.' },
        { type: 'p', text: 'It sounds appealing. And this is the very picture that can hurt your practice more than help it.' },
        { type: 'h2', text: 'why it can hurt you' },
        { type: 'p', text: 'The myth breeds a vicious circle. I meditate, I don’t feel enlightened, so I’m failing, so I feel more stress. Buddhism talks about the principle of two arrows. The first arrow is the pain or anger itself, and it comes to everyone. The second arrow is the one you add yourself: self-blame, reproach, “I should be further along by now.” And it’s the second arrow that makes the suffering bigger.' },
        { type: 'p', text: 'Meditation often does the opposite of what you expect. It teaches you to notice more of what’s happening inside you. So yes, you’ll feel more. More of the pleasant and more of the unpleasant. That isn’t a flaw in the practice. It’s the whole point.' },
        { type: 'h2', text: 'so what should you expect from meditation?' },
        { type: 'p', text: 'If not enlightenment, then what? And how do you actually tell that you’re moving forward? That’s the rest of the story, and I tell it in full in the video. Including the moment in the sauna when most of my suffering left during a single sentence.' },
        { type: 'video', id: 'z6Y5XC9DkKE' },
        { type: 'cta', text: 'I walk alongside people who want to go further with their inner experience than thinking can take them. If this resonates with you, let’s meet for a free intro session and see whether we’re a good fit.' },
      ],
    },
  ],
  cs: [
    {
      id: 'mytus-osviceni',
      slug: 'mytus-osviceni',
      title: 'mýtus osvícení: proč vám meditace nedá to, co od ní čekáte',
      date: '2026-06-20',
      image: '/images/photos/photo-golden.jpg',
      imageAlt: 'Terezie Alder při meditaci',
      excerpt:
        'Šest let meditace a nejsem osvícená. O mýtu osvícení, proč vám v praxi může spíš uškodit než pomoct a proč s meditací cítíte víc, ne míň.',
      seoTitle: 'Mýtus osvícení: proč vám meditace nedá, co čekáte',
      seoDescription:
        'Šest let meditace a nejsem osvícená. O mýtu osvícení, proč vám v praxi může spíš uškodit než pomoct a proč s meditací cítíte víc, ne míň.',
      body: [
        { type: 'p', text: 'Šest let meditace, přes tisíc hodin praxe, přes deset vícedenních retreatů. A nejsem osvícená. Přesto jsem za tu cestu vděčná víc, než umím říct. Nejvíc se ve mně uvolnilo ve chvíli, kdy jsem představu osvícení nechala jít.' },
        { type: 'p', text: 'Když jsem začínala, hnala jsem se za tichým cílem, který jsem si ani neuvědomovala. Sednout si, dýchat, zkoumat emoce. A pod tím vším běžel program: jednou se to celé promění a moje úzkost a smutek odejdou nadobro. Roky mi trvalo pochopit, že právě tenhle cíl mi v praxi škodil nejvíc.' },
        { type: 'h2', text: 'co je mýtus osvícení' },
        { type: 'p', text: 'Meditační učitel a terapeut Tucker Peck tomu ve své knize Sanity and Sainthood říká mýtus osvícení. Většina jeho studentů věří v jednu mapu: budu meditovat, postupně se budu cítit klidněji a líp, až nakonec zůstanou jen příjemné emoce a ten stav už vydrží napořád.' },
        { type: 'p', text: 'Zní to lákavě. A právě tahle představa vám v praxi může spíš uškodit než pomoct.' },
        { type: 'h2', text: 'proč vám to může škodit' },
        { type: 'p', text: 'Z mýtu se rodí bludný kruh. Medituju, necítím se osvíceně, takže selhávám, takže mám větší stres. Buddhismus mluví o principu dvou šípů. První šíp je samotná bolest nebo vztek, ten do života přijde sám. Druhý šíp si přidáváte vy: sebeobviňování, výčitky, „měla bych už být dál“. A právě druhý šíp dělá utrpení větším.' },
        { type: 'p', text: 'Meditace přitom dělá opak toho, co od ní čekáte. Učí vás víc vnímat, co se ve vás děje. Takže ano, budete cítit víc. Víc příjemného i víc nepříjemného. To není chyba praxe. Přesně o tohle v ní jde.' },
        { type: 'h2', text: 'a co tedy od meditace čekat?' },
        { type: 'p', text: 'Když ne osvícení, tak co? A podle čeho vlastně poznat, že se posouváte? To je zbytek příběhu a vyprávím ho v celém videu. Včetně chvíle v sauně, kdy mi velká část utrpení odešla během jediné věty.' },
        { type: 'video', id: 'z6Y5XC9DkKE' },
        { type: 'cta', text: 'Provázím lidi, kteří chtějí jít se svou vnitřní zkušeností dál, než kam dosáhne přemýšlení. Jestli vám to rezonuje, pojďme se potkat na úvodním sezení zdarma a zjistit, jestli si sedneme.' },
      ],
    },
  ],
};

export function formatDate(iso: string, lang: 'en' | 'cs'): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (lang === 'cs') return `${d}. ${m}. ${y}`;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
}
