"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiArduino,
  SiMysql,
} from "react-icons/si";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
  FaAws,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  tech: { name: string; icon: React.ElementType; color: string }[];
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: "quickbite",
    title: "QuickBite",
    subtitle: "Event-Driven Food Delivery Microservices Platform",
    description:
      "QuickBite is an asynchronous, event-driven microservices backend engineered for high-throughput food delivery platforms. It manages the complete order lifecycle — from restaurant browsing and order placement to real-time delivery tracking, payments, and driver assignments — across multi-region environments.",
    images: ["/projects/quick-bite.jfif", "/projects/quickbite-2.png"],
    tech: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#fff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "AWS ECS", icon: FaAws, color: "#FF9900" },
    ],
    github: "https://github.com/yara-e/quickbite-microservices",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    subtitle: "Full-Stack E-Commerce Management System",
    description:
      "A full-stack e-commerce management system with a secure backend and a modern analytics dashboard. The system includes authentication, role-based authorization, cursor-based pagination, global rate limiting, and caching for optimized performance.",
    images: [
      "/projects/admin-dashboard-1.png",
      "/projects/admin-dashboard-2.png",
      "/projects/admin-dashboard-3.png",
    ],
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
    github: "https://github.com/yara-e/fullstack-admin-dashboard",
    demo: "https://fullstack-admin-dashboard-svjz.vercel.app/login",
  },
  {
    id: "Nola-For-Accessories",
    title: "Nola-For-Accessories",
    subtitle: "Freelance project for E-commerce website",
    description:
      "Ecommerce website for Accessories where it has client side for showing the products and categories with filtering and pagination and admin side that has login using JWT and CRUD for products and categories and the websites supports EN and AR languages ",
    images: [
      "/projects/Screenshot (500).png",
      "/projects/Screenshot (501).png",
      "/projects/Screenshot (502).png",
    ],
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Mongoose", icon: SiMongodb, color: "#4DB33D" },
    ],
    github: "https://github.com/yara-e/Nola-For-Accessories",
    demo: "https://nola-for-accessories.vercel.app/",
  },

  {
    id: "portfolio-v2",
    title: "Graphic Design Portfolio",
    subtitle: "Freelance Interactive 3D Portfolio & Brand Showcasee",
    description:
      "A custom-developed portfolio featuring responsive 3D assets, a sleek dark-mode aesthetic, multi-category galleries, and a secure admin backend for seamless project uploads.",
    images: [
      "/projects/Screenshot (425).png",
      "/projects/Screenshot (426).png",
      "/projects/Screenshot (427).png",
      "/projects/Screenshot (428).png",
    ],
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Mongoose", icon: SiMongodb, color: "#4DB33D" },
    ],
    github: "https://github.com/yara-e/Noran-graphic-designer",
    demo: "https://noran-graphic-designer.vercel.app/",
  },
  {
    id: "Qoutly",
    title: "Qoutly Website",
    subtitle: "Full-stack responsive blog platform",
    description:
      "Full-stack responsive blog platform where users can register, log in, create/edit/delete posts, like, comment, and search. Implemented infinite scroll for smooth browsing and cloud image uploads with ImageKit. Focused on secure authentication using JWT and Zod, responsive design, and interactive user experience.",
    images: [
      "/projects/Screenshot (370).png",
      "/projects/Screenshot (371).png",
      "/projects/Screenshot (372).png",
      "/projects/Screenshot (373).png",
    ],
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Mongoose", icon: SiMongodb, color: "#4DB33D" },
    ],
    github: "https://github.com/yara-e/depi-final-Project-Sharagra",
  },

  {
    id: "shagra",
    title: "Shagara Website",
    subtitle:
      "web platform to promote environmental awareness and tree planting in Egypt",
    description:
      "web platform to promote environmental awareness and tree planting in Egypt. Users can buy or donate for trees, track progress via profiles and rewards, and admins can manage users, trees, and orders. Focused on a responsive interface, smooth UX, and efficient data handling through APIs.",
    images: [
      "/projects/Screenshot (377).png",
      "/projects/Screenshot (378).png",
      "/projects/Screenshot (380).png",
      "/projects/Screenshot (383).png",
    ],
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Mongoose", icon: SiMongodb, color: "#4DB33D" },
      { name: "Express", icon: SiExpress, color: "#fff" },
      { name: "BootStrap", icon: SiBootstrap, color: "#6f42c1" },
    ],
    github: "https://github.com/yara-e/depi-final-Project-Sharagra",
  },
  {
    id: "Farm Help Website",
    title: "Farm Help Website",
    subtitle: "Nasa Hacathon Project to assist Farmers",
    description:
      "Full-stack application to assist farmers in crop-planting decisions based on environmental data. Integrated real-time sensors (Arduino, DHT22, soil moisture) and APIs for flood/drought prediction. Provided data-driven crop recommendations with a user-friendly, responsive interface.",
    images: [
      "/projects/farm-1.jpg",
      "/projects/farm-2.png",
      "/projects/farm-3.jpg",
      "/projects/farm-4.jpg",
    ],
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Mongoose", icon: SiMongodb, color: "#4DB33D" },
      { name: "Express", icon: SiExpress, color: "#fff" },
      { name: "Arduino", icon: SiArduino, color: "#06B6D4" },
    ],
    github: "https://github.com/yara-e/Farm-Help",
  },

  {
    id: "busbooking",
    title: "Bus Booking System",
    subtitle: "Online bus ticket reservation system",
    description:
      "Online bus ticket reservation system with admin and traveler roles. Travelers can browse trips, book tickets, and track bookings; admins manage destinations, schedules, and traveler records. Focused on secure authentication, responsive design, and efficient database integration.",
    images: [
      "/projects/bus-1.jpg",
      "/projects/bus-2.jpg",
      "/projects/bus-3.jpg",
     
    ],
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#fff" },
      { name: "MySQL", icon: SiMysql, color: "#06B6D4" },
    ],
    github: "https://github.com/yara-e/BusBooking",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeImageIndexes, setActiveImageIndexes] = useState<{
    [key: string]: number;
  }>({
    quickbite: 0,
    "admin-dashboard": 0,
    "portfolio-v2": 0,
    "Nola-For-Accessories": 0,
    Qoutly: 0,
    shagra: 0,
    "Farm Help Website": 0,
    busbooking: 0,
  });

  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Automatic Image Carousel Effect (every 4 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveImageIndexes((prev) => {
        const nextState = { ...prev };
        projectsData.forEach((proj) => {
          const max = proj.images.length;
          nextState[proj.id] = (prev[proj.id] + 1) % max;
        });
        return nextState;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll entrance animation for cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-project-grid-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-projects-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNextImage = (projectId: string, maxImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % maxImages,
    }));
  };

  const handlePrevImage = (projectId: string, maxImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + maxImages) % maxImages,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full bg-bg-dark text-text-primary py-24 px-4 sm:px-8 md:px-16 lg:px-20 relative overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-amber mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
        </div>

        <div className="gsap-projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full">
          {projectsData.map((project) => {
            const currentImgIdx = activeImageIndexes[project.id] || 0;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="gsap-project-grid-card group relative flex flex-col rounded-3xl bg-bg-card/80 border border-border-card/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent-purple/60 hover:shadow-[0_20px_50px_-15px_rgba(124,77,255,0.25)]"
              >
                {/* Automatically Sliding Image Container */}
                {/* Natural Aspect Ratio Container (No fill, no forced zooming, no black spaces) */}
                <div className="relative w-full overflow-hidden bg-black/40 flex items-center justify-center">
                  <Image
                    src={project.images[currentImgIdx]}
                    alt={`${project.title} screenshot ${currentImgIdx + 1}`}
                    width={1200}
                    height={750}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Carousel Navigation Buttons & Pagination Dots */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          handlePrevImage(project.id, project.images.length)
                        }
                        aria-label="Previous Image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-dark/80 border border-border-card text-white hover:bg-accent-purple transition-colors duration-200 shadow-md backdrop-blur-sm z-20"
                      >
                        <FaChevronLeft className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() =>
                          handleNextImage(project.id, project.images.length)
                        }
                        aria-label="Next Image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-dark/80 border border-border-card text-white hover:bg-accent-purple transition-colors duration-200 shadow-md backdrop-blur-sm z-20"
                      >
                        <FaChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-dark/80 border border-border-card/40 backdrop-blur-sm z-20">
                        {project.images.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() =>
                              setActiveImageIndexes((prev) => ({
                                ...prev,
                                [project.id]: dotIdx,
                              }))
                            }
                            className={`transition-all duration-300 rounded-full ${
                              dotIdx === currentImgIdx
                                ? "w-5 h-2 bg-accent-amber"
                                : "w-2 h-2 bg-white/40 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-accent-amber transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="p-2 rounded-xl bg-bg-dark border border-border-card text-text-muted hover:text-white hover:border-accent-purple transition-colors"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="p-2 rounded-xl bg-bg-dark border border-border-card text-text-muted hover:text-white hover:border-accent-purple transition-colors"
                          >
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="font-mono text-xs text-accent-purple mb-3">
                      {project.subtitle}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border-card/50">
                    {project.tech.map((t) => {
                      const IconComp = t.icon;
                      return (
                        <div
                          key={t.name}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-dark/80 border border-border-card/60 text-[11px] font-mono text-text-muted"
                        >
                          <IconComp
                            className="w-3.5 h-3.5"
                            style={{ color: t.color }}
                          />
                          <span>{t.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
