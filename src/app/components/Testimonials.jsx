"use client";
import FeedbackCard from "./FeedbackCard";
import Carousel from "nuka-carousel";

const feedback = [
  {
    id: "feedback-1",
    content: `During the ten or so coaching calls I have had with Terezie I have been introduced to questions and concepts that have helped me to better recognise what I value, and how to resolve internal conflict in order to make better decisions. During our calls, we have touched on many topics - for example, career, relationships, stress, values and boundaries - from a holistic viewpoint, which I appreciate. I have also felt allowed to and empowered by approaching solutions in my own way.`,
    name: "Simon Holm",
    title: "Information Risk Management Associate",
  },
  {
    id: "feedback-2",
    content: `I worked with Terezie over a few sessions on emotional blockers I had around relationships and work. I deeply appreciated how Terezie always took me seriously. She had a wide array of frameworks that we experimented with until we found what works. A year later, I'd say 95% of my relationship issues and 50% of my work issues are gone, and I attribute around a third of that progress to Terezie.`,
    name: "Anonymous",
    title: "",
  },
  {
    id: "feedback-3",
    content: `Here's what I told my friend when she asked me about finding a coach earlier this year: "I would recommend Terezie. She seems really talented and has this incredible ability to dig into personal-emotional issues. She helped me gain a lot more clarity within the session, but also provided me with specific tools that I could use on my own. Really helpful!`,
    name: "Lukas",
    title: "Startup Founder",
  },
  {
    id: "feedback-4",
    content: `The thing I like most is that Terezie's sessions are very actionable, and she'll send a follow-up email with what we discussed and actions from the session. She has a good understanding effective altruism and the CFAR techniques which makes our conversations a lot easier. Because our sessions feel safe and I never feel judged I can be more open and honest about problems and challenges. I highly recommend Terezie as a coach.`,
    name: "Johan",
    title: "",
  },
  {
    id: "feedback-5",
    content: `Terezie is a great listener and knows which questions to ask to help you make progress on the issues in your life. Rather than imposing her way of solving problems she empowers you to tackle them your way (which makes all the difference for me in terms of long-term motivation to follow through). I value that she can recommend techniques from both the rationality and more holistic approaches. Terezie has helped me make a big, at the time scary, and in retrospect very positive change in my career. I feel very comfortable sharing my most private thoughts with her and I’m very thankful for the continuity she provides in our sessions by reminding me of parallels between current topics and what we worked on in the past.`,
    name: "Philipp Hummel",
    title: "",
  },
  {
    id: "feedback-6",
    content: `I am very grateful that Terezie has been my mindfulness coach for several reasons. She was knowledgeable, always came well prepared to the sessions, having researched topics tailored to my needs. Terezie was open-minded, understood that everyone works differently and suggested different strategies with me in mind. She was great at following up and holding me accountable. Furthermore, she was eager to learn more herself and researched all the questions I was throwing, whenever she didn't know directly the answer. Her coaching made me progress very fast in meditation and I learnt techniques and got insights to my mind and my life that are very valuable for me until today, even if years have passed from the time she was coaching me.`,
    name: "Tereza",
    title: "Enngineering Manager",
  },
  {
    id: "feedback-7",
    content: `I have been working with Terezie for the last year. I have been delighted with the results. The most valuable outcomes I got are:
    - Better prioritization for personal growth
    - x2-x3 more time spent on valuable work outside of work hours
    - Decided on a career change
    You should definitely try coaching, at least for a few sessions, if you wonder.`,
    name: "Maxime Riche",
    title: "Research Engineer",
  },
  {
    id: "feedback-8",
    content: `Over the past ~16 months, Terezie has been coaching me in various areas of my life. From the very beginning I have been very happy with the coaching I’ve received. I really enjoy our coaching relationship and have always felt comfortable, relaxed, and supported. She is highly attentive to my needs and goals, and is proactive in helping me make progress. Her coaching style strikes a balance between analytical and intuitive that suits me very well. She offers a very flexible coaching commitment and is always accommodating of my busy lifestyle. I’m hugely grateful to Terezie for the great commitment and joy with which she continues to coach me.`,
    name: "Taylor Jones",
    title: "Freelance Graphic Designer",
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-3 flex justify-center items-center flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="w-full md:mt-0 mt-6">
        <h1
          className={`sm:text-3xl text-2xl antialiased leading-[49.32px] text-left max-w-[450px] md:text-left text-center`}
        >
          What Others Say
        </h1>
      </div>
    </div>
    <Carousel autoplay autoplayInterval={5000} wrapAround={true} cellAlign='center' className="w-full md:w-auto">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
