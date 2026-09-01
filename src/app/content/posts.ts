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
      id: 'pet-let-pratelstvi',
      slug: 'five-years-friendship',
      title: 'I Spent Five Years Building Friendships From Zero',
      date: '2026-06-30',
      image: '/images/photos/pet-let-pratelstvi.jpg',
      imageAlt: 'Terezie Alder in a meadow',
      excerpt:
        'At 28 I lost my whole community and had nobody to call. On why close friendships are so hard to build as an adult, and how I built mine from nothing.',
      seoTitle: 'I Spent Five Years Building Friendships From Zero',
      seoDescription:
        'At 28 I lost my whole community and had nobody to call. On why close friendships are so hard to build as an adult, and how I built mine from nothing.',
      body: `
<p>Five years ago, in the middle of covid, I lost the community I belonged to. I was 28 and going through one of the hardest periods of my life.</p>
<p>I remember the moment it hit me: I have nobody to call.</p>
<p>Today I know it doesn’t have to be that way.</p>
<div class="blog-video"><iframe src="https://www.youtube-nocookie.com/embed/Wj0ouhDiiwE" title="I Spent Five Years Building Friendships From Zero" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
<p>I tell this story in a video as well, though it’s in Czech. The piece below goes further in places than the video does.</p>
<h2>We’ve gotten used to it</h2>
<p>It seems to me that a lot of the people I meet have quietly accepted that deep friendships disappear in adulthood. That between work, a mortgage and a family there simply isn’t time for friends.</p>
<p>That it’s enough to grab coffee with someone twice a month and have a slightly surface-level conversation about how we’re doing. That the loneliness just comes with the territory. That wanting something deeper is naive. And that the best thing to do about it is get used to it.</p>
<p>But what if we’re getting used to something that’s slowly draining us?</p>
<p>It dawned on me gradually. Two moments I remember quite precisely.</p>
<h2>First: I outgrew some friendships</h2>
<p>It happened at university. Even in high school I could feel that I was better with some people and worse with others, that how much I feel like myself depends a lot on who I’m around. But at university it shifted. With some friends from school I suddenly had less in common, fewer shared values and fewer shared ideas about the life we wanted.</p>
<p>And it kept happening that I’d come home from an evening with them exhausted. Exhausted from pretending I was enjoying it and that I felt seen or understood.</p>
<p>So a process started, of admitting to myself that this was what I felt. That I’m not bad, and neither are they, that people can simply drift apart and it’s nobody’s fault. And it was as if an enormous amount of energy was released the moment I stopped fighting what I felt.</p>
<h2>Second: I lost an entire community</h2>
<p>The second realisation came when I was around 28.</p>
<p>It started when I found a community of people that suited me enormously. It felt like I finally had people who shared my view of the world, my values, my direction. Like I was home.</p>
<p>And so, for these new relationships, I somewhat discarded most of my older ties. I told myself: why maintain the past when this is the real thing. And as you can probably guess, I put everything on one community.</p>
<p>About a year and a half later, after a difficult and complicated relational situation, I left it. It was covid, and I felt rejected by people I had trusted so much. I was at rock bottom and I had no friends.</p>
<p>I remember how hard it was in my relationship with my partner too. I thought that even if we wanted to get married, I’d have nobody to invite. And that image, having nobody to share the hard things with and nobody to celebrate with, completely broke me.</p>
<p>And it was exactly from that lowest point that I set myself a goal. That I would build my community again, from zero. My chosen family. People I feel truly myself with, people I feel seen by and who I can lean on and be leaned on. Relationships that bring me back to what feels alive.</p>
<h2>Why close friendships are so hard to build as an adult</h2>
<p>It was genuinely hard.</p>
<p>Partly because of me. After covid and after what happened with the community, I experienced social anxiety for the first time in my life. I badly wanted to be around people, and when I got there I wanted to cry and hide.</p>
<p>And partly because of everyone else. Plenty of people around thirty already have their friends, whether deep ones or just the ones they’ve always had, and they don’t want that to change. People are chronically busy: they say it would be nice to meet again, and the intention often doesn’t materialise, and messages get buried.</p>
<p>Building a new friendship at a stage when we already have children, work and hobbies is like walking into a big wave. Which makes it all the more precious when two people decide it’s worth the energy.</p>
<p>So it went slowly. I was working from home, the world was coming out of covid, and I was picking myself up along with my mental health.</p>
<p>But I went step by step, event by event. And with every new person I did the work of tuning into myself: how do I feel with this person? What about them inspires me? Is this relationship work, or is it ease?</p>
<p>I wanted to build ease. Until then I’d treated relationships as work, as something where if it isn’t going well I push harder, put in more energy, force it and rebuild it. But I think that’s only half the truth. The other half is listening to what is, and not trying to change it. Listening to my own intuition about who I feel good with, and following it. Not forcing myself into something that doesn’t fit, and trusting what does. Going toward what makes me more alive. And maybe just enjoying friendship. Having it as a source rather than an obligation.</p>
<h2>I decided to be that person</h2>
<p>Somewhere along the way I told myself I’d simply be the person I’d want as a friend.</p>
<p>And that I’d be as intentional about friends and community as I am about my partnership. We invest in a partnership. We consider whether we’re a good fit. We get to know each other. We try to find someone who really suits us.</p>
<p>So why not do exactly that with friends?</p>
<h2>Why we build everything on one relationship</h2>
<p>I don’t think I’m alone in this. Plenty of people over thirty struggle with it.</p>
<p>One reason I think we underrate friendship is that we live in a world that elevates romantic partnership. Romantic films, the pressure to have someone, the wedding, the children. The idea that a partner is the main person who will meet all your needs.</p>
<p>And sure, up to a point that makes sense, a partner is often your closest person. But a lot of those needs, closeness, being held, fun, understanding, inspiration, advice, don’t have to come only from a partner. A friend can meet them too.</p>
<p>That’s my point: don’t build your whole world on one person. I made exactly that mistake, only not with a partner but with a community. I staked everything on one pillar and I know how much it hurts when it falls.</p>
<p>When our needs don’t rest on a single relationship, we have far more stability. When we lose someone, there are still people around us who hold us and remind us who we are.</p>
<h2>Five years later</h2>
<p>So at 28 I set myself this lifelong goal. I’d build friendships where I feel like myself, with people who energise and inspire me. And I’d be proactive about it, invest time, ideas and energy, and put myself in situations where I could meet those people.</p>
<p>And it was a process. Something like planting seeds in your own garden. The process probably never ends, you have to keep tending the plants. But after a year or two you also start harvesting.</p>
<p>And for me it was worth it. Every weed I pulled out, every plant that died, taught me something. And now I have a garden I feel good in. After five years I have a network of friends I feel far better with than in the community I used to belong to.</p>
<p>There’s something strange about how losing something important, having something big collapse, can give you the chance to build something you feel even better in. Something that genuinely fits.</p>
<h2>Do you have your people?</h2>
<p>This is the message I want to pass on. We didn’t get to choose our family. But we do get to choose our friends, they can even be closer to us, they can be our chosen family. And it’s never too late. It just takes action, and honesty about what you feel.</p>
<p>How exactly I built my community, I share in the videos and pieces that follow.</p>
<p>But you can start simply today, with a question: do I have my people? People I can be entirely myself with?</p>
<aside class="blog-cta">
<p class="blog-cta-text">does this resonate? let’s meet.</p>
<a class="btn-whisper" href="/en#first-conversation">book a free intro session</a>
</aside>
`,
    },
    {
      id: 'co-se-da-slibit',
      slug: 'what-can-be-promised',
      title: 'I Don’t Believe You Can Promise Forever. I Got Married Anyway',
      date: '2026-06-28',
      image: '/images/photos/co-se-da-slibit.jpg',
      imageAlt: 'Terezie Alder with her husband',
      excerpt:
        'I don’t believe love can be promised forever. I got married this year anyway. On what can actually be promised, why freedom is part of commitment, and ritual.',
      seoTitle: 'I Don’t Believe You Can Promise Forever',
      seoDescription:
        'I don’t believe love can be promised forever. I got married this year anyway. On what can actually be promised, why freedom is part of commitment, and ritual.',
      body: `
<p class="blog-credit">Photo: Michaela Melenová</p>
<p>We got married this year. Twice, legally and in a ritual.</p>
<p>And I still don’t believe you can promise someone you’ll be with them for life. That neither of you will change, or that you’ll still be here together, when so much of it isn’t in our hands. And even if a promise existed that couldn’t be broken, I wouldn’t want to accept it. I don’t want a relationship as an obligation, without the freedom to choose what we actually want.</p>
<p>So what did I say yes to?</p>
<div class="blog-video"><iframe src="https://www.youtube-nocookie.com/embed/Mknt6gtMPJs?start=7" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
<h2>What can’t be promised</h2>
<p>When two people say yes, they’re saying yes to their current versions. To the situation they’re in now, and to who they are now.</p>
<p>Most of us accept that a relationship can end in death. But it can end other ways too, and much of that isn’t in our hands. Both of us change over time. We can try to stay close, work on the relationship and take care of it, but controlling it fully isn’t possible. People change, and so does what matters to them.</p>
<p>Which is why it seems natural to me that people sometimes separate. If two people, despite genuine effort, reach a point where each wants something different, I don’t think it makes sense to keep walking the same road. His happiness matters to me too. And if our longings lead us in different directions, maybe the kindest thing I can do is not hold on.</p>
<p>Marriage as an objective guarantee is, to me, an illusion we occasionally tell ourselves. No one can promise you they won’t leave. Either because they might suddenly die, or because one day they might want something else.</p>
<h2>What can be promised</h2>
<p>My wedding vow isn’t a promise about specific things or outcomes. I’m not saying I’ll never leave you. I’m saying how I’ll stand in the difficult moments when they come.</p>
<p>I can’t guarantee or predict outcomes. What I can stay true to are principles and values, the things I’ll act from. Our behaviour is in our hands. Which values we choose. How I’ll handle a crisis when it arrives. How I’ll see you and how I’ll listen. What I want to stay truthful to even when everything around us is falling apart.</p>
<p>And those decisions are what makes a relationship. Love is a decision. I don’t think my husband is the only person I could be happy with, or that I’m the only one for him. But in this life I’m choosing him. Freely, and again every day.</p>
<p>From the vow I gave him:</p>
<blockquote>I want to promise you that I’ll live with you in the values close to us both: in truth, in cooperation, in kindness, and in the wish to keep working on myself and on us. I promise to try to understand you and to listen to what you need. I promise to give our relationship time, space and attention, so our love can grow and deepen.</blockquote>
<p>There isn’t a single specific outcome in it. Only what I’ll be guided by when something has to be decided.</p>
<h2>Freedom isn’t a weakness in the promise, it’s what drives it</h2>
<p>This is the sentence people most often hear wrong, so I’ll say it slowly.</p>
<p>As long as I know I could leave, and in a hard moment I still choose to stay, my yes is real. It comes from the heart, not from habit and not from a fear of ending up alone.</p>
<p>Without that freedom I wouldn’t know whether we’re together because we want to be, or because it’s more comfortable than leaving.</p>
<p>It doesn’t mean we question the relationship daily. When you’re with someone, you simply live it together. It means neither of us wants that yes to become a prison or an obligation.</p>
<p>It reminds me of something from meditation practice. Real presence is opening up and loving fully while not clenching around it. Being entirely here, and at the same time knowing that none of it is mine forever. I write more about that distinction in the piece on <a href="/en/blog/myth-of-enlightenment">the myth of enlightenment</a>.</p>
<h2>I’m choosing all of him</h2>
<p>Relationships often begin in infatuation. And in infatuation we don’t quite see the other person, we see our projection. We project that he’ll give us what we feel is missing in ourselves. That he’ll take care of us exactly the way we need. That he’ll be who we want him to be.</p>
<p>What I love now, after five years, is something else. That I know him whole. We’ve gone through the hardest moments of our lives together and the first years were at times very difficult. And that’s exactly why I say yes to him today. I know how he reacts when he’s at the end of his strength. He knows how I behave when I’m frightened and feel unsafe.</p>
<p>I remember saying at our couples retreat that he doesn’t accept all of my parts. And the facilitator answered calmly: “That’s normal. You probably have parts of him you find hard to accept too.” He was right.</p>
<p>Even the parts of him that irritate me and set something off in me are protecting something. Something vulnerable, some old experience, something that matters to him. And they make up the person I love. Without them he wouldn’t be him.</p>
<p>Sometimes we play at unconditional love while accepting the other person only when they’re not causing trouble. Only when they feel good. And the moment they bring something difficult, suddenly it’s too much. So I decided to say yes to his harder parts too. I know them, and I’m still learning to accept them, again and again.</p>
<h2>The promise is also a promise to myself</h2>
<p>One part of that vow wasn’t a promise to him. It was a promise to me.</p>
<p>That even beside him I’ll stay myself. That I’ll stay true to my intuition, my emotions, and what I believe.</p>
<p>It’s easy to get lost in a relationship. To focus so much on what the other person wants and feels that eventually I forget myself.</p>
<p>I believe a relationship that stays healthy over time is made of two whole people. That the depth between them grows out of how connected each of them is to themselves. His gifts have changed me for the better through our relationship, and I know the reverse is true too. But that can only happen while each of us stays connected to ourselves. While we keep asking what we actually feel and need.</p>
<h2>So why hold a ritual at all</h2>
<p>If I don’t believe in any guarantee, why did I get married?</p>
<p>Because a wedding isn’t only a legal contract to me. It’s a ritual. We bind our lives together, consciously, in front of the people close to us. And when we say that intention out loud, in front of others, something happens.</p>
<p>The promise stops taking place only in your head. You live it in your body. It becomes real, and it’s harder to forget afterwards.</p>
<p>And we’re not in it alone. The people who love us were standing around us. They weren’t there only as an audience, they were witnesses. They hold that intention with us. When the hard times come, and they will, the two of us won’t be the only ones who have to remember.</p>
<p>Maybe that’s why rituals have lasted so long. Some decisions a person can carry alone. The hardest ones we carry better when we’re not by ourselves.</p>
<aside class="blog-cta">
<p class="blog-cta-text">does this resonate? let’s meet.</p>
<a class="btn-whisper" href="/en#first-conversation">book a free intro session</a>
</aside>
`,
    },
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
      id: 'pet-let-pratelstvi',
      slug: 'pet-let-pratelstvi',
      title: 'Pět let jsem si budovala přátelství od nuly',
      date: '2026-06-30',
      image: '/images/photos/pet-let-pratelstvi.jpg',
      imageAlt: 'Terezie Alder na louce',
      excerpt:
        'Ve 28 jsem přišla o celou komunitu a neměla komu zavolat. O tom, proč je v dospělosti těžké najít blízké přátele a jak jsem si svoje lidi budovala od nuly.',
      seoTitle: 'Pět let jsem si budovala přátelství od nuly',
      seoDescription:
        'Ve 28 jsem přišla o celou komunitu a neměla komu zavolat. O tom, proč je v dospělosti těžké najít blízké přátele a jak jsem si svoje lidi budovala od nuly.',
      body: `
<p>Před pěti lety, uprostřed covidu, jsem přišla o komunitu, do které jsem patřila. Bylo mi 28 a prožívala jsem jedno z nejnáročnějších období svého života.</p>
<p>Pamatuju si ten moment, kdy mi došlo: nemám komu zavolat.</p>
<p>Dnes už vím, že to tak být nemusí.</p>
<div class="blog-video"><iframe src="https://www.youtube-nocookie.com/embed/Wj0ouhDiiwE" title="Pět let jsem budovala přátelství od nuly" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
<p>Celé to téma vyprávím i ve videu. Text níž jde na některých místech dál než ono.</p>
<h2>Zvykli jsme si, že to tak je</h2>
<p>Přijde mi, že spousta lidí, které potkávám, tak nějak přijala za normální, že v dospělosti přijdeme o hluboká přátelství. Že v záplavě povinností jako práce, hypotéka a rodina na přátele prostě není čas.</p>
<p>Že stačí, když si zajdeme dvakrát do měsíce s kamarádem na kafe a máme povrchnější konverzaci o tom, jak se máme. Že ten pocit osamělosti k tomu prostě patří. Že chtít něco hlubšího je naivní. A že nejlepší, co s tím můžeme udělat, je zvyknout si.</p>
<p>Ale co když se zvykáme na něco, co nás pomalu vysává?</p>
<p>Mně tohle docházelo postupně. Dva momenty si pamatuju dost konkrétně.</p>
<h2>Poprvé: vyrostla jsem z některých přátelství</h2>
<p>Stalo se to během vejšky. Už na střední jsem cítila, že je mi s některými lidmi líp a s jinými míň, že to, jak moc se cítím sama sebou, hodně záleží i na lidech kolem mě. Ale na vejšce se to posunulo. S některými kamarádkami ze střední jsem najednou měla méně společného, méně společných hodnot i představ o tom, jaký život chceme žít.</p>
<p>A opakovaně se mi stávalo, že jsem se vracela z večera s nimi vyčerpaná. Vyčerpaná snahou se přetvařovat, že je mi s nimi dobře a že se cítím viděná nebo pochopená.</p>
<p>Tak pro mě začal proces přiznávání si, že tohle cítím. Že nejsem špatná já, ani oni, že se lidi prostě můžou odcizit a není to ničí chyba. A jako kdyby se ve mně uvolnilo hrozně moc energie ve chvíli, kdy jsem se přestala stavět proti tomu, co cítím.</p>
<h2>Podruhé: přišla jsem o celou komunitu</h2>
<p>Druhé uvědomění přišlo, když mi bylo zhruba 28.</p>
<p>Začalo to tak, že jsem našla komunitu lidí, která mi hrozně seděla. Přišlo mi, že konečně mám lidi, kteří mají podobný pohled na svět, hodnoty a směr. Že jsem doma.</p>
<p>A tak jsem pro tyhle nové vztahy tak trochu zahodila většinu vazeb z dřívějška. Říkala jsem si: proč udržovat to minulé, když tohle je to ono, to opravdové. A jak už asi tušíte, vsadila jsem všechno na jednu komunitu.</p>
<p>Zhruba po roce a půl jsem po náročné a komplikované vztahové situaci komunitu opustila. Byl covid a já se cítila odmítnutá lidmi, kterým jsem tolik věřila. Byla jsem na dně a zároveň neměla žádné kamarády.</p>
<p>Pamatuju si, jak náročné to bylo i ve vztahu s partnerem. Říkala jsem si, že i kdybychom se třeba chtěli vzít, neměla bych na svatbu koho pozvat. A ten obraz, že nemám s kým sdílet to náročné a nemám s kým slavit, mě úplně dostal.</p>
<p>A přesně z tohohle bodu svého největšího dna jsem si vytyčila cíl. Že si znovu, od nuly, vybuduju svoji komunitu. Svoji chosen family. Lidi, se kterými se cítím opravdu sama sebou, se kterými se budu cítit viděná a se kterými si budeme vzájemně oporou. Vztahy, které mě budou vracet k tomu, co je pro mě živé.</p>
<h2>Proč je v dospělosti tak těžké najít blízké přátele</h2>
<p>Bylo to fakt těžký.</p>
<p>Jednak pro mě samotnou. Po covidu a po té situaci s komunitou jsem poprvé v životě zažila sociální úzkost. Hrozně jsem toužila potkávat lidi, ale když jsem mezi ně přišla, chtělo se mi brečet a někam se schovat.</p>
<p>A pak tu bylo okolí. Spousta lidí kolem třicítky už svoje přátele má, ať už opravdu hluboké, nebo prostě ty odjakživa, a nechce to měnit. Lidi jsou chronicky busy: řeknou, že by bylo fajn se zase vidět, ale ten úmysl se často nezhmotní a zprávy zapadnou.</p>
<p>Budovat nové přátelství v období, kdy už máme děti, práci a koníčky, je jako jít proti velké vlně. A o to vzácnější je, když se najdou dva lidi, kterým to za tu energii stojí.</p>
<p>Takže to šlo opravdu pomalu. Pracovala jsem na home office, svět vycházel z covidu a já se sbírala i se svým mentálním zdravím.</p>
<p>Ale šla jsem krok za krokem, akci za akcí. A u každého nového člověka jsem si dala tu práci naladit se sama na sebe: Jak se s tímhle člověkem cítím? Čím mě inspiruje? Je pro mě ten vztah práce, nebo lehkost?</p>
<p>Chtěla jsem budovat lehkost. Do té doby jsem vztahy brala tak, že jsou práce, že když něco nejde, přitlačím, dám do toho víc energie, prostě to zlomím a postavím znovu. Ale myslím, že to je jen polovina pravdy. Ta druhá polovina je naslouchat tomu, co je, a nesnažit se to změnit. Naslouchat vnitřní intuici, s kým se cítím dobře, a následovat to. Nesnažit se nacpat do něčeho, co mi nesedí, a naopak důvěřovat tomu, co mi sedí. Jít za tím, co mě dělá víc živou. A možná si přátelství jen užít. Mít z něj zdroj, a ne povinnost.</p>
<h2>Rozhodla jsem se být ten člověk</h2>
<p>Někde na té cestě jsem si řekla, že prostě budu ten člověk, se kterým bych sama chtěla být kamarádka.</p>
<p>A že budu intentional ohledně kamarádů a své komunity stejně, jako jsem intentional ohledně svého partnerství. Do partnerství investujeme. Zvažujeme, jestli jsme dobrý fit. Poznáváme se. Snažíme se najít někoho, kdo nám opravdu sedí.</p>
<p>Tak proč přesně tohle nedělat i u přátel?</p>
<h2>Proč stavíme všechno na partnerství</h2>
<p>Mám pocit, že v tomhle nejsem sama, že s tím spousta lidí od třiceti výš struggluje.</p>
<p>Jedna z věcí, proč si myslím, že přátelství podceňujeme, je, že žijeme ve světě, který hodně vyzdvihuje partnerství. Romantické filmy, tlak na to někoho mít, svatba, děti a tak dál. Že partner je ten hlavní, který vám naplní všechny potřeby.</p>
<p>A jasně, do určité míry to dává smysl, partner je často váš nejbližší člověk. Ale spoustu těch potřeb, blízkost, obejmutí, zábavu, pochopení, inspiraci nebo radu, vám nemusí dát jen partner. Může vám je dát i kamarád.</p>
<p>A o tohle mi jde: nestavět celý svůj svět na jednom člověku. Já přesně tuhle chybu udělala, jen ne s partnerem, ale s komunitou. Vsadila jsem všechno na jeden pilíř a vím, jak to bolí, když spadne.</p>
<p>Když naše potřeby nesedí jen na jednom vztahu, máme daleko větší stabilitu. Ve chvíli, kdy o někoho přijdeme, pořád kolem sebe máme lidi, kteří nás podrží a připomenou nám, kdo jsme.</p>
<h2>Po pěti letech</h2>
<p>Takže v 28 letech jsem si vytyčila tenhle celoživotní cíl. Budu budovat přátelství, ve kterých se cítím sama sebou. S lidmi, kteří mě nabíjejí a inspirují. A budu v tom proaktivní, budu do toho investovat čas, nápady a energii a budu se dostávat do situací, kde můžu tyhle svoje lidi potkat.</p>
<p>A byl to proces. Něco jako sázet semínka ve své zahradě. Ten proces asi nikdy neskončí, furt musíte ty rostlinky opečovávat. Ale zároveň po roce dvou už i sklízíte plody.</p>
<p>A za mě to stojí za to. Každý plevel, který jsem vytrhla, každá rostlinka, co umřela, mě zase něco naučila. A teď tu mám zahradu, ve které se cítím dobře. Po pěti letech mám vybudovanou síť kamarádů, se kterými se cítím daleko líp než v komunitě, jejíž jsem byla součástí předtím.</p>
<p>Někdy je zvláštní, že když přijdeme o něco, co je pro nás důležité, a něco velkého se zboří, dá nám to možnost vybudovat něco, v čem se cítíme ještě líp. Něco, co nám doopravdy sedí.</p>
<h2>Máš kolem sebe svoje lidi?</h2>
<p>Tohle je poselství, které chci šířit dál. Rodinu jsme si vybrat nemohli. Ale svoje přátele si vybrat můžeme, můžou nám být dokonce i bližší, můžou být naše chosen family. A nikdy na to není příliš pozdě. Jen to vyžaduje aktivitu a pravdivost k tomu, co cítíte.</p>
<p>Jak konkrétně jsem si svoji komunitu vybudovala já, sdílím v dalších videích a textech.</p>
<p>Ale dnes můžeš začít jednoduše. Otázkou: mám kolem sebe svoje lidi? Lidi, se kterými můžu být opravdu sám sebou?</p>
<aside class="blog-cta">
<p class="blog-cta-text">rezonuje to v tobě? pojďme se potkat.</p>
<a class="btn-whisper" href="/#first-conversation">rezervovat úvodní sezení zdarma</a>
</aside>
`,
    },
    {
      id: 'co-se-da-slibit',
      slug: 'co-se-da-slibit',
      title: 'Nevěřím, že jde slíbit navždy. Přesto jsem se vdala',
      date: '2026-06-28',
      image: '/images/photos/co-se-da-slibit.jpg',
      imageAlt: 'Terezie Alder se svým mužem',
      excerpt:
        'Nevěřím, že jde slíbit láska navždy. Přesto jsem se letos vdala. O tom, co ve vztahu slíbit jde, proč je svoboda odejít součástí závazku a proč děláme rituály.',
      seoTitle: 'Nevěřím, že jde slíbit navždy. Přesto jsem se vdala',
      seoDescription:
        'Nevěřím, že jde slíbit láska navždy. Přesto jsem se letos vdala. O tom, co ve vztahu slíbit jde, proč je svoboda odejít součástí závazku a proč děláme rituály.',
      body: `
<p class="blog-credit">Foto: Michaela Melenová</p>
<p>Letos jsme se vzali. Dvakrát, legálně i rituálně.</p>
<p>A přesto nevěřím, že se dá někomu slíbit, že s ním budeme celý život. Že se nezměníme nebo že tu spolu budeme navždy, když je tolik věcí, které nemáme v rukou. A i kdyby existoval slib, který nejde porušit, já bych ho nechtěla přijmout. Nechci vztah jako povinnost, bez svobody rozhodnout se, co doopravdy chceme.</p>
<p>Tak čemu jsem vlastně řekla ano?</p>
<div class="blog-video"><iframe src="https://www.youtube-nocookie.com/embed/Mknt6gtMPJs?start=7" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
<h2>Co slíbit nejde</h2>
<p>Když si dva lidé řeknou ano, říkají ano svým současným verzím. Té situaci, ve které teď jsou, a tomu, kým teď jsou.</p>
<p>Většina z nás přijímá, že vztah může skončit smrtí. Ale on může skončit i jinak, a hodně z toho nemáme v rukou. Oba se totiž v čase měníme. Můžeme se snažit zůstat blízko, pracovat na vztahu a pečovat o něj, ale mít to plně pod kontrolou nejde. Lidé se mění a mění se i to, co je pro ně důležité.</p>
<p>Proto mi přijde přirozené, že se někdy lidé rozejdou. Když dva i přes všechnu snahu dojdou do bodu, kdy každý chce něco jiného, nemá podle mě smysl jít spolu dál. Záleží mi totiž i na jeho štěstí. A pokud nás naše touhy vedou každého jinam, možná to nejlaskavější, co můžu udělat, je nedržet ho.</p>
<p>Svatba jako objektivní záruka je pro mě iluze, kterou si občas namlouváme. Nikdo nám nemůže slíbit, že neodejde. Ať proto, že náhle zemře, nebo proto, že jednou bude chtít jinam.</p>
<h2>Co slíbit jde</h2>
<p>Můj svatební slib není slib ke konkrétním věcem ani k výsledku. Neříkám „nikdy tě neopustím“. Říkám, jak budu stát v těch náročných chvílích, které přijdou.</p>
<p>Výsledek zaručit ani předpovědět neumím. Ale to, v čem pravdivá zůstat můžu, jsou principy a hodnoty, podle kterých se zachovám. V rukou máme svoje chování. To, pro jaké hodnoty se rozhodujeme. Jak budu řešit krizi, až přijde. Jak tě budu vidět a jak ti budu naslouchat. Čemu chci zůstat pravdivá, i když se všechno kolem bude bortit.</p>
<p>A přesně tahle rozhodnutí podle mě tvoří vztah. Láska je rozhodnutí. Nemyslím si, že můj muž je ten jediný, s kým bych byla šťastná. Ani že já jsem ta jediná pro něj. Ale v tomhle životě se rozhoduju pro něj. Svobodně a každý den znovu.</p>
<p>Ze slibu, který jsem mu dala:</p>
<blockquote>Chci ti slíbit, že s tebou budu žít v hodnotách, které jsou nám oběma blízké, v pravdě, spolupráci, laskavosti a v touze na sobě i na našem vztahu pracovat. Slibuji, že se ti budu snažit porozumět a naslouchat tvým potřebám. Slibuji, že budu našemu vztahu dávat čas, prostor a pozornost, aby naše láska mohla růst a prohlubovat se.</blockquote>
<p>Není tam jediný konkrétní výsledek. Jen to, čím se budu řídit, až bude potřeba se rozhodnout.</p>
<h2>Svoboda není slabina slibu, je to jeho motor</h2>
<p>Tohle je věta, kterou lidé slyší nejčastěji špatně, tak ji řeknu pomalu.</p>
<p>Dokud vím, že odejít můžu, a přesto si v těžké chvíli vybírám zůstat, je moje ano skutečné. Jde ze srdce, ne ze zvyku a ne ze strachu, že zůstanu sama.</p>
<p>Kdyby ta svoboda nebyla, nevěděla bych, jestli jsme spolu proto, že to chceme, nebo proto, že je to pohodlnější než odejít.</p>
<p>Neznamená to, že vztah každý den zpochybňujeme. Když s někým jsme, je přirozené, že to spolu prostě žijeme. Znamená to, že ani jeden z nás nechce, aby se to ano stalo vězením nebo povinností.</p>
<p>Připomíná mi to něco z meditační praxe. Opravdová přítomnost je otevřít se a milovat naplno, a zároveň to nesvírat. Být v tom celá, a přitom vědět, že mi to navždy nepatří. O tomhle rozlišení píšu víc v textu o <a href="/blog/mytus-osviceni">mýtu osvícení</a>.</p>
<h2>Vybírám si ho celého</h2>
<p>Vztahy často začínají zamilovaností. A v zamilovanosti nevidíme úplně toho druhého, spíš svoji projekci. Promítáme si do něj, že nám dá to, co nám samotným chybí. Že se o nás postará přesně tak, jak potřebujeme. Že bude takový, jakého ho chceme mít.</p>
<p>Co mám ráda teď, po pěti letech, je něco jiného. Že ho znám celého. Prošli jsme spolu nejnáročnějšími chvílemi našich životů a první roky byly místy hodně těžké. A právě proto mu dneska říkám ano. Vím, jak reaguje, když je na pokraji sil. On ví, jak se chovám, když se cítím vyděšená a mám pocit, že jsem v nebezpečí.</p>
<p>Vzpomínám si, jak jsem na našem vztahovém retreatu řekla, že nepřijímá všechny moje části. A facilitátor klidně odpověděl: „To je normální. Ty máš nejspíš taky části na něm, které je pro tebe těžké přijmout.“ Měl pravdu.</p>
<p>I ty jeho části, co mě štvou a spouštějí ve mně reakci, něco chrání. Něco zranitelného, nějakou starou zkušenost, něco, co je pro něj důležité. A tvoří toho člověka, kterého mám ráda. Bez nich by nebyl on.</p>
<p>Někdy si hrajeme na bezpodmínečnou lásku, ale přijímáme druhého jen tehdy, když nedělá problémy. Když má hezké pocity. A jakmile přinese něco náročného, najednou je toho moc. Tak jsem se rozhodla říkat ano i těm jeho těžším částem. Znám je a pořád se je učím přijímat, zas a znova.</p>
<h2>Slib je i slib sobě</h2>
<p>Jedna část toho slibu nebyla slibem jemu. Byla slibem mně.</p>
<p>Že i po jeho boku zůstanu sama sebou. Že zůstanu pravdivá svojí intuici, svým emocím a tomu, čemu věřím.</p>
<p>Ve vztahu je snadné se ztratit. Mít tak velký fokus na to, co chce a cítí ten druhý, že na sebe nakonec zapomenu.</p>
<p>Věřím, že dlouhodobě zdravý vztah tvoří dva celí lidé. Že hloubka mezi nimi vyrůstá z toho, jak je každý z nich spojený sám se sebou. Jeho dary mě přes náš vztah změnily k lepšímu a vím, že obráceně to platí taky. Ale to se může stát jen tehdy, když každý z nás zůstává spojený sám se sebou. Když se nepřestáváme ptát, co doopravdy cítíme a co potřebujeme.</p>
<h2>Proč tedy vůbec rituál</h2>
<p>Když na žádnou záruku nevěřím, proč jsem se vdávala?</p>
<p>Protože svatba pro mě není jen legální smlouva. Je to rituál. Vědomě před svými blízkými svážeme své životy. A když ten úmysl vyslovíme nahlas, před ostatními, něco se tím stane.</p>
<p>Slib se přestane odehrávat jen v hlavě. Prožiješ ho v těle. Stane se skutečným a je těžší na něj potom zapomenout.</p>
<p>A nejsme v tom sami. Kolem nás stáli lidé, kteří nás milují. Nebyli tam jen jako diváci, byli svědci. Drží ten úmysl s námi. Až přijdou těžké chvíle, a ony přijdou, nebudeme si to muset pamatovat jen my dva.</p>
<p>Možná právě proto rituály existují tak dlouho. Některá rozhodnutí unese člověk sám. To nejtěžší uneseme líp, když v tom nejsme sami.</p>
<aside class="blog-cta">
<p class="blog-cta-text">rezonuje to v tobě? pojďme se potkat.</p>
<a class="btn-whisper" href="/#first-conversation">rezervovat úvodní sezení zdarma</a>
</aside>
`,
    },
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
