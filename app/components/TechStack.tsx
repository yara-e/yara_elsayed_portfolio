'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiDocker,
  SiJest,
  SiGit,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TechItem {
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
}

const track1: TechItem[] = [
  { name: 'Node.js', category: 'Runtime', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'TypeScript', category: 'Language', icon: SiTypescript, color: '#3178C6' },
  { name: 'Express.js', category: 'Backend', icon: SiExpress, color: '#FFFFFF' },
  { name: 'React.js', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', category: 'Framework', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', category: 'Styling', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'C++', category: 'Algorithms', icon: SiCplusplus, color: '#00599C' },
];

const track2: TechItem[] = [
  { name: 'PostgreSQL', category: 'PostGIS / SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', category: 'Caching', icon: SiRedis, color: '#DC382D' },
  { name: 'RabbitMQ', category: 'Message Queue', icon: SiRabbitmq, color: '#FF6600' },
  { name: 'MongoDB', category: 'NoSQL', icon: SiMongodb, color: '#47A248' },
  { name: 'AWS (ECS)', category: 'Cloud', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', category: 'Containers', icon: SiDocker, color: '#2496ED' },
  { name: 'Jest', category: 'Testing', icon: SiJest, color: '#C21325' },
  { name: 'Git & GitHub', category: 'DevOps', icon: SiGit, color: '#F05032' },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Fade-in on Scroll
      gsap.from('.gsap-marquee-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // 2. Continuous Dual-Track Marquee Loops
      // Track 1: Moves Left
      const t1 = gsap.to(track1Ref.current, {
        xPercent: -50,
        ease: 'none',
        duration: 25,
        repeat: -1,
      });

      // Track 2: Moves Right
      const t2 = gsap.fromTo(
        track2Ref.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: 'none',
          duration: 25,
          repeat: -1,
        }
      );

      // Slow down animation speed smoothly on section hover
      const sectionEl = sectionRef.current;
      if (sectionEl) {
        const handleMouseEnter = () => {
          gsap.to([t1, t2], { timeScale: 0.3, duration: 0.5 });
        };
        const handleMouseLeave = () => {
          gsap.to([t1, t2], { timeScale: 1, duration: 0.5 });
        };

        sectionEl.addEventListener('mouseenter', handleMouseEnter);
        sectionEl.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          sectionEl.removeEventListener('mouseenter', handleMouseEnter);
          sectionEl.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Card Cursor Tilt Effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x * 0.15,
      rotateX: -y * 0.15,
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  // Duplicate items for seamless continuous looping
  const track1Items = [...track1, ...track1];
  const track2Items = [...track2, ...track2];

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="w-full bg-bg-dark text-text-primary py-16 overflow-hidden relative"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] pointer-events-none z-0 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-accent-purple via-indigo-600 to-accent-amber blur-[90px]" />
      </div>

      {/* Title Header */}
      <div className="text-center mb-8 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-amber mb-1">
          <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
          <span>Core Stack Architecture</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
          Tech Stack
        </h2>
      </div>

      {/* Marquee Wrapper with Side Vignette Masking */}
      <div className="gsap-marquee-container relative w-full overflow-hidden flex flex-col gap-4 z-10">
        
        {/* Left & Right Fade Masks for Smooth Vignette */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg-dark to-transparent z-20 pointer-events-none" />

        {/* TRACK 1: Moves Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div ref={track1Ref} className="flex gap-3 sm:gap-4 w-max">
            {track1Items.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`t1-${item.name}-${idx}`}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg-card/70 border border-border-card/80 backdrop-blur-md transition-colors duration-300 hover:border-accent-purple/70 hover:bg-bg-card cursor-pointer shadow-md select-none"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <IconComponent
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-display text-xs sm:text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRACK 2: Moves Right */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div ref={track2Ref} className="flex gap-3 sm:gap-4 w-max">
            {track2Items.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`t2-${item.name}-${idx}`}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg-card/70 border border-border-card/80 backdrop-blur-md transition-colors duration-300 hover:border-accent-purple/70 hover:bg-bg-card cursor-pointer shadow-md select-none"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <IconComponent
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-display text-xs sm:text-sm font-semibold text-white group-hover:text-accent-amber transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}