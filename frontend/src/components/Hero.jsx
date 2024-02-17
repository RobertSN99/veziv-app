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
    <section id="hero" className="bg h-screen">
      <div className="h-full w-full text-white flex flex-col items-center justify-center gap-5 relative">
        <h1 className="text-7xl font-title">Hi, my name is <span>Robert</span></h1>
        <p className="text-xl m-24 w-1/2 indent-10">
          I'm a <span>web developer</span> passionate about crafting elegant and
          user-friendly websites, with expertise in front-end development
          technologies. My goal is to create seamless digital experiences that
          leave a lasting impression.
        </p>
        <button
          className="absolute bottom-10 flex items-center justify-center gap-2 rounded-full border-2 px-10 py-3 hbhover"
          onClick={handleClick}
        >
          View projects <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;
