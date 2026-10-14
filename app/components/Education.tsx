"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
  FaServer,
  FaLaptopCode,
  FaLanguage,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Milestone {
  id: string;
  title: string;
  organization: string;
  period: string;
  icon: React.ElementType;
  highlights: string[];
  skills: string[];
  codeSnippet?: string;
}

const educationData: Milestone[] = [
  {
    id: "cs-degree",
    title: "Bachelor's Degree in Computer Science",
    organization: "Helwan University",
    period: "2020 – 2024",
    icon: FaUniversity,
    highlights: [
      "Graduated with core computer science & software engineering principles",
      "Focused on advanced data structures, algorithms, and OOP design",
      "Developed an AI Ocean Plastic Detection model using YOLOv8 for Graduation Project",
    ],
    skills: ["Data Structures", "Algorithms", "Software Engineering", "C++", "Python", "YOLOv8"],
    codeSnippet: `// Helwan University CS Core
const graduate = {
  degree: "B.Sc. Computer Science",
  focus: "Algorithms & Systems",
  status: "Graduated"
};`,
  },
  {
    id: "backend-mastery",
    title: "Back-End Mastery Program",
    organization: "Catalyst AI",
    period: "2026",
    icon: FaServer,
    highlights: [
      "Mastered distributed microservices architecture and event-driven design",
      "Implemented RabbitMQ message queues & Upstash Redis caching",
      "Benchmarked high-concurrency systems with k6 load testing",
    ],
    skills: ["Node.js", "Microservices", "RabbitMQ", "Redis", "PostgreSQL", "k6"],
    codeSnippet: `// Catalyst AI Backend Architecture
await channel.assertQueue('orders_queue');
await redis.set('driver_lock', driverId, 'NX', 'PX', 5000);`,
  },
  {
    id: "react-depi",
    title: "React Web Development",
    organization: "DEPI (Digital Egypt Pioneers Initiative)",
    period: "2025 – 2026",
    icon: FaLaptopCode,
    highlights: [
      "Specialized in Next.js App Router, SSR, and client-side performance",
      "Architected complex, type-safe interactive components with React & TypeScript",
      "Integrated responsive UI systems with Tailwind CSS & GSAP animations",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    codeSnippet: `// DEPI Modern React Pattern
export default function InteractiveApp() {
  const [state, setState] = useState<AppStage>('active');
  return <UIContainer stage={state} />;
}`,
  },
];

const experienceData: Milestone[] = [
  {
    id: "upskilling-intern",
    title: "Backend Engineering Intern",
    organization: "Upskilling",
    period: "May 2026 – Aug 2026",
    icon: FaBriefcase,
    highlights: [
      "Engineered production-grade RESTful APIs using Node.js, Express, and MongoDB",
      "Implemented secure JWT authentication flows with role-based access control",
      "Optimized query speeds, indexing, and schema validation for high performance",
    ],
    skills: ["Node.js", "Express", "MongoDB", "JWT Auth", "REST APIs", "Git"],
    codeSnippet: `// Upskilling Auth Middleware
const token = req.headers.authorization?.split(" ")[1];
const decoded = jwt.verify(token, process.env.JWT_SECRET);`,
  },
  {
    id: "localization-eng",
    title: "Localization Engineer",
    organization: "The Translation Gate",
    period: "Jan 2025 – Dec 2025",
    icon: FaLanguage,
    highlights: [
      "Engineered automated Python scripts for parsing, transforming, and cleaning data",
      "Automated localization project asset pipelines to optimize workflow efficiency",
      "Managed file encoding, quality assurance, and automated workflow scripts",
    ],
    skills: ["Python", "Automation", "File Transformations", "QA", "Scraping"],
    codeSnippet: `# Localization Automation Engine
def process_translation_files(file_path):
    transformed_data = parse_xliff(file_path)
    return export_localized_assets(transformed_data)`,
  },
];

export default function EducationAndExperience() {
  const [openEduId, setOpenEduId] = useState<string>("cs-degree");
  const [openExpId, setOpenExpId] = useState<string>("upskilling-intern");

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-dropdown-part",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleEdu = (id: string) => {
    setOpenEduId((prev) => (prev === id ? "" : id));
  };

  const toggleExp = (id: string) => {
    setOpenExpId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      ref={sectionRef}
      id="education-experience"
      className="w-full bg-bg-dark text-text-primary py-12 sm:py-24 px-3 sm:px-8 md:px-16 lg:px-20 relative overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-5 w-72 sm:w-96 h-72 sm:h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-72 sm:w-96 h-72 sm:h-96 bg-accent-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 space-y-12 sm:space-y-20">
        
        {/* =========================================================================
            PART 1: EDUCATION & CERTIFICATIONS DROPDOWNS
           ========================================================================= */}
        <div className="gsap-dropdown-part w-full space-y-6">
          <div className="flex items-center gap-3 border-b border-border-card pb-4 w-full">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-accent-amber/10 border border-accent-amber/30 text-accent-amber shrink-0">
              <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent-amber block mb-0.5">
                Academic & Continuous Learning
              </span>
              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white">
                Education & Certifications
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-border-card ml-2.5 sm:ml-5 space-y-4 sm:space-y-6 w-[calc(100%-10px)] sm:w-auto">
            {educationData.map((item) => {
              const isOpen = openEduId === item.id;
              const IconComp = item.icon;

              return (
                <div key={item.id} className="relative pl-4 sm:pl-8 w-full group">
                  {/* Timeline Dot Node */}
                  <div
                    onClick={() => toggleEdu(item.id)}
                    className={`absolute -left-[15px] sm:-left-[17px] top-4 sm:top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isOpen
                        ? "bg-accent-amber border-accent-amber text-bg-dark shadow-lg shadow-accent-amber/40 scale-105"
                        : "bg-bg-card border-border-card text-text-muted hover:text-white"
                    }`}
                  >
                    <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>

                  {/* Dropdown Card */}
                  <div
                    className={`w-full rounded-2xl sm:rounded-3xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                      isOpen
                        ? "bg-bg-card/90 border-accent-amber/60 shadow-[0_20px_50px_-15px_rgba(255,183,3,0.15)]"
                        : "bg-bg-card/40 border-border-card/60 hover:border-border-card"
                    }`}
                  >
                    {/* Header Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleEdu(item.id)}
                      className="w-full p-4 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left select-none cursor-pointer"
                    >
                      <div className="w-full sm:w-auto">
                        <span className="font-mono text-xs text-text-muted block mb-1">
                          {item.organization}
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-xl text-white group-hover:text-accent-amber transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-border-card/40 shrink-0">
                        <span className="font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-border-card bg-bg-dark text-accent-amber">
                          {item.period}
                        </span>
                        <div
                          className={`p-1.5 rounded-full border border-border-card/60 bg-bg-dark text-text-muted transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-accent-amber border-accent-amber/40" : ""
                          }`}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    {isOpen && (
                      <div className="w-full px-4 sm:px-6 pb-5 sm:pb-7 pt-3 border-t border-border-card/50 bg-black/20 space-y-4 sm:space-y-6">
                        <div className="space-y-2.5 sm:space-y-3">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                              <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-amber shrink-0 mt-1" />
                              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>

                        {item.codeSnippet && (
                          <div className="w-full p-3 sm:p-4 rounded-xl bg-black/70 border border-border-card/80 font-mono text-[11px] sm:text-xs text-cyan-300 overflow-x-auto shadow-inner">
                            <pre>{item.codeSnippet}</pre>
                          </div>
                        )}

                        <div className="pt-3 border-t border-border-card/40 w-full">
                          <span className="font-mono text-[10px] sm:text-[11px] text-text-muted block mb-2 uppercase tracking-wider">
                            Key Technologies
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 sm:px-3 py-1 rounded-lg bg-bg-dark border border-border-card text-[11px] sm:text-xs font-mono text-text-primary"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* =========================================================================
            PART 2: PROFESSIONAL EXPERIENCE DROPDOWNS
           ========================================================================= */}
        <div className="gsap-dropdown-part w-full space-y-6">
          <div className="flex items-center gap-3 border-b border-border-card pb-4 w-full">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
              <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 block mb-0.5">
                Career Track & Internships
              </span>
              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white">
                Professional Experience
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-border-card ml-2.5 sm:ml-5 space-y-4 sm:space-y-6 w-[calc(100%-10px)] sm:w-auto">
            {experienceData.map((item) => {
              const isOpen = openExpId === item.id;
              const IconComp = item.icon;

              return (
                <div key={item.id} className="relative pl-4 sm:pl-8 w-full group">
                  {/* Timeline Dot Node */}
                  <div
                    onClick={() => toggleExp(item.id)}
                    className={`absolute -left-[15px] sm:-left-[17px] top-4 sm:top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-500 border-blue-500 text-bg-dark shadow-lg shadow-blue-500/40 scale-105"
                        : "bg-bg-card border-border-card text-text-muted hover:text-white"
                    }`}
                  >
                    <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>

                  {/* Dropdown Card */}
                  <div
                    className={`w-full rounded-2xl sm:rounded-3xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                      isOpen
                        ? "bg-bg-card/90 border-blue-500/60 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)]"
                        : "bg-bg-card/40 border-border-card/60 hover:border-border-card"
                    }`}
                  >
                    {/* Header Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleExp(item.id)}
                      className="w-full p-4 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left select-none cursor-pointer"
                    >
                      <div className="w-full sm:w-auto">
                        <span className="font-mono text-xs text-text-muted block mb-1">
                          {item.organization}
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-xl text-white group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-border-card/40 shrink-0">
                        <span className="font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-border-card bg-bg-dark text-blue-400">
                          {item.period}
                        </span>
                        <div
                          className={`p-1.5 rounded-full border border-border-card/60 bg-bg-dark text-text-muted transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-blue-400 border-blue-400/40" : ""
                          }`}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    {isOpen && (
                      <div className="w-full px-4 sm:px-6 pb-5 sm:pb-7 pt-3 border-t border-border-card/50 bg-black/20 space-y-4 sm:space-y-6">
                        <div className="space-y-2.5 sm:space-y-3">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                              <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0 mt-1" />
                              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>

                        {item.codeSnippet && (
                          <div className="w-full p-3 sm:p-4 rounded-xl bg-black/70 border border-border-card/80 font-mono text-[11px] sm:text-xs text-cyan-300 overflow-x-auto shadow-inner">
                            <pre>{item.codeSnippet}</pre>
                          </div>
                        )}

                        <div className="pt-3 border-t border-border-card/40 w-full">
                          <span className="font-mono text-[10px] sm:text-[11px] text-text-muted block mb-2 uppercase tracking-wider">
                            Key Technologies
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 sm:px-3 py-1 rounded-lg bg-bg-dark border border-border-card text-[11px] sm:text-xs font-mono text-text-primary"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
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