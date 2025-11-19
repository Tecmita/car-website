import { useState } from "react";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  let slides = "";

  return (
    <div className="overflow-x-hidden bg-[#0A0A0B] min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
