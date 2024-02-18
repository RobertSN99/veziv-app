import React from "react";
import { FaArrowUp } from "react-icons/fa";

const UpButton = ({isScrolled}) => {

  const handleClick = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <button
      className={`${
        isScrolled ? "upbutton scrolled" : "upbutton"
      } fixed z-31 bottom-5 right-10 text-white border-2 p-3 text-lg`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  );
};

export default UpButton;
