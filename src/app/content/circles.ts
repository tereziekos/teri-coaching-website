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
  price: string; // krátce, např. '400 Kč' nebo '300–500 Kč'
  priceIntro?: string; // u odstupňované ceny: úvodní věta nad seznamem
  priceTiers?: { amount: string; label: string }[];
  capacity: string;
  cancellation: string;
  signupUrl?: string; // bez odkazu se místo tlačítka ukáže „přihlašování brzy otevřu"
  image?: string; // cover fotka (cesta v /public), volitelná
  imageAlt?: string;
  imageCredit?: string; // jméno autora fotky
  imageCreditUrl?: string;
  theme?: 'dark'; // tmavá stránka s bílým písmem
}

// Kruhy probíhají česky, proto je obsah jen v jedné verzi.
// Nový kruh = přidat objekt na začátek pole.
export const circles: Circle[] = [
  {
    slug: 'co-nechavam-v-tomto-roce',
    title: 'Co odevzdávám tmě',
    subtitle: 'Rituál ohně a rozloučení s rokem',
    date: '2026-12-18',
    time: '17:00–21:00',
    venue: 'Nebušice, Praha 6',
    transport:
      'Zhruba 10 minut autobusem od metra Bořislavka (linka A). Přesnou adresu pošlu v informačním e-mailu po přihlášení.',
    excerpt:
      'Zimní slunovrat je čas ohlédnout se za rokem, který končí, a vědomě něco odložit. Večer zakončíme rituálem slunovratu venku na zahradě.',
    questions: [
      'Co nechávám v tomto roce?',
      'Co už nechci nést dál?',
      'Pro co chci udělat místo?',
    ],
    body: [
      'Zimní slunovrat je nejdelší noc v roce. Pak se dny zase začnou prodlužovat. Je to čas zastavit se, ohlédnout se za rokem, který končí, a vědomě něco odložit.',
      'Tento večer se můžeme ohlédnout společně. Bez hodnocení, co se povedlo a co ne. Jen pojmenovat, co v tomto roce necháváme, a udělat místo tomu, co přichází.',
      'Večer zakončíme venku na zahradě rituálem slunovratu. Na papírky napíšeme, co chceme nechat jít, a společně je spálíme.',
      'Sdílení je dobrovolné. Sdílíte jen to, co sdílet chcete, a je v pořádku sdílet i mlčením.',
    ],
    program: 'vedená meditace, sdílení v kruhu, rituál slunovratu, hudba',
    note: 'Zkušenost s kruhy není potřeba. Část večera bude venku, vezměte si teplé oblečení.',
    price: '300–500 Kč',
    priceIntro: 'Cena je odstupňovaná, vyberte si podle svých možností:',
    priceTiers: [
      { amount: '300 Kč', label: 'když je pro vás teď plná cena náročná' },
      { amount: '400 Kč', label: 'běžná cena' },
      { amount: '500 Kč', label: 'když můžete podpořit i další ženy' },
    ],
    capacity: '10 žen',
    signupUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSd4gUVavwxZVsfcIBye1XAYB5dMrV-KwgCitoVNdcJi0kQ32A/viewform',
    cancellation:
      'Pokud se nemůžete zúčastnit z vážného důvodu, například kvůli nemoci, vrátím vám celou částku. V ostatních případech můžete za sebe poslat jinou ženu, nebo vám částku vrátím, pokud vaše místo obsadí náhradnice. Pokud kruh zruším já, vracím celou částku.',
    image: '/images/photos/kruh-slunovrat.jpg',
    imageAlt: 'Zasněžené kopce a zimní slunce v mlze',
    imageCredit: 'Cecilia Tran',
    imageCreditUrl: 'https://unsplash.com/photos/lfNe3PUE3cQ',
    theme: 'dark',
  },
  {
    slug: 'duvera-v-case-kdy-nic-nekvete',
    title: 'Důvěra v čase, kdy nic nekvete',
    subtitle: 'Večer zpřítomnění, sebepéče a sdílení',
    date: '2026-11-05',
    time: '17:00–21:00',
    venue: 'Nebušice, Praha 6',
    transport:
      'Zhruba 10 minut autobusem od metra Bořislavka (linka A). Přesnou adresu pošlu v informačním e-mailu po přihlášení.',
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
    price: '400 Kč',
    capacity: '14 míst',
    cancellation:
      'Platba je nevratná, ale můžete za sebe poslat jinou ženu. Pokud vaše místo obsadí náhradnice, částku vám vrátím. Pokud kruh zruším já, vracím celou částku.',
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
