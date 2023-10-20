import React from "react";
import Image from "next/image";

const MyApproach = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-11 mt-12 md:mt-36">
      <div className="w-full">
        <h1 className="text-left text-3xl mb-12">My Approach</h1>
        <p className="text-left text-base antialiased mb-9">
          I would be honored to guide you through your exploration or change. I
          think everybody is different (mind, history, ways of coping) so we
          would try a bunch of things and see what works. We would want to
          really see what works for you as I have a result-oriented approach.
        </p>
        <p className="text-left text-base antialiased mb-9">
          I will not tell you what you should do as you have the most
          information about your life, but I will provide you with information
          on tools and new perspectives that I think would help you.
        </p>
        <h2 className="text-left text-xl mb-9">The theories I derive from:</h2>
        <ul className="text-left text-base antialiased mb-11 list-disc">
          <li>Internal Family System</li>
          <li>Motivational Interviewing</li>
          <li>Behavioral change</li>
          <li>Cognitive Behavioral Theory</li>
          <li>Ideal Parental Figure Protocol / Inner Child Work</li>
          <li>Mindfulness (Shinzen Young)</li>
          <li>Nonviolent Communication</li>
          <li>Tantra</li>
        </ul>
        <h2 className="text-left text-xl mb-9">
          Practices I immerse myself in:
        </h2>
        <ul className="text-left text-base antialiased mb-11 list-disc">
          <li>Meditation</li>
          <li>Embodiment (I practice Contact Improvisation)</li>
          <li>Holistic Rituals</li>
          <li>Breath Work</li>
          <li>Journaling</li>
          <li>Weight lifting</li>
        </ul>
        <h2 className="text-left text-xl mb-9">
          Things I often help my clients:
        </h2>
        <ul className="text-left text-base antialiased mb-11 list-disc">
          <li>Setting intentions and working with motivation</li>
          <li>Relationships and dating, attachment issues</li>
          <li>Emotions, needs, and boundaries</li>
          <li>Self-acceptance and self-worth</li>
        </ul>
        <h2 className="text-left text-xl mb-9">Coaching related education:</h2>
        <ul className="text-left text-base antialiased mb-11 list-disc">
          <li>Mindfulness teacher (Coach Lv 2) of Unified Mindfulness</li>
          <li>Course in Motivational Interviewing from Tucker Peck</li>
          <li>1 year long self-experienced group therapy</li>
          <li>Course in Nonviolent Communication</li>
          <li>CBT Cognitive Behavior Therapy Life Coaching Certification</li>
        </ul>
      </div>
      <div className="flex items-start justify-center md:justify-start mt-6 md:mt-0">
        <Image
          src="/images/action_photo.jpeg"
          alt="Sysifof's work"
          width={550}
          height={750}
          className="rounded-lg w-full md:w-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default MyApproach;
