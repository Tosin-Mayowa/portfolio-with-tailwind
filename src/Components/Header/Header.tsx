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

  /*
   * FIX: hoveredLink now starts as null.
   * We derive the "active" panel from the pathname when nothing is hovered,
   * so there is no need for the broken useEffect that tried to sync them.
   */
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const mode = useContext(ThemeContext);
  const pathname = usePathname();

  /* Derive the panel to show: prefer the hovered item, fall back to the
     current route so the panel is always populated when the menu is open. */
  const activeSegment = pathname === "/" ? "home" : pathname.split("/")[1];
  const visiblePanel = hoveredLink ?? activeSegment;

  /* FIX: Close menu on route change (e.g. after clicking a link). */
  useEffect(() => {
    setIsOpen(false);
    setHoveredLink(null);
  }, [pathname]);

  /* Scroll shadow */
  useEffect(() => {
    const handleScroll = () => {
      mode?.handleScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  /* Lock body scroll when menu is open */
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

        {/* ── Top bar ── */}
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

        {/* ── Menu body (only rendered when open) ── */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/*
           * Layout:
           *  • Mobile / tablet  → stacked: nav links on top, panel below.
           *  • lg+              → side-by-side: nav links left (~35%), panel right.
           *
           * FIX: hover panel and nav are now in the SAME mouse-tracking container
           * so moving the cursor from a link into the panel doesn't clear hoveredLink.
           */}
          <div
            className="flex flex-col lg:flex-row w-full h-[calc(100vh-80px)]"
            onMouseLeave={() => setHoveredLink(null)}
          >

            {/* Nav links */}
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

            {/* ── Hover / Active Panel ──
                Visible on lg+ only. On mobile the user navigates directly.
                FIX: panel is inside the same onMouseLeave wrapper as nav,
                so hovering inside the panel keeps it visible.
            */}
            <div className="hidden lg:block flex-1 border-l border-[#66636240] overflow-y-auto">
              <div className="w-full h-full">

                {/* HOME panel */}
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
                        foundation in frontend development, a passion for
                        building scalable digital solutions, and a proven track
                        record of quickly adapting to new technologies and
                        leading high-impact projects across fintech, edtech,
                        logistics, and enterprise environments.
                      </p>
                    </div>
                    <div className="w-[45%] flex justify-center items-center">
                      {/* Animated circles */}
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

                {/* ABOUT panel */}
                {visiblePanel === "about" && (
                  <div className="flex p-8 xl:p-12 gap-8 items-start h-full">
                    <div className="w-[55%] pt-4">
                      <h3 className="text-primary text-sm font-semibold uppercase tracking-widest">
                        Hi, I am Tosin Mayowa
                      </h3>
                      <h1 className="text-[28px] xl:text-[36px] font-bold text-[#1F1E1E] mt-2 leading-tight">
                        Full-stack Engineer with 3 Years Experience
                      </h1>
                      <h4 className="text-[#1F1E1E] font-extrabold text-[13px] mt-3">
                        React.js · Next.js · TypeScript · Node.js · Supabase
                      </h4>
                      <p className="text-[#666362] text-[14px] xl:text-[15px] font-light mt-3 leading-relaxed">
                        I am a versatile Full-Stack Engineer with a strong
                        foundation in frontend development, a passion for
                        building scalable digital solutions, and a proven track
                        record of quickly adapting to new technologies and
                        leading high-impact projects across fintech, edtech,
                        logistics, and enterprise environments. From
                        transforming Figma designs into pixel-perfect,
                        responsive UIs using React.js, Next.js, TypeScript,
                        and Tailwind CSS, to diving deep into C# and ASP.NET
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

                {/* PROJECTS panel */}
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

                {/* CONTACT panel */}
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

                      {/* Socials */}
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
            {/* end panel */}

          </div>
        </div>

      </header>
    </>
  );
};




// "use client";

// import { IoMdMenu } from "react-icons/io";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Link from "next/link";
// import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "@/app/_lib/Context";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { projects } from "@/app/_lib/utils";
// import { LuExternalLink } from "react-icons/lu";

// const navLinks = [
//   { id: 1, name: "Home", href: "/" },
//   { id: 2, name: "About", href: "/about" },
//   { id: 3, name: "Projects", href: "/projects" },
//   { id: 4, name: "Contact", href: "/contact" },
// ];

// export const Header: React.FC = () => {
//   const [isClick, setIsClick] = useState<boolean>(false);
//   const [hoveredLink, setHoveredLink] = useState<string | null>("home");
//   const mode = useContext(ThemeContext);
//   const pathname = usePathname();
  
//   console.log({pathname,arp:pathname.split('/')});
  
// useEffect(() => {
  
//   let pathIndex=pathname.split('/')[1]
//   if (hoveredLink === null&&pathIndex!==""&& isClick) {
//     setHoveredLink(pathIndex);
//   }
//   if (hoveredLink === null&&pathIndex===""&&isClick) {
//     setHoveredLink("home");
//   }
  
// }, [hoveredLink,isClick]);


//   useEffect(() => {
//     const handleScroll = () => {
//       mode?.handleScroll(window.scrollY > 50); // adjust scroll value as needed
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 z-100 w-screen transition-all duration-500 ease-in-out overflow-hidden ${
//           isClick ? "h-screen border-none bg-[#f5f5f5]" : "h-[80px]"
//         } ${mode?.scrolled ? "bg-[#f5f5f5]" : "bg-white"}`}
//       >
//         <div className="p-8 text-white font-bold z-100 flex justify-between">
//           <h1
//             className={`text-[30px] flex ${
//               mode?.light ? "text-primary" : "text-secondary"
//             }`}
//           >
//             Tosin
//           </h1>

//           <div
//             className="relative h-[50px] flex cursor-pointer mt-2 lg:mt-[2px] self-center"
//             onClick={() => setIsClick(!isClick)}
//           >
//             {!isClick ? (
//               <IoMdMenu
//                 className={`text-[30px] absolute top-0 ${
//                   mode?.light ? "text-[#1F1E1E]" : "text-white"
//                 } right-1.5 self-center`}
//               />
//             ) : (
//               <IoIosCloseCircleOutline
//                 className={`text-[30px] absolute top-0  ${
//                   mode?.light ? "text-[#1F1E1E]" : "text-white"
//                 } right-1.5 self-center`}
//               />
//             )}
//           </div>
//         </div>

//         {/* Shared wrapper for nav + hover content */}
//         <div
//           className="relative"
//           onMouseEnter={() => {}}
//           onMouseLeave={() => setHoveredLink(null)}
//         >
//           {/* Nav Links */}
//           <nav
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               isClick ? "h-auto opacity-100" : "h-0 opacity-0"
//             }`}
//           >
//             <ul className="flex flex-col gap-4 p-10 text-white xl:flex-row md:p-4">
//               {navLinks.map((navLink) => {
//                 const isActive =
//                   pathname === navLink.href ||
//                   (pathname.startsWith(navLink.href) && navLink.href !== "/");

//                 return (
//                   <li
//                     key={navLink.id}
//                     onMouseEnter={() =>
//                       isClick && setHoveredLink(navLink.name.toLowerCase())
//                     }
//                     className="cursor-pointer"
//                   >
//                     <Link
//                       href={navLink.href}
//                       className={`transition-all duration-500 ease-in-out ${
//                         mode?.light ? "text-[#1f1e1e]" : "text-white"
//                       } ${
//                         isActive ? "text-primary" : "text-[#666362]"
//                       } text-[16px] font-bold lg:text-[25px] xl:text-[60px] hover:text-primary`}
//                       onClick={() => setIsClick(!isClick)}
//                     >
//                       {navLink.name}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Hover Panel */}
//           {isClick && hoveredLink && (
//             <div className="hidden lg:flex  lg:absolute lg:left-0 lg:top-full lg:w-full lg:z-40">
//               {(hoveredLink === null || hoveredLink === "home") && (
//                 <div className="flex p-4 justify-between items-center xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-[#f5f5f5]">
//                   <div className="w-[50%] h-full lg:pt-[50px] xl:pt-[80px] ">
//                     <h1 className="text-[40px] text-[#1F1E1E] ">
//                       Full-stack Engineer With Experience{" "}
//                       <span className="text-primary">
//                         {" "}
//                         In Building Scalable Digital Solutions{" "}
//                       </span>
//                     </h1>
//                     <p className="text-[#1f1e1e] text-[16px] font-light">
//                       I am a versatile Full-Stack Engineer with a strong
//                       foundation in frontend development, a passion for building
//                       scalable digital solutions, and a proven track record of
//                       quickly adapting to new technologies and leading
//                       high-impact projects across fintech, edtech, logistics,
//                       and enterprise environments.
//                     </p>
//                   </div>
//                   <div className="w-[50%] h-full pt-[70px]">
//                     {/* Animation code here */}
//                     <div className="flex flex-col  items-center h-full">
//                       <div className="card relative rounded-full transition-all duration-1000 w-[300px] h-[300px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] bg-[rgba(0,184,177,0.3)]">
//                         <div
//                           className="circle absolute rounded-full inset-[20px] md:inset-[15px] sm:inset-[10px]"
//                           style={{
//                             backgroundColor: "rgba(0, 184, 177, 0.15)",
//                             transitionDelay: "0.1s",
//                           }}
//                         ></div>
//                         <div
//                           className="circle absolute rounded-full inset-[40px] md:inset-[30px] sm:inset-[20px]"
//                           style={{
//                             backgroundColor: "rgba(0, 184, 177, 0.25)",
//                             transitionDelay: "0.2s",
//                           }}
//                         ></div>
//                         <div
//                           className="circle absolute rounded-full inset-[60px] md:inset-[45px] sm:inset-[30px]"
//                           style={{
//                             backgroundColor: "rgba(0, 184, 177, 0.35)",
//                             transitionDelay: "0.3s",
//                           }}
//                         ></div>
//                         <div
//                           className="circle absolute rounded-full inset-[80px] md:inset-[60px] sm:inset-[40px]"
//                           style={{
//                             backgroundColor: "rgba(0, 184, 177, 0.45)",
//                             transitionDelay: "0.4s",
//                           }}
//                         ></div>
//                         <div
//                           className="circle absolute rounded-full inset-[100px] md:inset-[75px] sm:inset-[50px]"
//                           style={{
//                             backgroundColor: "rgba(0, 184, 177, 0.6)",
//                             transitionDelay: "0.5s",
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {hoveredLink === "about" && (
//                 <div className="p-3 xl:w-full xl:h-[800px] flex justify-between border border-solid border-[#666362] xl:bg-[#f5f5f5]">
//                   <div className="w-[60%] h-full pt-[50px] ">
//                     <h3 className="text-primary text-sm">
//                       Hi, I am Tosin Mayowa
//                     </h3>
//                     <h1 className="text-[40px] text-[#1F1E1E] ">
//                       I am a Full-stack Engineer with 3years Experience
//                     </h1>
//                     <h4 className="text-[#1F1E1E] font-extrabold">
//                       Tech Stack: React.js, Next.js, Typescript,Javascript,React
//                       Testing Library,Node.js,Supabase
//                     </h4>
//                     <p className="text-[#1f1e1e] text-[16px] font-light mt-[5px]">
//                       I am a versatile Full-Stack Engineer with a strong
//                       foundation in frontend development, a passion for building
//                       scalable digital solutions, and a proven track record of
//                       quickly adapting to new technologies and leading
//                       high-impact projects across fintech, edtech, logistics,
//                       and enterprise environments.From transforming Figma
//                       designs into pixel-perfect, responsive user interfaces
//                       using React.js, Next.js, TypeScript, and Tailwind CSS, to
//                       diving deep into C# and ASP.NET to deliver
//                       enterprise-grade banking solutions, I thrive at the
//                       intersection of clean design, performance optimization,
//                       and business impact.
//                     </p>
//                   </div>
//                   {/* profile image */}
//                   <div className="w-[40%] h-full lg:mt-[20px] xl:mt-0">
//                     <Image
//                       src="/image/mayowa.jpg"
//                       alt=""
//                       width={600}
//                       height={600}
//                       className="w-full h-[60%] lg:object-contain"
//                     />
//                   </div>
//                 </div>
//               )}
//               {hoveredLink === "projects" && (
//                 <div className="xl:w-full xl:h-[800px] border flex flex-col mt-[80px] lg:flex-row lg:flex-wrap lg:p-4  border-solid border-[#666362] xl:bg-[#f5f5f5]">
//                   {projects?.map((project) => (
//                     <div
//                       key={project.id}
//                       className="group flex flex-col lg:ml-4 justify-center items-center 
//                               w-[200px] h-[300px] border border-solid border-black  bg-cover bg-center "
//                       style={{
//                         backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.imgUrl})`,
//                       }}
//                     >
//                       <h2 className="text-white text-center text-[18px]">
//                         {project.title}
//                       </h2>
//                       <p className="text-white text-[12px] mt-4 text-center font-light w-[70%] flex justify-center flex-wrap">
//                         {project.stack}
//                       </p>
//                       <Link
//                         href={`/projects/${project.id}`}
//                         onClick={() => {
//                           // e.preventDefault();
//                           setIsClick(prev=>!prev);
                          
//                         }}
//                         className="transition-all duration-500 ease-in-out w-[60%] text-white text-center opacity-0 group-hover:opacity-100 h-[30px] flex justify-center items-center mt-3  rounded-[8px] self-center bg-primary cursor-pointer "
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {hoveredLink === "contact" && (
//                 <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-[#f5f5f5]">
//                     <section className="mt-[80px] h-screen   w-screen bg-[#f5f5f5] flex flex-col items-center ">
//         <div className="w-full md:w-[70%] h-auto flex flex-col p-2 ">
//           <h1 className="text-[30px] lg:text-[60px] font-extrabold text-[#666362] self-start">
//             Contact
//           </h1>
//           {/* line */}
//           <div className="w-[100%] bg-[#666362] h-[3px] md:h-[5px]"></div>
//         </div>
//         {/* end title */}
//         <div className="w-full p-2 md:w-[70%] md:p-0 h-auto flex flex-col md:flex-row mt-4">
//           <div className="w-full md:w-[70%] h-auto flex ">
//             <h3 className="text-[20px] font-extrabold text-[#666362]">
//               E-MAIL
//             </h3>
//             <div className=" h-auto ml-[20px] group">
//               <p className="text-[18px] font-bold text-[#666362]  cursor-pointer mt-[2px]">
//                 toss800@gmail.com
//               </p>
//               <div className="w-[120%] h-[2px] bg-none border border-none">
//                 <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
//               </div>
//             </div>
//           </div>
//           {/* socials */}
//           <div className="w-[70%] h-auto flex mt-[15px] md:mt-0">
//             <h3 className="text-[20px] font-extrabold text-[#666362]">
//               SOCIALS
//             </h3>
//             <div>
//               <div className=" h-auto ml-[20px] group self-end flex flex-col ">
//                 <Link
//                   href="https://www.linkedin.com/in/mayowa-adejumola-389992137/"
//                   className="text-[18px] font-bold text-[#666362] flex items-end cursor-pointer"
//                 >
//                   <LuExternalLink className="self-center" />
//                   <span className="self-end ml-[2px]">Linkedin</span>
//                 </Link>
//                 <div className="w-[120%] h-[2px] bg-none border border-none mt-0">
//                   <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
//                 </div>
//               </div>
//               <div className=" h-auto ml-[20px] group self-end flex flex-col mt-[15px]">
//                 <Link
//                   href="https://www.youtube.com/@idigixwebdesignhub"
//                   className="text-[18px] font-bold text-[#666362] flex items-end cursor-pointer"
//                 >
//                   <LuExternalLink className="self-center" />
//                   <span className="self-end ml-[2px]">Youtube</span>
//                 </Link>
//                 <div className="w-[120%] h-[2px] bg-none border border-none mt-0">
//                   <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
//                 </div>
//               </div>
//               <div className=" h-auto ml-[20px] group self-end flex flex-col mt-[15px]">
//                 <Link
//                   href="https://github.com/Tosin-Mayowa"
//                   className="text-[18px] font-bold text-[#666362] flex items-end cursor-pointer"
//                 >
//                   <LuExternalLink className="self-center" />
//                   <span className="self-end ml-[2px]">Github</span>
//                 </Link>
//                 <div className="w-[120%] h-[2px] bg-none border border-none mt-0">
//                   <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> 
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// // "use client";
// // import { IoMdMenu } from "react-icons/io";
// // import { IoIosCloseCircleOutline } from "react-icons/io";
// // import Link from "next/link";
// // import { useContext, useState } from "react";
// // import { ThemeContext } from "@/app/_lib/Context";
// // import { usePathname } from "next/navigation";

// // const navLinks = [
// //   { id: 1, name: "Home", href: "/" },
// //   { id: 2, name: "About", href: "/about" },
// //   { id: 3, name: "Projects", href: "/projects" },
// //   { id: 4, name: "Contact", href: "/contact" },
// // ];

// // export const Header: React.FC = () => {
// //   const [isClick, setIsClick] = useState<boolean>(false);
// //   const mode = useContext(ThemeContext);
// //   const pathname = usePathname();
// //   const [hoveredLink, setHoveredLink] = useState<string | null>(null);

// //   const handleMouseEnter = (name: string) => {
// //     if (isClick) {
// //       setHoveredLink(name.toLowerCase());
// //     }
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredLink(null);
// //   };

// //   return (
// //     <>
// //       <header
// //         className={`fixed top-0 left-0 z-50 w-screen transition-all duration-500 ease-in-out overflow-hidden ${
// //           isClick ? "h-screen border-none bg-[#f5f5f5]" : "h-[80px]"
// //         }`}
// //       >
// //         <div className="p-4 text-white font-bold flex justify-between">
// //           <h1
// //             className={`text-[30px] flex ${
// //               mode?.light ? "text-primary" : "text-secondary"
// //             }`}
// //           >
// //             Tosin
// //           </h1>

// //           <div
// //             className="relative h-[50px] flex cursor-pointer"
// //             onClick={() => setIsClick(!isClick)}
// //           >
// //             {!isClick ? (
// //               <IoMdMenu
// //                 className={`text-[30px] absolute top-0 ${
// //                   mode?.light ? "text-[#1F1E1E]" : "text-white"
// //                 } right-1.5 self-center`}
// //               />
// //             ) : (
// //               <IoIosCloseCircleOutline
// //                 className={`text-[30px] absolute top-0 ${
// //                   mode?.light ? "text-[#1F1E1E]" : "text-white"
// //                 } right-1.5 self-center`}
// //               />
// //             )}
// //           </div>
// //         </div>

// //         <div className="relative">
// //           {/* Nav Links */}
// //           <nav
// //             className={`transition-all duration-500 ease-in-out overflow-hidden ${
// //               isClick ? "h-auto opacity-100" : "h-0 opacity-0"
// //             }`}
// //           >
// //             <ul className="flex flex-col gap-4 p-4 text-white lg:flex-row">
// //               {navLinks?.map((navLink) => {
// //                 const isActive =
// //                   pathname === navLink.href ||
// //                   (pathname.startsWith(navLink.href) && navLink.href !== "/");

// //                 return (
// //                   <li
// //                     key={navLink.id}
// //                     onMouseEnter={() => handleMouseEnter(navLink.name)}
// //                     onMouseLeave={handleMouseLeave}
// //                   >
// //                     <Link
// //                       href={navLink.href}
// //                       className={`transition-all duration-500 ease-in-out ${
// //                         mode?.light ? "text-[#1f1e1e]" : "text-white"
// //                       } ${
// //                         isActive ? "text-primary" : "text-[#666362]"
// //                       } text-[16px] font-bold lg:text-[60px] hover:text-primary`}
// //                     >
// //                       {navLink.name}
// //                     </Link>
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </nav>

// //           {/* Hover content below nav */}
// //           {isClick && hoveredLink && (
// //             <div
// //               className="absolute left-0 top-full w-full z-40"
// //               onMouseEnter={() => setHoveredLink(hoveredLink)}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               {hoveredLink === "home" && (
// //                 <div className="xl:w-full xl:h-[700px] border border-solid border-[#666362] xl:bg-primary">
// //                   {/* Home content */}
// //                 </div>
// //               )}
// //               {hoveredLink === "about" && (
// //                 <div className="xl:w-full xl:h-[900px] border border-solid border-[#666362] xl:bg-red-600">
// //                   {/* About content */}
// //                 </div>
// //               )}
// //               {hoveredLink === "projects" && (
// //                 <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-green-600">
// //                   {/* Projects content */}
// //                 </div>
// //               )}
// //               {hoveredLink === "contact" && (
// //                 <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-blue-600">
// //                   {/* Contact content */}
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //         {/* h */}
// //       </header>
// //     </>
// //   );
// // };
