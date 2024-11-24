"use client"

// import Image from "next/image";
import Hero from "./components/Hero";
// import Nevbar from "./components/Nevbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import AOS, { refresh } from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
useEffect (() => {
  AOS.init({
    easing: "ease-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "bottom-bottom",
    offset: 160,
  });
  AOS.refresh();
}, []);

  return (
   <main>
      <Hero />
      <Project />
      <Skills />
      <Contact />
       
   </main>
  );
}
