import { BrowserRouter } from "react-router-dom";
import About from "../app/components/About";
import Tech from "../app/components/Tech";
import Contact from "../app/components/Contact";
import Experience from "../app/components/Experience";
import Feedback from "../app/components/Feedbacks";
import Hero from "../app/components/Hero";
import Navbar from "../app/components/Navbar";
import Works from "../app/components/Works";
import StartsCanvas from "./components/StartsCanvas";

import "@/app/globals.css";

const Page = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover-bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works /> {/*modify*/}
        {/*<Feedback />*/} {/*modify*/}
        <div className="relative z-0">
          <Contact />
          <StartsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Page;
