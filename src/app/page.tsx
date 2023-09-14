import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";


export default function MainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24  bg-zinc-200 font-serif">
      <NavBar />
      <Home/>
    </main>
  );
}
