export interface Testimonial {
  quote: string;
  name: string;
}

export const testimonials: Record<'en' | 'cs', Testimonial[]> = {
  en: [
    {
      quote: "During the ten or so coaching calls I have had with Terezie I have been introduced to questions and concepts that have helped me to better recognise what I value, and how to resolve internal conflict in order to make better decisions. During our calls, we have touched on many topics \u2013 for example, career, relationships, stress, values and boundaries \u2013 from a holistic viewpoint, which I appreciate. I have also felt allowed to and empowered by approaching solutions in my own way.",
      name: "Simon Holm",
    },
    {
      quote: "I worked with Terezie over a few sessions on emotional blockers I had around relationships and work. I deeply appreciated how Terezie always took me seriously. She had a wide array of frameworks that we experimented with until we found what works. A year later, I\u2019d say 95% of my relationship issues and 50% of my work issues are gone, and I attribute around a third of that progress to Terezie.",
      name: "Anonymous",
    },
    {
      quote: "Here\u2019s what I told my friend when she asked me about finding a coach earlier this year: \u201CI would recommend Terezie. She seems really talented and has this incredible ability to dig into personal-emotional issues. She helped me gain a lot more clarity within the session, but also provided me with specific tools that I could use on my own. Really helpful!\u201D",
      name: "Lukas",
    },
    {
      quote: "The thing I like most is that Terezie\u2019s sessions are very actionable, and she\u2019ll send a follow-up email with what we discussed and actions from the session. She has a good understanding of effective altruism and the CFAR techniques which makes our conversations a lot easier. Because our sessions feel safe and I never feel judged I can be more open and honest about problems and challenges. I highly recommend Terezie as a coach.",
      name: "Johan",
    },
    {
      quote: "Terezie is a great listener and knows which questions to ask to help you make progress on the issues in your life. Rather than imposing her way of solving problems she empowers you to tackle them your way (which makes all the difference for me in terms of long-term motivation to follow through). I value that she can recommend techniques from both the rationality and more holistic approaches. Terezie has helped me make a big, at the time scary, and in retrospect very positive change in my career. I feel very comfortable sharing my most private thoughts with her and I\u2019m very thankful for the continuity she provides in our sessions by reminding me of parallels between current topics and what we worked on in the past.",
      name: "Philipp Hummel",
    },
    {
      quote: "I am very grateful that Terezie has been my mindfulness coach for several reasons. She was knowledgeable, always came well prepared to the sessions, having researched topics tailored to my needs. Terezie was open-minded, understood that everyone works differently and suggested different strategies with me in mind. She was great at following up and holding me accountable. Furthermore, she was eager to learn more herself and researched all the questions I was throwing, whenever she didn\u2019t know directly the answer. Her coaching made me progress very fast in meditation and I learnt techniques and got insights to my mind and my life that are very valuable for me until today, even if years have passed from the time she was coaching me.",
      name: "Tereza",
    },
    {
      quote: "I have been working with Terezie for the last year. I have been delighted with the results. The most valuable outcomes I got are: better prioritization for personal growth, 2\u20133\u00D7 more time spent on valuable work outside of work hours, and deciding on a career change. You should definitely try coaching, at least for a few sessions, if you wonder.",
      name: "Maxime Riche",
    },
    {
      quote: "Over the past ~16 months, Terezie has been coaching me in various areas of my life. From the very beginning I have been very happy with the coaching I\u2019ve received. I really enjoy our coaching relationship and have always felt comfortable, relaxed, and supported. She is highly attentive to my needs and goals, and is proactive in helping me make progress. Her coaching style strikes a balance between analytical and intuitive that suits me very well. She offers a very flexible coaching commitment and is always accommodating of my busy lifestyle. I\u2019m hugely grateful to Terezie for the great commitment and joy with which she continues to coach me.",
      name: "Taylor Jones",
    },
  ],
  cs: [
    {
      quote: "B\u011Bhem zhruba deseti kou\u010Dovac\u00EDch hovor\u016F s Terezi\u00ED jsem se setkal s ot\u00E1zkami a koncepty, kter\u00E9 mi pomohly l\u00E9pe rozpoznat, \u010Deho si cen\u00EDm, a jak \u0159e\u0161it vnit\u0159n\u00ED konflikty, abych se l\u00E9pe rozhodoval. B\u011Bhem na\u0161ich hovor\u016F jsme se dotkli spousty t\u00E9mat \u2013 t\u0159eba kari\u00E9ry, vztah\u016F, stresu, hodnot a hranic \u2013 z celostn\u00EDho pohledu, co\u017E oce\u0148uju. Taky jsem m\u011Bl pocit, \u017Ee m\u016F\u017Eu a \u017Ee m\u00E1m prostor p\u0159istupovat k \u0159e\u0161en\u00EDm po sv\u00E9m.",
      name: "Simon Holm",
    },
    {
      quote: "S Terezi\u00ED jsem pracoval na n\u011Bkolika sezen\u00EDch na emo\u010Dn\u00EDch blok\u00E1d\u00E1ch kolem vztah\u016F a pr\u00E1ce. Hodn\u011B jsem ocenil, \u017Ee m\u011B Terezie v\u017Edycky brala v\u00E1\u017En\u011B. M\u011Bla spoustu r\u016Fzn\u00FDch p\u0159\u00EDstup\u016F, kter\u00E9 jsme zkou\u0161eli, dokud jsme nena\u0161li to, co funguje. O rok pozd\u011Bji bych \u0159ekl, \u017Ee 95 % m\u00FDch vztahov\u00FDch probl\u00E9m\u016F a 50 % pracovn\u00EDch je pry\u010D, a asi t\u0159etinu toho pokroku p\u0159isuzuju Terezii.",
      name: "Anonymous",
    },
    {
      quote: "Tohle jsem \u0159ekl kamar\u00E1dce, kdy\u017E se m\u011B ptala na hled\u00E1n\u00ED kou\u010De: \u201EDoporu\u010Dil bych Terezii. P\u016Fsob\u00ED opravdu talentovan\u011B a m\u00E1 neuv\u011B\u0159itelnou schopnost j\u00EDt do hloubky u osobn\u00EDch a emo\u010Dn\u00EDch t\u00E9mat. Pomohla mi z\u00EDskat mnohem v\u00EDc jasnosti p\u0159\u00EDmo b\u011Bhem sezen\u00ED, ale taky mi dala konkr\u00E9tn\u00ED n\u00E1stroje, kter\u00E9 m\u016F\u017Eu pou\u017E\u00EDvat s\u00E1m. Fakt u\u017Eite\u010Dn\u00E9!\u201C",
      name: "Lukas",
    },
    {
      quote: "Nejv\u00EDc se mi l\u00EDb\u00ED, \u017Ee Tereziina sezen\u00ED jsou hodn\u011B praktick\u00E1 a po ka\u017Ed\u00E9m po\u0161le follow-up email s t\u00EDm, co jsme probrali, a s kroky ze sezen\u00ED. Dob\u0159e rozum\u00ED efektivn\u00EDmu altruismu i technik\u00E1m z CFAR, co\u017E na\u0161e rozhovory hodn\u011B usnad\u0148uje. Proto\u017Ee se na sezen\u00EDch c\u00EDt\u00EDm bezpe\u010Dn\u011B a nikdy se nec\u00EDt\u00EDm souzen\u00FD, m\u016F\u017Eu b\u00FDt otev\u0159en\u011Bj\u0161\u00ED a up\u0159\u00EDmn\u011Bj\u0161\u00ED o probl\u00E9mech a v\u00FDzv\u00E1ch. Terezii jako kou\u010Dku v\u0159ele doporu\u010Duju.",
      name: "Johan",
    },
    {
      quote: "Terezie je skv\u011Bl\u00E1 poslucha\u010Dka a v\u00ED, jak\u00E9 ot\u00E1zky polo\u017Eit, aby v\u00E1m pomohla posunout se v tom, co \u0159e\u0161\u00EDte. M\u00EDsto aby vnucovala sv\u016Fj zp\u016Fsob \u0159e\u0161en\u00ED, d\u00E1v\u00E1 v\u00E1m prostor zvl\u00E1dnout v\u011Bci po sv\u00E9m (co\u017E pro m\u011B d\u011Bl\u00E1 obrovsk\u00FD rozd\u00EDl v dlouhodob\u00E9 motivaci dot\u00E1hnout v\u011Bci do konce). Oce\u0148uju, \u017Ee dok\u00E1\u017Ee doporu\u010Dit techniky jak z racionality, tak z holisti\u010Dt\u011Bj\u0161\u00EDch p\u0159\u00EDstup\u016F. Terezie mi pomohla ud\u011Blat velkou, tehdy d\u011Bsivou a zp\u011Btn\u011B velmi pozitivn\u00ED zm\u011Bnu v kari\u00E9\u0159e. C\u00EDt\u00EDm se u n\u00ED pohodln\u011B sd\u00EDlet i ty nejsoukrom\u011Bj\u0161\u00ED my\u0161lenky a jsem vd\u011B\u010Dn\u00FD za kontinuitu, kterou v sezen\u00EDch udr\u017Euje t\u00EDm, \u017Ee mi p\u0159ipom\u00EDn\u00E1 paralely mezi aktu\u00E1ln\u00EDmi t\u00E9maty a t\u00EDm, na \u010Dem jsme pracovali d\u0159\u00EDv.",
      name: "Philipp Hummel",
    },
    {
      quote: "Jsem Terezii moc vd\u011B\u010Dn\u00E1 za to, \u017Ee byla mou kou\u010Dkou v\u0161\u00EDmavosti, a to z n\u011Bkolika d\u016Fvod\u016F. Byla znal\u00E1, na sezen\u00ED v\u017Edycky p\u0159i\u0161la p\u0159ipraven\u00E1 a s t\u00E9maty vybran\u00FDmi pro m\u011B. Terezie byla otev\u0159en\u00E1, ch\u00E1pala, \u017Ee ka\u017Ed\u00FD funguje jinak, a navrhovala strategie s ohledem na m\u011B. Skv\u011Ble se starala o follow-up a dr\u017Eela m\u011B v odpov\u011Bdnosti. Nav\u00EDc se sama cht\u011Bla u\u010Dit v\u00EDc a na v\u0161echny ot\u00E1zky, kter\u00E9 jsem na ni h\u00E1zela, si v\u017Edycky zjistila odpov\u011B\u010F, kdy\u017E ji hned neznala. D\u00EDky jej\u00EDmu kou\u010Dinku jsem v meditaci pokro\u010Dila hodn\u011B rychle a nau\u010Dila jsem se techniky a z\u00EDskala vhledy do sv\u00E9 mysli a sv\u00E9ho \u017Eivota, kter\u00E9 jsou pro m\u011B cenn\u00E9 dodnes, i kdy\u017E od t\u00E9 doby uplynuly roky.",
      name: "Tereza",
    },
    {
      quote: "S Terezi\u00ED spolupracuju posledn\u00ED rok. V\u00FDsledky m\u011B pot\u011B\u0161ily. Nejcenn\u011Bj\u0161\u00ED, co mi to p\u0159ineslo: lep\u0161\u00ED prioritizace osobn\u00EDho r\u016Fstu, 2\u20133\u00D7 v\u00EDc \u010Dasu str\u00E1ven\u00E9ho smysluplnou prac\u00ED mimo pracovn\u00ED dobu a rozhodnut\u00ED o zm\u011Bn\u011B kari\u00E9ry. Pokud v\u00E1h\u00E1te, ur\u010Dit\u011B zkuste kou\u010Dink, aspo\u0148 na p\u00E1r sezen\u00ED.",
      name: "Maxime Riche",
    },
    {
      quote: "Posledn\u00EDch zhruba 16 m\u011Bs\u00EDc\u016F m\u011B Terezie kou\u010Duje v r\u016Fzn\u00FDch oblastech \u017Eivota. Od sam\u00E9ho za\u010D\u00E1tku jsem s kou\u010Dinkem velmi spokojen\u00FD. N\u00E1\u0161 kou\u010Dovac\u00ED vztah m\u011B bav\u00ED a v\u017Edycky jsem se c\u00EDtil pohodln\u011B, uvoln\u011Bn\u011B a podporovan\u011B. Je velmi pozorn\u00E1 k m\u00FDm pot\u0159eb\u00E1m a c\u00EDl\u016Fm a aktivn\u011B mi pom\u00E1h\u00E1 posouvat se. Jej\u00ED styl kou\u010Dinku je vyv\u00E1\u017Een\u00FD mezi analytick\u00FDm a intuitivn\u00EDm p\u0159\u00EDstupem, co\u017E mi hodn\u011B sed\u00ED. Nab\u00EDz\u00ED velmi flexibiln\u00ED spolupr\u00E1ci a v\u017Edycky vych\u00E1z\u00ED vst\u0159\u00EDc m\u00E9mu nabit\u00E9mu programu. Jsem Terezii nesm\u00EDrn\u011B vd\u011B\u010Dn\u00FD za nasazen\u00ED a radost, s jakou m\u011B d\u00E1l kou\u010Duje.",
      name: "Taylor Jones",
    },
  ],
};
