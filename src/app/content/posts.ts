export interface Post {
  id: string; // sdílené ID napříč jazyky (páruje CZ a EN verzi)
  slug: string; // URL slug — podle jazyka (CZ vs EN)
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  body: string; // HTML tělo článku
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
      title: 'Why Meditation Won’t Make You Permanently Calm (And What It Does Instead)',
      date: '2026-06-20',
      image: '/images/photos/photo-golden.jpg',
      imageAlt: 'Terezie Alder meditating',
      excerpt:
        'Six years of meditation, over a thousand hours, and I’m not enlightened. On the myth of enlightenment, why it hurts your practice, and a better measure of progress.',
      seoTitle: 'Why Meditation Won’t Make You Permanently Calm',
      seoDescription:
        'Six years of meditation, over a thousand hours, and I’m not enlightened. On the myth of enlightenment, why it hurts your practice, and a better measure of progress.',
      body: `
<p>Meditation will not remove your difficult emotions, and it will not deliver permanent calm within a year or two. What it gives you is something else: the capacity to feel what arrives without fighting it. Six years of practice, over a thousand hours and more than ten multi-day retreats mostly taught me to let go of the idea of enlightenment. That’s where something finally loosened.</p>

<h2>What I expected from meditation</h2>
<p>When I started, I was chasing enlightenment without admitting it to myself.</p>
<p>On the surface it looked right. Sit down, examine your inner experience, accept emotions and thoughts as they come. But underneath ran a goal I wasn’t aware of at the time: if I open up and let all of this move through me fully enough, it will transform. I will change. Sadness and anxiety will leave and I’ll never feel them again.</p>
<p>I wanted to accept my emotions in order to get rid of them. That hidden goal was the problem the whole time.</p>

<h2>What the myth of enlightenment is</h2>
<p>Meditation teacher and psychotherapist Tucker Peck calls this the myth of enlightenment in his book <a href="https://www.amazon.com/Sanity-Sainthood-Integrating-Meditation-Psychotherapy/dp/B0DXJ12JV7" target="_blank" rel="noopener noreferrer">Sanity and Sainthood: Integrating Meditation and Psychotherapy</a>. He describes it as the map most of his students believe in when they first meet, and one they often keep believing unconsciously even after they know intellectually that it isn’t true.</p>
<p>The myth goes like this: you meditate, you feel progressively calmer and better, and eventually you eliminate the unpleasant feelings and keep only peace and joy. And that state lasts.</p>
<p>Peck doesn’t argue that full awakening is impossible. He describes one woman in whom he believes it genuinely happened, roughly forty years into her practice, about eighteen months before she died. The myth isn’t that it can happen. The myth is that it’s quick, and that a person with a job and relationships can plan for it on a scale of years.</p>

<h2>Why the myth causes harm</h2>
<h3>The timescale doesn’t match</h3>
<p>Picture a monk in a monastery. His whole life is built around practice. He often enters young, doesn’t hold a job, isn’t on social media. He sits formally for four to six hours a day and tries to hold attention through ordinary activity for the rest of it. He goes on intensive retreats, often in silence. His entire environment is arranged to minimise distraction.</p>
<p>Now take our lives. Work, news, messages, relationships, money, career, family. This isn’t an argument for giving up. It’s an argument against expecting enormous progress quickly.</p>
<h3>It creates a loop</h3>
<p>I meditate, I don’t feel enlightened, so I’m failing, so I feel more stress. And next time I sit down with that tension already running.</p>
<p>Buddhism calls this the principle of two arrows. The first arrow is the unpleasant experience itself: pain, grief, anger. It arrives on its own. The second arrow is what we add to it. Self-blame, resistance, reproach. <em>There’s something wrong with me for feeling this. I should be further along by now.</em> The second arrow does far more damage than the first.</p>
<p>What’s happening is normal. Meditation lets you become more aware of what you feel. That’s the entire point. Which is exactly why you’ll feel more of everything, pleasant and unpleasant. That’s not a malfunction, it’s the mechanism working. And early on the difficult emotions often dominate, because there’s a backlog. That isn’t a personal failure.</p>
<h3>Striving is itself a form of tension</h3>
<p>This is the hardest part to point at. The very effort of holding a goal during meditation and pushing toward it is a form of tension. It’s a refusal of what’s actually here. It creates background resistance that stops you from settling into the present moment. Part of you stays busy trying to change it.</p>
<p>I’m not talking about the conceptual level. Wanting to change things in your life, wanting to train, wanting to grow, all fine. I’m talking about the emotional tone during the practice itself.</p>
<p>An example. I recently tried thirty minutes in a sauna at ninety degrees Celsius. Near the end your body screams that you’ll die if you don’t leave right now. Part of me was fighting the heat and fighting the fact of being there at all.</p>
<p>But I wanted to stay, and I knew I was physically safe. So I tried to accept the reality completely. I released my body and started repeating: I could die here right now, that’s alright, I don’t have to fight this. And emotionally I allowed the possibility that even if this lasted forever, it would be alright.</p>
<p>Something released in that moment. Seventy percent of the suffering left, and what remained was the physical sensation, which I could simply be with. If some corner of my mind had kept saying <em>I hope this ends soon</em>, I would never have relaxed at all.</p>

<h2>So what is enlightenment</h2>
<p>It isn’t a state where change stops. It isn’t still water with nothing moving on the surface.</p>
<p>Peck defines it as the state where the objects and states of consciousness keep fluctuating as they always have, and you stop doing stupid things to try to make the fluctuation stop.</p>
<p>The Buddha’s own definition points more at direct experience: you recognise feelings, perceptions and thoughts exactly as they arise, as they remain, and as they pass. Nothing more. You watch the stream.</p>
<p>You can picture the quality people describe in the Dalai Lama. Within minutes he can move from laughter to being moved to tears and back to steadiness. Not because the emotions are shallow or performed, but because he lets each one pass through completely. An emotion you don’t grip and don’t try to stop doesn’t get stuck.</p>
<p>Shinzen Young puts it in terms of two skills: learning to have a complete experience of discomfort is what frees us, and learning to have a complete experience of pleasure is what fulfils us. Meditation won’t teach you to feel only the good things. It teaches you to feel both, fully and without getting stuck. That’s the freedom, not the absence of pain.</p>

<h2>A more useful measure than enlightenment</h2>
<p>If you make enlightenment your benchmark, you’ve chosen a goal distant enough to demoralise you.</p>
<p>Don’t measure your practice by how you feel while sitting. Or by whether you’re thinking and feeling exactly what you’d prefer. You don’t control your emotions and thoughts and you never fully will. That’s not success or failure, it’s how a human mind works.</p>
<p>The real measure is what the practice does in your life. What it bears.</p>
<ul>
<li>Do you treat the people around you better?</li>
<li>Do you treat yourself better?</li>
<li>Do you fight less with what you feel?</li>
<li>Do you move through emotions faster?</li>
<li>By your own values, are you a slightly better person than a year ago?</li>
</ul>
<p>If yes, that’s progress.</p>
<p>And one shift of perspective: look backward, not forward. Looking back creates optimism about what’s ahead. When you look at a few years of practice and see how far you’ve come, gratitude shows up where pressure used to be. And if that much shifted in a year, you can imagine what five or ten might hold.</p>

<h2>What changed for me in six years</h2>
<p>I realised that trying to change myself can be a subtle excuse the mind uses to avoid accepting how things are. Another way of refusing reality.</p>
<p>So I gave the striving up inside the practice. I gave up on becoming different, on feeling less anxiety, on experiencing things less intensely. And in accepting myself as I am and how I experience things, a great deal of energy and tension released.</p>
<p>The irony: the moment I accepted the difficult emotions and gave them room, freedom showed up in how I experience them.</p>

<h2>Common questions</h2>
<p><strong>How long before meditation starts working?</strong></p>
<p>You should see changes on a scale of months, not years. Peck watches one thing in his students above all: whether they know more about how their mind works than they did three months ago. That’s a more usable measure than how calm you feel.</p>
<p><strong>Is it normal to feel worse after a few months of practice?</strong></p>
<p>Yes, this is common. Short practice usually brings relief and calm. Longer practice starts showing you things that were there all along. That phase is unpleasant, and afterwards the level typically settles lower than where it started. If it overwhelms you, that’s the point to stop doing it alone.</p>
<p><strong>Is enlightenment actually possible?</strong></p>
<p>According to teachers I trust, yes. But it’s rare, it takes decades, and it makes a poor life plan. As a benchmark for daily practice it does more harm than good.</p>
<p><strong>Should I go to therapy or meditate?</strong></p>
<p>Peck uses the image of a pond you live next to. Therapy drains it; meditation teaches you to live beside it. Asked which one to choose, he answers: both. They do different work and neither replaces the other.</p>
<p><strong>How do I know I’m progressing, if not by how I feel?</strong></p>
<p>By behaviour. Do you react differently than a year ago? Can you stay with an uncomfortable emotion without immediately pushing it away? Do you return to steadiness faster? These are observable, unlike whether you’re “calm enough”.</p>

<h2>Sources</h2>
<ul>
<li>Tucker Peck, <a href="https://www.amazon.com/Sanity-Sainthood-Integrating-Meditation-Psychotherapy/dp/B0DXJ12JV7" target="_blank" rel="noopener noreferrer">Sanity and Sainthood: Integrating Meditation and Psychotherapy</a>. The myth of enlightenment, the pond image and the looking-backward measure all come from this book.</li>
<li>Shinzen Young, on the complete experience of discomfort and of pleasure.</li>
</ul>

<aside class="blog-cta">
<p class="blog-cta-text">does this resonate? let’s meet.</p>
<a class="btn-whisper" href="/en#first-conversation">book a free intro session</a>
</aside>
`,
    },
  ],
  cs: [
    {
      id: 'mytus-osviceni',
      slug: 'mytus-osviceni',
      title: 'Proč ti meditace nepřinese trvalý klid (a co ti přinese místo toho)',
      date: '2026-06-20',
      image: '/images/photos/photo-golden.jpg',
      imageAlt: 'Terezie Alder při meditaci',
      excerpt:
        'Šest let meditace, přes tisíc hodin praxe a nejsem osvícená. O mýtu osvícení, o tom, proč škodí, a o užitečnějším způsobu, jak měřit pokrok.',
      seoTitle: 'Proč ti meditace nepřinese trvalý klid',
      seoDescription:
        'Šest let meditace, přes tisíc hodin praxe a nejsem osvícená. O mýtu osvícení, o tom, proč škodí, a o užitečnějším způsobu, jak měřit pokrok.',
      body: `
<p>Meditace tě nezbaví negativních emocí a nedovede tě za rok ani za dva do stavu trvalého klidu. Co ti dá, je něco jiného: schopnost prožít to, co přichází, bez toho, že bys s tím bojovala. Šest let praxe, přes tisíc hodin a víc než deset vícedenních retreatů mě dovedlo hlavně k tomu, že jsem představu osvícení pustila. Teprve tam se něco uvolnilo.</p>

<h2>Co jsem od meditace čekala</h2>
<p>Když jsem začínala, hnala jsem se za osvícením, aniž bych si to přiznala.</p>
<p>Navenek to vypadalo správně. Sednout si, zkoumat svoji vnitřní zkušenost, přijímat emoce a myšlenky, jak přicházejí. Ale na pozadí běžel cíl, o kterém jsem tehdy nevěděla: když se otevřu a nechám tohle všechno projít skrz sebe dostatečně naplno, přetaví se to. Změním se. Smutek a úzkost odejdou a já je už nikdy cítit nebudu.</p>
<p>Chtěla jsem přijmout svoje emoce jen proto, abych se jich zbavila. A přesně ten skrytý cíl byl celou dobu ten problém.</p>

<h2>Co je mýtus osvícení</h2>
<p>Meditační učitel a psychoterapeut Tucker Peck tomu ve své knize <a href="https://www.amazon.com/Sanity-Sainthood-Integrating-Meditation-Psychotherapy/dp/B0DXJ12JV7" target="_blank" rel="noopener noreferrer">Sanity and Sainthood: Integrating Meditation and Psychotherapy</a> říká mýtus osvícení. Popisuje, že v něj věří většina jeho studentů, když se poprvé potkají, a že mu často nevědomě věří dál i potom, co rozumově vědí, že to tak není.</p>
<p>Ten mýtus vypadá takhle: budeš meditovat a postupně se budeš cítit klidněji a klidněji, až se nakonec zbavíš všech nepříjemných pocitů a zůstane ti jen mír a radost. A ten stav ti pak vydrží napořád.</p>
<p>Peck nezpochybňuje, že úplné probuzení je možné. Popisuje jednu ženu, u které podle něj skutečně nastalo, po zhruba čtyřiceti letech praxe, rok a půl před smrtí. Mýtus není v tom, že by to bylo nemožné. Mýtus je v tom, že je to rychlé a že se to dá naplánovat na řád let.</p>

<h2>Proč ten mýtus škodí</h2>
<h3>Časové měřítko nesedí</h3>
<p>Představ si život mnicha v klášteře. Meditaci zasvětí celý život, často do kláštera vstupuje mladý, nechodí do práce, nežije na sociálních sítích. Formálně medituje čtyři až šest hodin denně a ve zbytku dne se snaží držet pozornost i při běžných činnostech. K tomu pravidelné intenzivní retreaty, často v mlčení. Celé jeho prostředí je postavené tak, aby v něm bylo co nejmíň rozptýlení.</p>
<p>A teď si vezmi nás. Chodíme do práce, jsme napojení na zprávy a sociální sítě, řešíme vztahy, peníze, kariéru, rodinu. Nejde o to, že bychom to měli vzdát. Jde o to, že s takovým životem nemůžeme čekat obří pokroky hned.</p>
<h3>Vznikne bludný kruh</h3>
<p>Medituju, necítím se osvíceně, takže selhávám, takže cítím víc stresu. A příště sedám s tímhle napětím na pozadí.</p>
<p>V buddhismu se tomu říká princip dvou šípů. První šíp je samotná nepříjemná zkušenost: bolest, smutek, vztek. To je něco, co v životě prostě přijde. Druhý šíp je to, co si k tomu přidáváme sami. Sebeobviňování, odpor, vyčítání. <em>Jsem špatná, že to cítím. Měla bych už být dál.</em> Ten druhý šíp dělá utrpení mnohem větším než ten první.</p>
<p>Přitom to, co se děje, je normální. Meditace ti umožní si víc uvědomovat, co cítíš. To je celý její smysl. A právě proto budeš díky ní cítit víc pozitivních i negativních emocí. Není to chyba, je to úspěch. A na začátku často převažují ty negativní, protože jich tam bývá nastřádaných víc. To není tvoje osobní selhání, to je logický důsledek toho, jak dnes žijeme.</p>
<h3>Snaha je sama o sobě forma tenze</h3>
<p>Tohle je nejhůř uchopitelná část. Samotná snaha mít při meditaci cíl a tlačit na něj je forma napětí. Je to nepřijetí toho, co je. Vytváří odpor na pozadí, kvůli kterému se nedokážeš uvolnit a plně prožít, co se děje teď. Pořád v tobě zůstává část, která to chce změnit.</p>
<p>Nemluvím o konceptuální rovině. Je úplně v pořádku chtít ve svém životě něco změnit, začít cvičit, posunout se. Mluvím o emočním naladění během samotné meditace.</p>
<p>Vezmu příklad. Nedávno jsem zkoušela třicet minut v sauně při devadesáti stupních. Ke konci na tebe tělo řve, že umřeš, pokud okamžitě neodejdeš. Část mě bojovala proti tomu horku a proti tomu, že tam vůbec jsem.</p>
<p>Já tam ale zůstat chtěla a věděla jsem, že fyzicky jsem v bezpečí. Tak jsem zkusila tu realitu přijmout celou. Uvolnila jsem tělo a začala si opakovat: můžu tady teď umřít, je to v pořádku, nemusím proti tomu bojovat. A emočně jsem si připustila i variantu, že kdyby tohle mělo trvat navždy, bude to v pořádku.</p>
<p>V ten moment se něco uvolnilo. Sedmdesát procent utrpení odešlo a zůstala jen ta fyzická věc, se kterou jsem dokázala prostě být. Kdybych si v koutku pořád říkala „snad to brzo skončí“, neuvolnila bych se nikdy.</p>

<h2>Co je tedy osvícení</h2>
<p>Osvícení není stav, ve kterém přestane změna. Není to klidná vodní hladina, na které se nic nepohne.</p>
<p>Peck ho definuje jako stav, ve kterém se objekty a stavy vědomí dál neustále mění, ale ty už neděláš hlouposti, kterými by ses to snažila zastavit.</p>
<p>Buddhova definice míří spíš na osobní zkušenost: rozpoznáváš pocity, vjemy a myšlenky přesně tak, jak přicházejí, trvají a zase odcházejí. Nic víc. Pozoruješ proud zkušenosti.</p>
<p>Můžeš si to představit jako kvalitu, kterou lidé popisují u Dalajlámy. Během několika minut přejde ze smíchu do dojetí, ze slz zpátky do klidu. Není to tím, že by ty emoce byly falešné nebo povrchní. Je to tím, že je nechává projít plně. Když emoci nedržíš a nesnažíš se ji zastavit, nezasekne se.</p>
<p>Meditační učitel Shinzen Young to shrnuje takhle: <q>naučit se mít úplnou zkušenost diskomfortu nás osvobozuje</q>. A zkušenost slasti nás podle něj stejnou měrou naplňuje. Meditace tě nenaučí cítit jen to příjemné. Naučí tě prožívat obojí, plně a bez zaseknutí. To je ta svoboda, ne absence bolesti.</p>

<h2>Užitečnější měřítko než osvícení</h2>
<p>Když si za měřítko vezmeš osvícení, dáváš si cíl tak vzdálený, že tě akorát demotivuje.</p>
<p>Neměř svoji praxi tím, jak se během meditace cítíš. Ani tím, jestli myslíš a cítíš přesně to, co bys chtěla. Emoce a myšlenky stejně neovládáš a nikdy plně ovládat nebudeš. To není znak úspěchu ani neúspěchu, to je prostě realita lidské mysli.</p>
<p>Měřítkem je, jak se meditace projevuje v tvém životě. Jaké nese plody.</p>
<ul>
<li>Chováš se k lidem kolem sebe líp?</li>
<li>Chováš se líp k sobě?</li>
<li>Bojuješ míň s tím, co cítíš?</li>
<li>Zpracováváš emoce rychleji?</li>
<li>Jsi podle svých vlastních hodnot o něco lepší člověk než před rokem?</li>
</ul>
<p>Pokud ano, to je pokrok.</p>
<p>A k tomu jeden posun perspektivy: dívej se dozadu, ne dopředu. Pohled zpátky vytváří optimismus do budoucna. Když se po pár letech praxe ohlédneš a uvidíš, jak daleko ses posunula, přijde místo tlaku vděčnost. A když takový posun nastal za rok, dokážeš si představit, co může být za pět nebo deset let.</p>

<h2>Co se za šest let změnilo mně</h2>
<p>Došlo mi, že snaha změnit sama sebe může být docela jemná výmluva mysli, jak na nějaké úrovni nepřijmout to, jak věci jsou. Další způsob, jak odmítat realitu.</p>
<p>Tak jsem to snažení v procesu meditace vzdala. Vzdala jsem, že budu jiná, že budu cítit míň úzkosti, že budu věci prožívat míň intenzivně. A přesně v tom přijetí sebe samé, té, jaká jsem a jak věci prožívám, se uvolnila spousta energie a spousta napětí.</p>
<p>Ironicky: ve chvíli, kdy jsem přijala negativní emoce a dala jim v sobě místo, přišla svoboda v tom, jak je prožívám.</p>
<p>Přeju ti víc a víc odevzdávání se tomu, co je.</p>

<h2>Časté otázky</h2>
<p><strong>Jak dlouho trvá, než meditace začne fungovat?</strong></p>
<p>Změny bys měla pozorovat zhruba v řádu měsíců, ne let. Peck u svých studentů sleduje hlavně jednu věc: jestli za poslední tři měsíce vědí víc o tom, jak jejich mysl funguje, než věděli předtím. To je použitelnější měřítko než to, jak klidná se cítíš.</p>
<p><strong>Je normální, že se po pár měsících praxe cítím hůř?</strong></p>
<p>Ano, je to běžné. Krátká praxe většinou přinese úlevu a klid. Delší praxe ti začne ukazovat věci, které tam byly celou dobu a tys je neviděla. Ta fáze bývá nepříjemná a obvykle se po ní hladina vrací níž, než kde začínala. Pokud tě to zahltí, je to moment, kdy dává smysl neřešit to sama.</p>
<p><strong>Je osvícení vůbec možné?</strong></p>
<p>Podle učitelů, kterým věřím, ano. Ale je vzácné, trvá desítky let a jako životní plán se nehodí. Jako měřítko každodenní praxe je spíš na škodu.</p>
<p><strong>Mám jít do terapie, nebo meditovat?</strong></p>
<p>Peck to popisuje obrazem rybníka, u kterého bydlíš. Terapie ho vylévá, meditace tě učí vedle něj žít. Když se ho zeptají, co si má člověk vybrat, odpovídá: obojí. Dělají různou práci a jedno druhé nenahradí.</p>
<p><strong>Jak poznám, že dělám pokrok, když ne podle toho, jak se cítím?</strong></p>
<p>Podle chování. Reaguješ jinak než před rokem? Vydržíš u nepříjemné emoce, aniž bys ji hned musela zahnat? Vracíš se do klidu rychleji? Tohle jsou věci, které jde pozorovat, na rozdíl od toho, jestli jsi „dost klidná“.</p>

<h2>Zdroje</h2>
<ul>
<li>Tucker Peck: <a href="https://www.amazon.com/Sanity-Sainthood-Integrating-Meditation-Psychotherapy/dp/B0DXJ12JV7" target="_blank" rel="noopener noreferrer">Sanity and Sainthood: Integrating Meditation and Psychotherapy</a>. Odtud pochází pojem mýtus osvícení, obraz rybníka i doporučení dívat se dozadu místo dopředu.</li>
<li>Shinzen Young, jeho učení o kompletní zkušenosti diskomfortu a slasti.</li>
</ul>

<aside class="blog-cta">
<p class="blog-cta-text">rezonuje to v tobě? pojďme se potkat.</p>
<a class="btn-whisper" href="/#first-conversation">rezervovat úvodní sezení zdarma</a>
</aside>
`,
    },
  ],
};

export function formatDate(iso: string, lang: 'en' | 'cs'): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (lang === 'cs') return `${d}. ${m}. ${y}`;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
}
