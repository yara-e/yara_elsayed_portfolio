"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
  FaWhatsapp,
  
} from "react-icons/fa";

export default function Footer() {
  const [cairoTime, setCairoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCairoTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      className="w-full bg-bg-dark text-text-primary pt-20 pb-10 px-4 sm:px-8 md:px-16 lg:px-20 relative overflow-hidden border-t border-border-card/60"
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between space-y-16">
        
        {/* TOP SECTION: Call to Action Stage */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-bg-card/60 border border-border-card/80 backdrop-blur-xl relative overflow-hidden group">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-amber">
              <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
              <span>Lets Build Something Impactful</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Have a project or opportunity in mind?
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-muted">
              Whether you need backend microservices engineering, modern frontend interfaces, or full-stack software development lets talk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="mailto:yaraelsayed237@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent-purple text-white font-mono text-sm font-semibold hover:bg-accent-purple/90 transition-all duration-300"
            >
              <FaPaperPlane className="w-4 h-4" />
              <span>Send Message</span>
            </a>

            
          </div>
        </div>

        {/* MIDDLE SECTION: Navigation Links, Socials & Live Time */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-6">
          
          {/* Brand & Local Time */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display font-bold text-2xl text-white tracking-tight">
              Yara Elsayed<span className="text-accent-amber">.</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
              Software & Full-Stack Engineer crafting scalable backend architectures, high-performance web experiences, and intelligent AI models.
            </p>

            {/* Live Cairo Time Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-bg-card border border-border-card text-xs font-mono text-text-muted mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Cairo, EG</span>
              <span className="text-border-card">|</span>
              <span className="text-white font-medium">{cairoTime || "08:18 AM EEST"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent-purple font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs text-text-muted">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education-experience" className="hover:text-white transition-colors">
                  Education & Experience
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-white transition-colors">
                  Stack & Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent-purple font-semibold">
              Connect Across the Web
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/yara-e"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl bg-bg-card border border-border-card text-text-muted hover:text-white hover:border-accent-purple hover:bg-accent-purple/20 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/yara-elsayed-08b012203/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl bg-bg-card border border-border-card text-text-muted hover:text-white hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/201115688580" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 rounded-2xl bg-bg-card border border-border-card text-text-muted hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>


              <a
                href="mailto:yaraelsayed237@gmail.com"
                aria-label="Email Yara"
                className="p-3 rounded-2xl bg-bg-card border border-border-card text-text-muted hover:text-white hover:border-emerald-400 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}