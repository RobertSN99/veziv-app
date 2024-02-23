import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const handleClick = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section id="hero" className="h-screen min-h-screen bgHero">
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-5 text-white">
        <h1 className="text-7xl font-title">
          Hi, my name is <span>Robert</span>
        </h1>
        <p className="w-1/2 m-24 text-xl indent-10">
          I'm a <span>web developer</span> passionate about crafting elegant and user-friendly websites, with expertise
          in front-end development technologies. My goal is to create seamless digital experiences that leave a lasting
          impression.
        </p>
        <button
          className="absolute flex items-center justify-center gap-2 px-10 py-3 border-2 rounded-full animate-bounce bottom-10 primarybtn"
          onClick={handleClick}
        >
          View projects <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;
