export interface Circle {
  slug: string; // URL slug — /kruhy/<slug>
  title: string;
  subtitle: string;
  date: string; // YYYY-MM-DD
  time: string; // např. '17:00–21:00'
  venue: string;
  mapUrl?: string;
  transport?: string;
  excerpt: string; // krátký text na kartu v přehledu
  questions: string[];
  body: string[]; // odstavce úvodního textu
  program: string;
  note?: string; // např. 'Zkušenost s kruhy není potřeba.'
  price: string;
  capacity: string;
  cancellation: string;
  signupUrl: string;
  image?: string; // cover fotka (cesta v /public), volitelná
  imageAlt?: string;
  imageCredit?: string; // jméno autora fotky
  imageCreditUrl?: string;
}

// Kruhy probíhají česky, proto je obsah jen v jedné verzi.
// Nový kruh = přidat objekt na začátek pole.
export const circles: Circle[] = [
  {
    slug: 'duvera-v-case-kdy-nic-nekvete',
    title: 'Důvěra v čase, kdy nic nekvete',
    subtitle: 'Večer zpřítomnění, sebepéče a sdílení',
    date: '2026-11-05',
    time: '17:00–21:00',
    venue: 'Stará vodárna v Nebušicích, podkroví',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Star%C3%A1+vod%C3%A1rna+Nebu%C5%A1ice',
    transport: 'Nebušice jsou zhruba 10 minut autobusem od metra Bořislavka (linka A).',
    image: '/images/photos/kruh-duvera.jpg',
    imageAlt: 'Podzimní listí na hladině kaluže v dešti',
    imageCredit: 'Polina Kuzovkova',
    imageCreditUrl: 'https://unsplash.com/photos/e-EP25-5yrk',
    excerpt:
      'Podzim a zima jsou časem, kdy se zdánlivě nic neděje. Večer o tom, jak se stavíme k obdobím, kdy nevíme jak dál.',
    questions: [
      'Kde ve svém životě právě čekám, až něco vykvete?',
      'Jak se mi žije v nejistotě?',
      'Co dělám, když nevím?',
    ],
    body: [
      'Podzim a zima jsou časem, kdy se zdánlivě nic neděje. Jak se my samy v životě stavíme k obdobím, kdy nevíme jak dál? Kdy se věci zpomalí a my nevidíme žádný pokrok. Možná je v nás nejistota, možná strach, možná tlak, že by to mělo být jinak.',
      'Tento večer je prostorem, kde se těchto témat můžeme dotknout společně. Nic nemusíme řešit ani měnit. Stačí být, sdílet a nebýt v tom samy. Přineseme, co právě prožíváme, a možná najdeme moudrost ve vlastním příběhu i v příbězích druhých.',
      'Sdílení je dobrovolné. Sdílíte jen to, co sdílet chcete, a je v pořádku sdílet i mlčením.',
    ],
    program: 'vedená meditace, sdílení v kruhu, hudba a relaxace',
    note: 'Zkušenost s kruhy není potřeba.',
    price: '700 Kč',
    capacity: '14 míst',
    cancellation:
      'Platba je nevratná, ale můžete za sebe poslat jinou ženu. Pokud vaše místo obsadí náhradnice, částku vám vrátím. Pokud kruh zruším já, vracím celou částku.',
    signupUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSd4gUVavwxZVsfcIBye1XAYB5dMrV-KwgCitoVNdcJi0kQ32A/viewform',
  },
];

// Osobní text „co je pro mě kruh" — zobrazuje se dole na detailu každého kruhu.
export const circleAbout = {
  title: 'Co je pro mě kruh',
  body: [
    'V kruhu jeden mluví a ostatní naslouchají. Nikdo nedává rady, nic neřeší a nesnaží se nikoho zachránit. Sdílená zkušenost je vyslechnuta, viděna a uctěna, a už to samo může hodně změnit.',
    'Kruh není terapie ani skupinová terapie. Jsme si v něm rovné a věříme, že každá svůj příběh unese a že sdílení jí pomáhá ho nést.',
    'Co se řekne v kruhu, zůstává v kruhu.',
    'Setkávají se v něm ženy různého věku, zkušeností a životů. Z příběhů druhých si můžeme vzít moudrost i odvahu pro ten svůj.',
  ],
  signature: 'Terezie',
};

const CS_DAYS = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
const EN_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function weekday(iso: string, lang: 'en' | 'cs'): string {
  const [y, m, d] = iso.split('-').map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return lang === 'cs' ? CS_DAYS[day] : EN_DAYS[day];
}

export function isPast(iso: string, today: string): boolean {
  return iso < today;
}
