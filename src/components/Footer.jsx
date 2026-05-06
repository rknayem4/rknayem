import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi2";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-surface-container-high border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Logo className="h-16 w-48 justify-center md:justify-start" />
          <p className="text-on-surface-variant/60 text-sm mt-4">
            © 2024. Designed with precision and passion.
          </p>
        </div>
        
        <div className="flex gap-8 items-center">
          {[
            { icon: FaGithub, link: "https://github.com/rknayem4", label: "GitHub" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/rknayem", label: "LinkedIn" },
            { icon: FaXTwitter, link: "https://x.com/rk_nayem4", label: "Twitter" },
            { icon: HiDocumentText, link: "#", label: "Resume" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary-container transition-colors group relative"
              aria-label={social.label}
            >
              <social.icon className="text-2xl" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
