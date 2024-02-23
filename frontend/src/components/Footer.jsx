import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col items-center justify-center w-screen text-center border-t-2 max-h-56 min-h-32 border-t-stone-900 bg-slate-950 text-slate-500 font-alternative">
      <div className="flex items-center justify-around w-full mt-1 text-left ">
        <div>
          <ul>
            <li className="transition-all cursor-pointer hover:text-slate-100">Contact me</li>
            <li className="transition-all cursor-pointer hover:text-slate-100">Pricing</li>
            <li className="transition-all cursor-pointer hover:text-slate-100">Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="transition-all cursor-pointer hover:text-slate-100">Privacy Policy</li>
            <li className="transition-all cursor-pointer hover:text-slate-100">Partners</li>
            <li className="transition-all cursor-pointer hover:text-slate-100">FAQs</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-10 text-xl">
          <FaGithub className="transition-all cursor-pointer hover:text-slate-100" />
          <FaLinkedin className="transition-all cursor-pointer hover:text-slate-100" />
          <p className="text-sm cursor-pointer">Robert Spînoiu © 2024</p>
          <FaYoutube className="transition-all cursor-pointer hover:text-slate-100" />
          <FaInstagram className="transition-all cursor-pointer hover:text-slate-100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
