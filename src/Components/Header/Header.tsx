"use client";

import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/_lib/Context";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/_lib/utils";
import { LuExternalLink } from "react-icons/lu";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  { id: 4, name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const mode = useContext(ThemeContext);
  const pathname = usePathname();

  
  const activeSegment = pathname === "/" ? "home" : pathname.split("/")[1];
  const visiblePanel = hoveredLink ?? activeSegment;

  
  useEffect(() => {
    setIsOpen(false);
    setHoveredLink(null);
  }, [pathname]);


  useEffect(() => {
    const handleScroll = () => {
      mode?.handleScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[100] w-screen transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "h-screen" : "h-[80px]"}
          ${mode?.light
            ? isOpen || mode?.scrolled ? "bg-[#f5f5f5]" : "bg-white"
            : isOpen || mode?.scrolled ? "bg-backgroundDark" : "bg-transparent"
          }
        `}
      >

        <div className="px-8 h-[80px] flex items-center justify-between">
          <h1
            className={`text-[28px] font-bold ${
              mode?.light ? "text-primary" : "text-secondary"
            }`}
          >
            Tosin
          </h1>

          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer p-1"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <IoIosCloseCircleOutline
                className={`text-[32px] ${
                  mode?.light ? "text-[#1F1E1E]" : "text-white"
                }`}
              />
            ) : (
              <IoMdMenu
                className={`text-[32px] ${
                  mode?.light ? "text-[#1F1E1E]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

    
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
        
          <div
            className="flex flex-col lg:flex-row w-full h-[calc(100vh-80px)]"
            onMouseLeave={() => setHoveredLink(null)}
          >

         
            <nav className="flex-shrink-0 lg:w-[35%] xl:w-[30%] p-8 flex items-start lg:items-center">
              <ul className="flex flex-col gap-3 w-full">
                {navLinks.map((navLink) => {
                  const isActive =
                    pathname === navLink.href ||
                    (pathname.startsWith(navLink.href) && navLink.href !== "/");

                  return (
                    <li
                      key={navLink.id}
                      onMouseEnter={() =>
                        setHoveredLink(navLink.name.toLowerCase())
                      }
                    >
                      <Link
                        href={navLink.href}
                        className={`block font-bold leading-none transition-colors duration-300
                          text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px]
                          ${isActive ? "text-primary" : mode?.light ? "text-[#1f1e1e]" : "text-white"}
                          hover:text-primary`}
                        onClick={() => setIsOpen(false)}
                      >
                        {navLink.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

      
            <div className="hidden lg:block flex-1 border-l border-[#66636240] overflow-y-auto">
              <div className="w-full h-full">

                {visiblePanel === "home" && (
                  <div className="flex p-8 xl:p-12 gap-8 items-center h-full">
                    <div className="w-[55%]">
                      <h1 className="text-[32px] xl:text-[40px] font-bold text-[#1F1E1E] leading-tight">
                        Full-stack Engineer With Experience{" "}
                        <span className="text-primary">
                          In Building Scalable Digital Solutions
                        </span>
                      </h1>
                      <p className="text-[#666362] text-[15px] font-light mt-4 leading-relaxed">
                        I am a versatile Full-Stack Engineer with a strong
                        foundation in Web development using microservice architectures, a passion for
                        building scalable digital solutions, and a proven track
                        record of quickly adapting to new technologies and
                        leading high-impact projects across fintech, edtech,
                        logistics, and enterprise environments.
                      </p>
                    </div>
                    <div className="w-[45%] flex justify-center items-center">
                     
                      <div className="relative w-[220px] h-[220px] xl:w-[280px] xl:h-[280px]">
                        {[0.15, 0.20, 0.28, 0.38, 0.50, 0.65].map((opacity, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                              inset: `${i * 10}%`,
                              backgroundColor: `rgba(0,184,177,${opacity})`,
                              transitionDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                
                {visiblePanel === "about" && (
                  <div className="flex p-8 xl:p-12 gap-8 items-start h-full">
                    <div className="w-[55%] pt-4">
                      <h3 className="text-primary text-sm font-semibold uppercase tracking-widest">
                        Hi, I am Tosin Mayowa
                      </h3>
                      <h1 className="text-[28px] xl:text-[36px] font-bold text-[#1F1E1E] mt-2 leading-tight">
                        Full-stack Engineer with 5 Years Experience
                      </h1>
                      <h4 className="text-[#1F1E1E] font-extrabold text-[13px] mt-3">
                        React.js · Next.js · TypeScript · Nest.js · C# . ASP.NET · Docker · Kubernetes · Supabase · WordPress
                      </h4>
                      <p className="text-[#666362] text-[14px] xl:text-[15px] font-light mt-3 leading-relaxed">
                        I am a versatile Full-Stack Engineer with a strong
                        foundation in web development, a passion for
                        building scalable digital solutions, and a proven track
                        record of quickly adapting to new technologies and
                        leading high-impact projects across fintech, edtech,
                        logistics, and enterprise environments. From
                        transforming Figma designs into pixel-perfect,
                        responsive UIs using React.js, Next.js, TypeScript,Nest.js
                        and Tailwind CSS, to diving deep into C# and ASP.NET,Docker,Kubernetes
                        to deliver enterprise-grade banking solutions.
                      </p>
                    </div>
                    <div className="w-[45%] h-full">
                      <Image
                        src="/image/mayowa.jpg"
                        alt="Tosin Mayowa"
                        width={600}
                        height={600}
                        className="w-full h-[70%] object-cover rounded-[8px]"
                      />
                    </div>
                  </div>
                )}

               
                {visiblePanel === "projects" && (
                  <div className="p-8 xl:p-12 h-full overflow-y-auto">
                    <div className="flex flex-wrap gap-4">
                      {projects?.map((project) => (
                        <div
                          key={project.id}
                          className="group relative w-[180px] xl:w-[200px] h-[280px] rounded-[8px] overflow-hidden border border-black bg-cover bg-center flex-shrink-0"
                          style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.55)), url(${project.imgUrl})`,
                          }}
                        >
                          <div className="absolute inset-0 flex flex-col justify-end p-3">
                            <h2 className="text-white text-[15px] font-bold">
                              {project.title}
                            </h2>
                            <p className="text-white text-[11px] font-light mt-1">
                              {project.stack}
                            </p>
                            <Link
                              href={`/projects/${project.id}`}
                              onClick={() => setIsOpen(false)}
                              className="mt-3 w-full h-[30px] flex justify-center items-center rounded-[6px]
                                bg-primary text-white text-[12px] font-semibold
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

               
                {visiblePanel === "contact" && (
                  <div className="p-8 xl:p-12 h-full flex flex-col justify-center">
                    <h1 className="text-[48px] xl:text-[60px] font-extrabold text-[#666362]">
                      Contact
                    </h1>
                    <div className="w-full h-[4px] bg-[#666362] mt-1 mb-8" />

                    <div className="flex flex-col xl:flex-row gap-8">
                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <h3 className="text-[16px] font-extrabold text-[#666362] whitespace-nowrap">
                          E-MAIL
                        </h3>
                        <div className="group">
                          <p className="text-[15px] font-bold text-[#666362] cursor-pointer">
                            toss800@gmail.com
                          </p>
                          <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />
                        </div>
                      </div>

                    
                      <div className="flex items-start gap-4">
                        <h3 className="text-[16px] font-extrabold text-[#666362] whitespace-nowrap">
                          SOCIALS
                        </h3>
                        <div className="flex flex-col gap-3">
                          {[
                            { label: "LinkedIn", href: "https://www.linkedin.com/in/mayowa-adejumola-389992137/" },
                            { label: "YouTube", href: "https://www.youtube.com/@idigixwebdesignhub" },
                            { label: "GitHub", href: "https://github.com/Tosin-Mayowa" },
                          ].map(({ label, href }) => (
                            <div key={label} className="group">
                              <Link
                                href={href}
                                className="text-[15px] font-bold text-[#666362] flex items-center gap-1 hover:text-primary transition-colors duration-300"
                              >
                                <LuExternalLink />
                                {label}
                              </Link>
                              <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
           

          </div>
        </div>

      </header>
    </>
  );
};




