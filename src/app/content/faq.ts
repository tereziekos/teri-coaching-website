export interface FaqItem {
  q: string;
  a: string[]; // odstavce odpovědi
}

export const faq: Record<'en' | 'cs', FaqItem[]> = {
  en: [
    {
      q: 'how do I know if coaching is right for me?',
      a: [
        'When you feel there’s a problem or an area in your life you can’t move on your own anymore. It might show up as difficult emotions, a sense of hopelessness, or plain exhaustion. I focus especially on relationships, work, existential questions, dating, and hard things carried from childhood. Coaching with me is for people who want to go a little deeper than thinking alone can take them, and who are looking for space, kindness, support, and no judgment. You don’t even need a clearly named “problem.” Often the feeling that things could be different is enough.',
        'The best way to find out is a free intro session. No commitment. We just meet, and you’ll see whether I’m the right person to help you.',
      ],
    },
    {
      q: 'what do we actually do in sessions?',
      a: [
        'In a session, we first get clear on what you want, whether that’s a long-term goal or the goal for that one session. In other words, what the session can best help with and what you need right now.',
        'From there it depends on what you bring. I like to combine practical, attainable steps and strategy (thinking things through together, where you can have your own aha moments) all the way to emotional work, which for me is an essential part of it. Then a session can look more like a guided meditation: we’re very much in the body, sensing what you feel and what your different parts want, getting to understand you better, and working on self-love and healing the patterns that no longer serve you.',
      ],
    },
    {
      q: 'why do you do this work?',
      a: [
        'Most of what I bring to coaching, I’ve lived through myself, whether through my own life experience or through my practices, self-experiential work, and personal growth. My childhood wasn’t exactly easy or safe, and I came away with patterns that hurt me and my relationships. I spent years moving from anxious to secure attachment, and it worked. I found a way to be vulnerable and still regulate myself, and to live truthfully while staying realistic.',
        'My path hasn’t been a straight line either: law, journalism, community work, and these days programming and coaching. That captures my life message pretty well: to keep learning and gathering new experiences and knowledge for life. And I hope that, along the way, I can enrich your path with a point or two as well. That’s exactly why coaching means so much to me: it’s a way to help someone, humanly, on their path and in a life that for many of us isn’t easy and can be full of suffering.',
      ],
    },
    {
      q: 'do you also coach people with anxiety or a difficult past?',
      a: [
        'Yes, as long as you’re stable and it isn’t an acute state (you’re not in danger, or close to it). I know firsthand how difficult emotions can cling, and I understand them up close. At the same time, I can tell when something grows beyond my competence and a professional would serve you better. In that case I either won’t take the work on, or, if it surfaces along the way, I’ll recommend help and end the coaching.',
      ],
    },
    {
      q: 'I’m more of a rational type. does “working with the body and emotions” actually work on me?',
      a: [
        'Maybe it takes a bit longer at first, but paradoxically, as a rational, heady type, you may end up getting the most out of it: once you learn to attune to your emotions, you have plenty to draw on. A lot of my clients are thoughtful people who understood their patterns long ago, and still don’t change. That’s because talking or understanding alone doesn’t shift what’s stored in the body and in emotional patterns. You don’t have to “believe” in anything. We go step by step, with curiosity, and you check for yourself what works and what doesn’t.',
      ],
    },
    {
      q: 'what is the first session like, and does it commit me to anything?',
      a: [
        'It’s free, lasts 60 minutes, and takes place online; for couples I’m also happy to arrange an in-person intro session. The whole point is to find out whether we’re a good fit. It doesn’t commit you to anything. If you want to continue, we’ll arrange it. If not, that’s useful information too.',
      ],
    },
    {
      q: 'you use AI. what does that mean for my privacy?',
      a: [
        'Between sessions, AI helps me prepare: I’ve built agents with access to around a hundred professional books (IFS, attachment, mindfulness, and more), so I can quickly find a framework or exercise that fits what we’re working on. I record sessions and then use the transcript. After each session, you get access to a summary. I don’t pass your data on anywhere, and when I work with AI tools I anonymize your name (I never enter identifying details). If you’d prefer we work entirely without AI, just say so. No explanation needed.',
      ],
    },
    {
      q: 'online or in person? and in which language?',
      a: [
        'I work in both Czech and English, whichever suits you. Most sessions are online. In person, we meet in Prague 6, Nebušice (about 10 minutes by bus from Bořislavka metro). I prefer couples sessions in person if you’re in Prague.',
      ],
    },
    {
      q: 'how many sessions will I need?',
      a: [
        'That depends on you and on what you’re bringing. Some people need just a few sessions, others come back over a longer stretch. I won’t push you anywhere. For more intensive work, we usually meet once every one to two weeks.',
      ],
    },
    {
      q: 'what’s the difference between coaching and therapy?',
      a: [
        'I find this question often quite misleading, and more of a legal one. Different countries and professional bodies sort therapy and coaching into different categories. I’m honestly not thrilled that some Czech professional bodies keep raising the bar for becoming a therapist, leaving people who are looking for good help with fewer options. I try to support each client in judging for themselves whether our work feels effective and whether they see results. And if they don’t, I’ll encourage them to end the coaching. That way you can assess the value of my practice and experience yourself.',
        'On the other hand, where a client’s safety is at stake and there’s a risk they wouldn’t get adequate help (say, with a serious mental illness or self-harm), I’ll proactively end the work and refer to specialists. But when it comes to topic or depth, I don’t separate therapy and coaching. Just as therapy can touch deeper themes and feelings, so can coaching with me.',
      ],
    },
    {
      q: 'who is coaching not a good fit for?',
      a: [
        'We go deep together, and we can move into serious or harder topics. But I draw a line where your safety calls for clinical care instead (ideally a psychologist or psychiatrist). That is, if your state is more acute and involves possible self-harm or danger to yourself, or if you need a diagnosis or medical treatment. If you’re not sure where your topic belongs, you can book an intro session and we’ll figure it out together. And at worst, I’ll try to point you toward places where you’ll find help.',
      ],
    },
    {
      q: 'and what if I need to cancel?',
      a: [
        'If you need to cancel or reschedule, please let me know at least 24 hours ahead. Cancel earlier than that and nothing happens. Cancel less than 24 hours before, and you pay the full price of the reserved session. This doesn’t apply in case of sudden health or other serious situations.',
      ],
    },
    {
      q: 'do you work with any employee benefit programs?',
      a: [
        'Yes, you can pay through benefit platforms too (Benefit Plus, Pluxee, Edenred). If your employer offers them, ask; coaching is often reimbursed. Just please report the payment in the platform in advance, so we can process it and have it ready before the session.',
      ],
    },
  ],
  cs: [
    {
      q: 'jak poznám, že je koučink pro mě?',
      a: [
        'Když máte pocit, že je ve vašem životě nějaký problém nebo oblast, na kterou už sami nestačíte a nedaří se vám s ní pohnout. Může se to projevovat v náročných emocích, pocitu beznaděje nebo prostě vyčerpání. Zaměřuji se zvlášť na témata jako vztahy, práce, existenciální otázky, dating nebo náročné věci z dětství. Koučink se mnou je pro lidi, kteří chtějí jít kousek hlouběji, než kam se dá dojít přemýšlením. Zároveň hledají prostor, laskavost, podporu a nesouzení. Nemusíte mít ani jasně pojmenovaný „problém“. Často stačí pocit, že to může být jinak.',
        'Nejlepší způsob, jak to zjistit, je úvodní sezení zdarma. Žádný závazek. Jen se potkáme a uvidíte, jestli jsem ten správný člověk, který by vám mohl pomoci.',
      ],
    },
    {
      q: 'co spolu na sezeních vlastně děláme?',
      a: [
        'Na sezení si nejdřív ujasníme, co chcete, ať už je to dlouhodobý cíl, nebo cíl jednotlivého sezení. Tedy s čím vám sezení může nejvíc pomoct a co zrovna potřebujete.',
        'Pak už záleží na vašem zadání. Ráda kombinuju praktické a dosažitelné kroky a strategii (společné přemýšlení, ze kterého můžete mít aha momenty) až po emoční práci, která je pro mě nedílnou součástí. To pak sezení může vypadat i jako vedenější meditace: jsme hodně v těle, zjišťujeme, co cítíte a co od vás chtějí vaše různé části, snažíme se vám líp porozumět a pracujeme na sebelásce a uzdravování vzorců, které vám už neslouží.',
      ],
    },
    {
      q: 'proč děláš zrovna tohle?',
      a: [
        'Většinu toho, co do koučinku přináším, jsem si sama prožila, ať už skrz vlastní životní zkušenost, nebo skrz svoje praxe, sebezkušenost a osobní rozvoj. Moje dětství nebylo úplně lehké ani bezpečné a odnesla jsem si z něj vzorce, které zraňovaly mě i moje vztahy. Roky jsem pracovala na tom, abych přešla od úzkostné vazby k bezpečné, a povedlo se. Našla jsem cestu, jak být zranitelná a zároveň se umět seberegulovat, a jak žít pravdivě a přitom realisticky.',
        'Moje cesta taky nebyla přímočará: práva, žurnalistika, komunitní práce, dnes programování a koučink. A to docela vystihuje i moje životní poselství: celoživotně se učit a sbírat nové zkušenosti a znalosti. Doufám, že vás při tom sbírání můžu o nějakou pointu obohatit i na vaší cestě. Právě proto je pro mě koučink tak smysluplný: je to způsob, jak někomu lidsky pomoct na jeho cestě a v životě, který pro mnohé z nás není lehký a může být plný utrpení.',
      ],
    },
    {
      q: 'koučuješ i lidi s úzkostmi nebo těžkou minulostí?',
      a: [
        'Ano, pokud jste stabilní a nejde o akutní stav (nejste v ohrožení ani blízko němu). Sama vím, jak se těžké emoce dokážou držet, a rozumím jim zblízka. Zároveň dokážu posoudit, kdy už téma přerůstá mé kompetence a kdy by vám líp pomohl odborník. V takové situaci spolupráci buď nenavážu, nebo pokud se to ukáže až v průběhu, doporučím pomoc a spolupráci rozvážu.',
      ],
    },
    {
      q: 'jsem spíš racionální typ. funguje na mě „práce s tělem a emocemi“?',
      a: [
        'Možná vám to ze začátku zabere víc času, ale paradoxně právě jako racionální, hlavový typ z toho pak můžete vytěžit nejvíc: jakmile se naučíte na emoce nacítit, máte z čeho čerpat. Hodně mých klientů jsou přemýšliví lidé, kteří svým vzorcům dávno rozumí, a přesto se nemění. To proto, že samotné mluvení nebo pochopení nezmění to, co je uložené v těle a v emočních vzorcích. Nemusíte ničemu „věřit“. Jdeme krok po kroku, se zvědavostí, a vy si sami ověříte, co funguje a co ne.',
      ],
    },
    {
      q: 'jak probíhá první sezení a zavazuje mě to k něčemu?',
      a: [
        'Je zdarma, trvá 60 minut a probíhá online; v případě párového koučinku se ráda domluvím i na osobním úvodním sezení. Celé je to prostor pro to zjistit, jestli si sedneme. Nezavazuje vás to k ničemu. Jestli budete chtít pokračovat, domluvíme se. Jestli ne, je to taky podnětná informace.',
      ],
    },
    {
      q: 'používáš AI. co to znamená pro moje soukromí?',
      a: [
        'Mezi sezeními mi AI pomáhá s přípravou: postavila jsem si agenty s přístupem ke zhruba stovce odborných knih (IFS, attachment, mindfulness a dalším), takže rychle najdu rámec nebo cvičení, které sedí na to, na čem pracujeme. Sezení nahrávám a pak používám jeho přepis. Po každém sezení dostanete přístup ke shrnutí. Vaše data nikam dál nepouštím a při práci s AI nástroji vaše jméno anonymizuji (nikdy neuvádím identifikovatelné údaje). Pokud chcete spolupracovat úplně bez AI, stačí říct, bez vysvětlování.',
      ],
    },
    {
      q: 'online, nebo osobně? a v jakém jazyce?',
      a: [
        'Sezení vedu česky i anglicky, podle toho, co vám vyhovuje. Většina probíhá online. Osobně se potkáme v Praze 6 v Nebušicích (asi 10 minut autobusem z metra Bořislavka). Párová sezení preferuji osobně, pokud jste v Praze.',
      ],
    },
    {
      q: 'kolik sezení budu potřebovat?',
      a: [
        'To záleží na vás a na tom, s čím přicházíte. Někomu stačí pár sezení, jiný se vrací dlouhodobě. Nikam vás netlačím. Na intenzivnější práci se scházíme obvykle jednou za jeden až dva týdny.',
      ],
    },
    {
      q: 'jaký je rozdíl mezi koučinkem a terapií?',
      a: [
        'Tahle otázka mi přijde často dost zavádějící a spíš právní. V různých zemích a podle různých profesních organizací spadají terapie a koučink do různých kategorií. Sama nejsem nadšená z toho, že některé české profesní organizace kladou na cestu k terapeutické profesi čím dál víc nároků a lidé hledající dobrou pomoc pak nemají dostatek možností. Snažím se klienta podporovat v tom, aby sám posoudil, jestli mu naše spolupráce přijde efektivní a jestli vidí výsledky. A pokud ne, podpořím ho v tom koučink ukončit. Hodnotu mojí praxe a zkušenosti tak může posoudit sám.',
        'Na druhou stranu tam, kde jde o bezpečí klienta a hrozí, že by nedostal adekvátní pomoc (třeba u vážné psychické nemoci nebo sebepoškozování), spolupráci proaktivně rozvážu a odkážu na odborníky. Ale co se týče témat nebo hloubky, terapii a koučink nerozděluji. Stejně jako se v terapii můžete dotknout hlubších témat a pocitů, můžete i v koučinku se mnou.',
      ],
    },
    {
      q: 'pro koho koučink naopak vhodný není?',
      a: [
        'V koučinku se mnou jdeme do hloubky a často se spolu můžeme ponořit i do vážných nebo těžších témat. Hranici ale dávám tam, kde je pro vaše bezpečí potřeba spíš klinická pomoc (ideálně psychologa nebo psychiatra). Tedy pokud je váš stav akutnější a týká se i možného sebepoškozování nebo sebeohrožení, nebo pokud potřebujete diagnózu či zdravotní léčbu. Pokud si nejste jistí, kam vaše téma patří, můžete se objednat na úvodní sezení a zjistíme to spolu. A v krajním případě vám zkusím doporučit místa, kde najdete pomoc.',
      ],
    },
    {
      q: 'a co když potřebuju zrušit?',
      a: [
        'Když potřebujete sezení zrušit nebo přesunout, dejte mi prosím vědět alespoň 24 hodin předem. Pokud zrušíte dřív, nic se neděje. Pokud zrušíte méně než 24 hodin předem, platíte plnou cenu rezervovaného sezení. V případě nenadálých zdravotních nebo jiných vážných situací to neplatí.',
      ],
    },
    {
      q: 'spolupracujete s nějakými zaměstnaneckými benefitními programy?',
      a: [
        'Ano, platit můžete běžně i přes benefitní platformy (Benefit Plus, Pluxee, Edenred). Pokud je váš zaměstnavatel nabízí, zeptejte se, koučink často proplácí. Prosím ale o nahlášení platby v dané platformě předem, abychom ji stihli zpracovat a připravit ještě před sezením.',
      ],
    },
  ],
};
