"use client";

import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-blue-500/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo className="h-12 w-36" />
        </a>
        <div className="hidden md:flex items-center gap-8 font-h1 text-sm font-medium tracking-tight">
          <a className="text-blue-500 border-b-2 border-blue-500 pb-1" href="#">
            Home
          </a>
          <a
            className="text-slate-400 hover:text-blue-400 transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-slate-400 hover:text-blue-400 transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-slate-400 hover:text-blue-400 transition-colors"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-slate-400 hover:text-blue-400 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-bold glow-accent transition-all">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
