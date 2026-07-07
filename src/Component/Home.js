import React from "react";
import Herosection from "./Herosection";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Project />
      <Contact />
    </>
  );
}
