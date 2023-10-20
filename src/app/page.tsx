import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import GetToKnowMe from "./components/GetToKnowMe";
import SocialFollow from "./components/SocialFollow";
import MyApproach from "./components/MyApproach";
import Testimonials from "./components/Testimonials";

export default function MainPage() {
  return (
    <main className="flex flex-col items-center p-5 bg-zinc-200 font-mono text-zinc-900 min-h-screen w-full">
      <NavBar />
      <Home />
      <section id="my-approach" className="w-full">
        <div className="bg-primary w-full overflow-hidden">
          <div className="container mx-auto py-6">
          <div className="w-full mx-auto flex flex-col md:flex-col space-y-1 md:space-y-0">
              <div className="flex-1">
                <Testimonials />
              </div>
              <div className="flex-1">
                <MyApproach />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetToKnowMe />
      <SocialFollow />
    </main>
  );
}
