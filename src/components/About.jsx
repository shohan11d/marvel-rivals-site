import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

/* function About() {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h1 className="hero-heading text-black">
          Discover the worlds largest shared Adventure
        </h1>
        <img
          src="img/about.webp"
          alt="Background"
          className="absolute left-0 top-0 w-full h-[530px] object-cover"
        />
        <div className="about-subtext">
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
    </div>
  );
} */

function About() {
  return (
    <div id="about" className="min-h-screen w-screen py-20 ">
      <h1 className="font-zentry text-7xl md:text-8xl  mx-6  lg:mx-60 text-center text-black mb-12">
        Discover the worlds largest shared Adventure
      </h1>
      <img
        src="img/about.webp"
        alt="Background"
        className="h-[530px] md:w-[530px] rounded-2xl object-cover mx-auto"
      />
    </div>
  );
}

export default About;
