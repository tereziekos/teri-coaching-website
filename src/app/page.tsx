import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import GetToKnowMe from "./components/GetToKnowMe";


export default function MainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5  bg-zinc-200 font-mono text-zinc-900	">
      <NavBar />
      <Home/>
      <GetToKnowMe/>
    </main>
  );
}
