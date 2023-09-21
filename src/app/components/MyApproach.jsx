import React from "react";
import Image from "next/image";
import ActionImage from "/Users/terezka/work/website-Teri/teri_app/src/app/images/DSC02540 copy.jpeg";
import Typography from '@mui/material/Typography';



const MyApproach = () => {
    return (

        <div className="grid grid-cols-2 p-11 mt-36">
        <div className="pr-15 w-6/7">
          <h1 className="text-left text-2xl mb-12">My Approach</h1>
          <p className="text-left text-base antialiased mb-9 pr-36 ">
            I would be honored to guide you through your exploration or change. I
            think everybody is different (mind, history, ways of coping) so we
            would try a bunch of things and see what works. We would want to really see what works for you as I have a
            result-oriented approach.
          </p>
          <p className="text-left text-base antialiased mb-9 pr-36" >
            I will not tell you what you should do as
            you have the most information about your life, but I will provide you
            with information on tools and new perspectives that I think would help
            you.
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
        <div className="row-span-full flex items-start">
          <Image
            src={ActionImage}
            alt="Sysifof's work"
            width={700}
            height={1000}
            class=" rounded-lg"
          />
        </div>
      </div>
   
    )

}

export default MyApproach;