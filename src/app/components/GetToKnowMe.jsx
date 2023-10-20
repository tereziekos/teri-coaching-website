import React from "react";
import Image from "next/image";

const GetToKnowMe = () => {
  return (
    <section id="get-to-know-me" className="px-4 md:px-11 mt-10 md:mt-36">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-left text-3xl mb-12">About Me</h1>
          <p className="text-left text-base antialiased mb-9">
            I have been fascinated by interpersonal relationships since I was a child. Over the years, I have done inner work that has allowed me to form authentic connections with both myself and others.
          </p>
          <h2 className="text-left text-xl mb-9">Here are a few things about me:</h2>
          <ul className="text-left text-base antialiased mb-11 list-disc pl-5">
            <li>I have overcome unhealthy conditioning from my childhood and transformed my attachment style from anxious to secure.</li>
            <li>I have learned how to be vulnerable and establish deep connections with others, as well as effectively communicate my needs and boundaries.</li>
            <li>I approach people with a good faith principle and have significantly reduced my anxiety through various interventions such as mindfulness and cognitive behavioral therapy.</li>
            <li>I keep my identity small.</li>
            <li>I enjoy challenging myself by stepping into the unknown. For example, I taught myself public speaking by performing at open mics and doing stand-up comedy. I also regularly attend intensive meditation retreats and even take cold baths (I can explain why!).</li>
            <li>My passion lies in helping others from a place of love and contributing to positive change in the world. I consider myself a rationalist and am part of the Effective Altruism movement.</li>
          </ul>
          <h2 className="text-left text-xl mb-9">My diverse professional background allows me to see things from multiple perspectives.</h2>
          <p className="text-left text-base antialiased mb-9">
            Currently, I work as a junior web developer.
          </p>
          <p className="text-left text-base antialiased mb-9">
            In the past, I focused on movement-building in Czechia as a grantee on a Community Building Grant from the Center for Effective Altruism. I also worked on a mental health project for Effective Altruists, which was funded by the EA Infrastructure Fund. I have experience leading teams, gained through my role as the head of communication in an influential Czech NGO that focuses on participation. Additionally, I hold a master's degree in law from Charles University. Throughout my studies, I was actively involved in Czech journalism as the editor in chief of a student media website and as an editor specializing in interviews for publications such as e15 and Heroine.
          </p>
        </div>
        <div className="flex items-start justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/images/IMG_7692.jpg"
            alt="ProfileImage"
            width={500}
            height={714}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GetToKnowMe;

