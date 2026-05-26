import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero_UP";
import About from "./components/About";
import TechStack from "./components/TechStack";
import CaseStudies from "./components/CaseStudies";
import Metrics from "./components/Metrics";
import ResumeLinks from "./components/ResumeLinks";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <CaseStudies />
        <Metrics />
        <ResumeLinks />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} — IT Support Specialist & Software Engineer Trainee.
      </footer>
    </>
  );
}

export default App;
