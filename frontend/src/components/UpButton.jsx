import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const UpButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100 && !isScrolled) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`${
        isScrolled ? "fixed" : "hidden"
      } z-31 bottom-5 right-10 text-white border-2 p-3 text-lg opacity-40`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  );
};

export default UpButton;
