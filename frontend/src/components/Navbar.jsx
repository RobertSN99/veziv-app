import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen bg-red-300 flex items-center justify-center">
      <div className="flex-1 text-center">VEZIV</div>
      <ul className="flex-1 flex items-center justify-center">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">Resume</a></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
