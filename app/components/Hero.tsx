"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardStackRef = useRef<HTMLDivElement>(null);
  const magneticBtnsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.fromTo(
        ".gsap-greeting",
        { y: 25, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1 },
      )
        .fromTo(
          ".gsap-title",
          { y: 35, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1 },
          "-=0.6",
        )
        .fromTo(
          ".gsap-subtitle",
          { y: 25, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1 },
          "-=0.6",
        )
        .fromTo(
          ".gsap-about-title",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1 },
          "+=0.1",
        )
        .fromTo(
          ".gsap-about-text",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.6",
        )
        .fromTo(
          ".gsap-actions",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.6",
        )
        .fromTo(
          ".gsap-mobile-label",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          "+=0.1",
        )
        .fromTo(
          ".gsap-project-card",
          { x: 120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.18,
            ease: "power3.out",
            duration: 1.1,
          },
          "-=0.6",
        )
        .fromTo(
          ".gsap-mobile-cta",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.4",
        );

      gsap.to(".gsap-bg-glow", {
        scale: 1.25,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.easeInOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardStackRef.current || window.innerWidth < 1024) return;
    const rect = cardStackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(cardStackRef.current, {
      rotateY: 10 + x * 0.025,
      rotateX: -4 - y * 0.025,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    if (!cardStackRef.current || window.innerWidth < 1024) return;
    gsap.to(cardStackRef.current, {
      rotateY: 10,
      rotateX: -4,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMagneticMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const target = magneticBtnsRef.current[index];
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(target, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave = (index: number) => {
    const target = magneticBtnsRef.current[index];
    if (!target) return;
    gsap.to(target, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const projects = [
    { id: 1, src: "/projects/admin-dashboard-1.png", alt: "Project 1 Preview" },
    { id: 2, src: "/projects/Screenshot (425).png", alt: "Project 2 Preview" },
    { id: 3, src: "/projects/Screenshot (502).png", alt: "Project 3 Preview" },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full bg-bg-dark text-text-primary flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-12 overflow-hidden relative"
    >
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] pointer-events-none z-0 opacity-40">
        <div className="gsap-bg-glow w-full h-full rounded-full bg-gradient-to-tr from-accent-purple/30 via-purple-600/10 to-accent-amber/20 blur-3xl" />
      </div>

      <div className="relative mb-10 sm:mb-16 text-center mx-auto max-w-5xl w-full z-10">
        <div className="inline-block relative text-left">
          <p className="gsap-greeting font-handwriting text-accent-purple text-2xl sm:text-4xl md:text-5xl -rotate-2 -mb-2 sm:-mb-3 ml-1">
            Hello, I&apos;m Yara
          </p>

          <h1 className="gsap-title font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none select-none">
            SOFTWARE ENGINEER
          </h1>

          <p className="gsap-subtitle font-handwriting text-accent-amber text-2xl sm:text-4xl md:text-5xl lg:text-6xl -rotate-2 -mt-3 sm:-mt-6 lg:-mt-8 text-right mr-2 pointer-events-none drop-shadow-lg">
            Full Stack Developer
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full max-w-7xl mx-auto z-10">
        <div className="lg:col-span-5 flex flex-col space-y-5 sm:space-y-6 text-left order-1">
          <h2 className="gsap-about-title font-display text-xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-purple-400">
            ABOUT ME
          </h2>

          <p className="gsap-about-text font-sans text-text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Passionate Software Engineer specializing in building{" "}
            <span className="text-accent-amber font-medium">
              scalable web platforms
            </span>
            , modern UI/UX architectures, and robust{" "}
            <span className="text-accent-purple font-medium">
              backend microservices
            </span>
            . I transform complex engineering problems into clean,
            high-performance visual experiences.
          </p>

          <div className="gsap-actions flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a
              ref={(el) => {
                magneticBtnsRef.current[0] = el;
              }}
              onMouseMove={(e) => handleMagneticMove(e, 0)}
              onMouseLeave={() => handleMagneticLeave(0)}
              href="https://drive.google.com/drive/folders/1NugDqgDW6b7CWJ8d6TBS6CUbsl1WRpg_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-purple hover:bg-purple-600 text-white font-medium px-4 sm:px-5 py-2.5 rounded-xl transition-colors duration-300 shadow-lg shadow-accent-purple/20 text-sm sm:text-base"
            >
              <FaFileAlt className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <div className="w-[1px] h-8 bg-border-card hidden sm:block mx-1" />

            <div className="flex items-center gap-2 sm:gap-3">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/yara-e",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/yara-elsayed-08b012203/",
                  label: "LinkedIn",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:yaraelsayed237@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => {
                const IconComponent = social.icon;
                const index = i + 1;
                return (
                  <a
                    key={social.label}
                    ref={(el) => {
                      magneticBtnsRef.current[index] = el;
                    }}
                    onMouseMove={(e) => handleMagneticMove(e, index)}
                    onMouseLeave={() => handleMagneticLeave(index)}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 sm:p-3 rounded-xl bg-bg-card border border-border-card text-text-muted hover:text-white hover:border-accent-purple transition-colors duration-300 shadow-md"
                  >
                    <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Cards Stack with Added Safe Margins */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative w-full pt-6 lg:pt-0 order-2 px-2 sm:px-4">
          <div className="gsap-mobile-label lg:hidden flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
            <span>Featured Work Preview</span>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center lg:justify-end w-full max-w-xl h-64 sm:h-80 lg:h-96 my-4"
            style={{ perspective: "1200px" }}
          >
            <div
              ref={cardStackRef}
              className="relative w-full h-full flex items-center justify-center lg:justify-end transition-transform ease-out duration-300"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(10deg) rotateX(-4deg)",
              }}
            >
              {projects.map((proj, idx) => {
                const isFocused = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const isInactive = isAnyHovered && !isFocused;

                // Scaled horizontal margins/offsets so cards fan out safely with breathing room
                const leftPositions = [
                  "left-1 sm:left-4 lg:left-0",
                  "left-16 sm:left-36 lg:left-40",
                  "left-32 sm:left-72 lg:left-80",
                ];

                return (
                  <div
                    key={proj.id}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onTouchStart={() => setHoveredIdx(idx)}
                    className={`gsap-project-card absolute ${leftPositions[idx]} transition-all duration-500 ease-out cursor-pointer
                      w-56 sm:w-80 lg:w-[420px]
                      p-[3px] rounded-2xl bg-gradient-to-br from-accent-purple via-purple-900/40 to-accent-amber
                      ${
                        isFocused
                          ? "z-50 scale-110 -translate-y-6 rotate-0 shadow-[0_30px_70px_rgba(124,77,255,0.4)] brightness-110"
                          : isInactive
                            ? "opacity-35 blur-[2px] scale-95 shadow-none grayscale-[30%]"
                            : "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] opacity-100"
                      }
                    `}
                    style={{
                      zIndex: isFocused ? 50 : (idx + 1) * 10,
                    }}
                  >
                    <div className="relative w-full rounded-[13px] overflow-hidden bg-bg-card">
                      <Image
                        src={proj.src}
                        alt={proj.alt}
                        width={1200}
                        height={750}
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <a
            href="#projects"
            className="gsap-mobile-cta lg:hidden mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-amber hover:text-white px-5 py-2.5 rounded-xl bg-bg-card/80 border border-accent-amber/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-accent-amber/10"
          >
            <span>See all projects</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}