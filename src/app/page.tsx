"use client";

import dynamic from "next/dynamic";
import "@/app/globals.css";

const Hero = dynamic(() => import("../app/components/Hero"), { ssr: false });
const Experience = dynamic(() => import("../app/components/Experience"), {
  ssr: false,
});
const Tech = dynamic(() => import("../app/components/Tech"), { ssr: false });
const Contact = dynamic(() => import("../app/components/Contact"), {
  ssr: false,
});
const Works = dynamic(() => import("../app/components/Works"), { ssr: false });
const About = dynamic(() => import("../app/components/About"), { ssr: false });
const Navbar = dynamic(() => import("../app/components/Navbar"), {
  ssr: false,
});
const StartsCanvas = dynamic(() => import("./components/canvas/Stars"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StartsCanvas />
      </div>
    </div>
  );
};

export default Page;
