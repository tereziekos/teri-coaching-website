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
          className={` text-3xl antialiased leading-[49.32px] text-left max-w-[450px]`}
        >
          What Others Say
        </h1>
      </div>
    </div>
    <Carousel autoplay autoplayInterval={5000} wrapAround={true} cellAlign='center' >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
