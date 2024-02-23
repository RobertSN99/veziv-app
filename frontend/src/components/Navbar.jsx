import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isScrolled }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav
      className={`w-full py-2 z-30 flex items-center justify-center fixed top-0 bg-slate-100 transition-all duration-1000 ${
        isScrolled ? "bg-opacity-90" : "bg-opacity-0"
      }`}
    >
      <div
        id="logo"
        className={`flex-1 font-title text-5xl ml-28 transition-all duration-1000 ${
          isScrolled ? "text-slate-900" : "text-slate-100"
        }`}
      >
        <a href="/" className="cursor-pointer max-w-fit">
          VEZIV
        </a>
      </div>
      <ul
        className={`flex items-center justify-center flex-1 font-alternative font-bold text-lg transition-all duration-1000 ${
          isScrolled ? "text-slate-900" : "text-slate-100"
        }`}
      >
        <li
          className={`cursor-pointer transition-all hover:scale-110 px-8 py-2 mx-2 ${
            isActive("/") || isActive("/home") ? "activeNav bg-blue-700" : ""
          }`}
          onClick={scrollToTop}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`cursor-pointer transition-all hover:scale-110 px-8 py-2 mx-2 ${
            isActive("/resume") ? "activeNav bg-blue-700" : ""
          }`}
          onClick={scrollToTop}
        >
          <Link to="/resume">Resume</Link>
        </li>
        <li
          className={`cursor-pointer transition-all hover:scale-110 px-8 py-2 mx-2 ${
            isActive("/projects") ? "activeNav bg-blue-700" : ""
          }`}
          onClick={scrollToTop}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className={`cursor-pointer transition-all hover:scale-110 px-8 py-2 mx-2 ${
            isActive("/contact") ? "activeNav bg-blue-700" : ""
          }`}
          onClick={scrollToTop}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
