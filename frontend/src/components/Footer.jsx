import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 w-screen max-h-56 min-h-32 border-t-stone-900 border-t-2 flex flex-col items-center justify-center bg-slate-950 text-slate-500 font-alternative text-center">
      <div className="flex items-center justify-around w-full text-left mt-1 ">
        <div>
          <ul>
            <li className="transition-all hover:text-slate-100 cursor-pointer">Contact me</li>
            <li className="transition-all hover:text-slate-100 cursor-pointer">Pricing</li>
            <li className="transition-all hover:text-slate-100 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="transition-all hover:text-slate-100 cursor-pointer">Privacy Policy</li>
            <li className="transition-all hover:text-slate-100 cursor-pointer">Partners</li>
            <li className="transition-all hover:text-slate-100 cursor-pointer">FAQs</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-10 text-xl">
          <FaGithub className="transition-all hover:text-slate-100 cursor-pointer" />
          <FaLinkedin className="transition-all hover:text-slate-100 cursor-pointer" />
          <p className="text-sm cursor-pointer">Robert Spînoiu © 2024</p>
          <FaYoutube className="transition-all hover:text-slate-100 cursor-pointer" />
          <FaInstagram className="transition-all hover:text-slate-100 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
