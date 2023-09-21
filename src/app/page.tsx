import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import GetToKnowMe from "./components/GetToKnowMe";
import SocialFollow from "./components/SocialFollow";
import MyApproach from "./components/MyApproach";


export default function MainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5  bg-zinc-200 font-mono text-zinc-900	">
      <NavBar />
      <Home/>
      <MyApproach/>
      <GetToKnowMe/>
      <SocialFollow/>
    </main>
  );
}
