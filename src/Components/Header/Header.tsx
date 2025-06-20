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
  const [isClick, setIsClick] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>("home");
  const mode = useContext(ThemeContext);
  const pathname = usePathname();
  
  console.log({pathname,arp:pathname.split('/')});
  
useEffect(() => {
  
  let pathIndex=pathname.split('/')[1]
  if (hoveredLink === null&&pathIndex!==""&& isClick) {
    setHoveredLink(pathIndex);
  }
  if (hoveredLink === null&&pathIndex===""&&isClick) {
    setHoveredLink("home");
  }
  
}, [hoveredLink,isClick]);


  useEffect(() => {
    const handleScroll = () => {
      mode?.handleScroll(window.scrollY > 50); // adjust scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-100 w-screen transition-all duration-500 ease-in-out overflow-hidden ${
          isClick ? "h-screen border-none bg-[#f5f5f5]" : "h-[80px]"
        } ${mode?.scrolled ? "bg-[#f5f5f5]" : "bg-white"}`}
      >
        <div className="p-8 text-white font-bold z-100 flex justify-between">
          <h1
            className={`text-[30px] flex ${
              mode?.light ? "text-primary" : "text-secondary"
            }`}
          >
            Tosin
          </h1>

          <div
            className="relative h-[50px] flex cursor-pointer mt-2 lg:mt-[2px] self-center"
            onClick={() => setIsClick(!isClick)}
          >
            {!isClick ? (
              <IoMdMenu
                className={`text-[30px] absolute top-0 ${
                  mode?.light ? "text-[#1F1E1E]" : "text-white"
                } right-1.5 self-center`}
              />
            ) : (
              <IoIosCloseCircleOutline
                className={`text-[30px] absolute top-0  ${
                  mode?.light ? "text-[#1F1E1E]" : "text-white"
                } right-1.5 self-center`}
              />
            )}
          </div>
        </div>

        {/* Shared wrapper for nav + hover content */}
        <div
          className="relative"
          onMouseEnter={() => {}}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {/* Nav Links */}
          <nav
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isClick ? "h-auto opacity-100" : "h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-4 p-10 text-white xl:flex-row md:p-4">
              {navLinks.map((navLink) => {
                const isActive =
                  pathname === navLink.href ||
                  (pathname.startsWith(navLink.href) && navLink.href !== "/");

                return (
                  <li
                    key={navLink.id}
                    onMouseEnter={() =>
                      isClick && setHoveredLink(navLink.name.toLowerCase())
                    }
                    className="cursor-pointer"
                  >
                    <Link
                      href={navLink.href}
                      className={`transition-all duration-500 ease-in-out ${
                        mode?.light ? "text-[#1f1e1e]" : "text-white"
                      } ${
                        isActive ? "text-primary" : "text-[#666362]"
                      } text-[16px] font-bold lg:text-[25px] xl:text-[60px] hover:text-primary`}
                      onClick={() => setIsClick(!isClick)}
                    >
                      {navLink.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hover Panel */}
          {isClick && hoveredLink && (
            <div className="hidden lg:flex  lg:absolute lg:left-0 lg:top-full lg:w-full lg:z-40">
              {(hoveredLink === null || hoveredLink === "home") && (
                <div className="flex p-4 justify-between items-center xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-[#f5f5f5]">
                  <div className="w-[50%] h-full lg:pt-[50px] xl:pt-[80px] ">
                    <h1 className="text-[40px] text-[#1F1E1E] ">
                      Full-stack Engineer With Experience{" "}
                      <span className="text-primary">
                        {" "}
                        In Building Scalable Digital Solutions{" "}
                      </span>
                    </h1>
                    <p className="text-[#1f1e1e] text-[16px] font-light">
                      I am a versatile Full-Stack Engineer with a strong
                      foundation in frontend development, a passion for building
                      scalable digital solutions, and a proven track record of
                      quickly adapting to new technologies and leading
                      high-impact projects across fintech, edtech, logistics,
                      and enterprise environments.
                    </p>
                  </div>
                  <div className="w-[50%] h-full pt-[70px]">
                    {/* Animation code here */}
                    <div className="flex flex-col  items-center h-full">
                      <div className="card relative rounded-full transition-all duration-1000 w-[300px] h-[300px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] bg-[rgba(0,184,177,0.3)]">
                        <div
                          className="circle absolute rounded-full inset-[20px] md:inset-[15px] sm:inset-[10px]"
                          style={{
                            backgroundColor: "rgba(0, 184, 177, 0.15)",
                            transitionDelay: "0.1s",
                          }}
                        ></div>
                        <div
                          className="circle absolute rounded-full inset-[40px] md:inset-[30px] sm:inset-[20px]"
                          style={{
                            backgroundColor: "rgba(0, 184, 177, 0.25)",
                            transitionDelay: "0.2s",
                          }}
                        ></div>
                        <div
                          className="circle absolute rounded-full inset-[60px] md:inset-[45px] sm:inset-[30px]"
                          style={{
                            backgroundColor: "rgba(0, 184, 177, 0.35)",
                            transitionDelay: "0.3s",
                          }}
                        ></div>
                        <div
                          className="circle absolute rounded-full inset-[80px] md:inset-[60px] sm:inset-[40px]"
                          style={{
                            backgroundColor: "rgba(0, 184, 177, 0.45)",
                            transitionDelay: "0.4s",
                          }}
                        ></div>
                        <div
                          className="circle absolute rounded-full inset-[100px] md:inset-[75px] sm:inset-[50px]"
                          style={{
                            backgroundColor: "rgba(0, 184, 177, 0.6)",
                            transitionDelay: "0.5s",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {hoveredLink === "about" && (
                <div className="p-3 xl:w-full xl:h-[800px] flex justify-between border border-solid border-[#666362] xl:bg-[#f5f5f5]">
                  <div className="w-[60%] h-full pt-[50px] ">
                    <h3 className="text-primary text-sm">
                      Hi, I am Tosin Mayowa
                    </h3>
                    <h1 className="text-[40px] text-[#1F1E1E] ">
                      I am a Full-stack Engineer with 3years Experience
                    </h1>
                    <h4 className="text-[#1F1E1E] font-extrabold">
                      Tech Stack: React.js, Next.js, Typescript,Javascript,React
                      Testing Library,Node.js,Supabase
                    </h4>
                    <p className="text-[#1f1e1e] text-[16px] font-light mt-[5px]">
                      I am a versatile Full-Stack Engineer with a strong
                      foundation in frontend development, a passion for building
                      scalable digital solutions, and a proven track record of
                      quickly adapting to new technologies and leading
                      high-impact projects across fintech, edtech, logistics,
                      and enterprise environments.From transforming Figma
                      designs into pixel-perfect, responsive user interfaces
                      using React.js, Next.js, TypeScript, and Tailwind CSS, to
                      diving deep into C# and ASP.NET to deliver
                      enterprise-grade banking solutions, I thrive at the
                      intersection of clean design, performance optimization,
                      and business impact.
                    </p>
                  </div>
                  {/* profile image */}
                  <div className="w-[40%] h-full lg:mt-[20px] xl:mt-0">
                    <Image
                      src="/image/mayowa.jpg"
                      alt=""
                      width={600}
                      height={600}
                      className="w-full h-[60%] lg:object-contain"
                    />
                  </div>
                </div>
              )}
              {hoveredLink === "projects" && (
                <div className="xl:w-full xl:h-[800px] border flex flex-col mt-[80px] lg:flex-row lg:flex-wrap lg:p-4  border-solid border-[#666362] xl:bg-[#f5f5f5]">
                  {projects?.map((project) => (
                    <div
                      key={project.id}
                      className="group flex flex-col lg:ml-4 justify-center items-center 
                              w-[200px] h-[300px] border border-solid border-black  bg-cover bg-center "
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.imgUrl})`,
                      }}
                    >
                      <h2 className="text-white text-center text-[18px]">
                        {project.title}
                      </h2>
                      <p className="text-white text-[12px] mt-4 text-center font-light w-[70%] flex justify-center flex-wrap">
                        {project.stack}
                      </p>
                      <Link
                        href={`/projects/${project.id}`}
                        onClick={() => {
                          // e.preventDefault();
                          setIsClick(prev=>!prev);
                          
                        }}
                        className="transition-all duration-500 ease-in-out w-[60%] text-white text-center opacity-0 group-hover:opacity-100 h-[30px] flex justify-center items-center mt-3  rounded-[8px] self-center bg-primary cursor-pointer "
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              {hoveredLink === "contact" && (
                <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-[#f5f5f5]">
                    <section className="mt-[80px] h-screen   w-screen bg-[#f5f5f5] flex flex-col items-center ">
        <div className="w-full md:w-[70%] h-auto flex flex-col p-2 ">
          <h1 className="text-[30px] lg:text-[60px] font-extrabold text-[#666362] self-start">
            Contact
          </h1>
          {/* line */}
          <div className="w-[100%] bg-[#666362] h-[3px] md:h-[5px]"></div>
        </div>
        {/* end title */}
        <div className="w-full p-2 md:w-[70%] md:p-0 h-auto flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-[70%] h-auto flex ">
            <h3 className="text-[20px] font-extrabold text-[#666362]">
              E-MAIL
            </h3>
            <div className=" h-auto ml-[20px] group">
              <p className="text-[18px] font-bold text-[#666362]  cursor-pointer mt-[2px]">
                toss800@gmail.com
              </p>
              <div className="w-[120%] h-[2px] bg-none border border-none">
                <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
              </div>
            </div>
          </div>
          {/* socials */}
          <div className="w-[70%] h-auto flex mt-[15px] md:mt-0">
            <h3 className="text-[20px] font-extrabold text-[#666362]">
              SOCIALS
            </h3>
            <div>
              <div className=" h-auto ml-[20px] group self-end flex flex-col ">
                <Link
                  href="https://www.linkedin.com/in/mayowa-adejumola-389992137/"
                  className="text-[18px] font-bold text-[#666362] flex items-end cursor-pointer"
                >
                  <LuExternalLink className="self-center" />
                  <span className="self-end ml-[2px]">Linkedin</span>
                </Link>
                <div className="w-[120%] h-[2px] bg-none border border-none mt-0">
                  <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
                </div>
              </div>
              <div className=" h-auto ml-[20px] group self-end flex flex-col mt-[15px]">
                <Link
                  href="https://www.youtube.com/@idigixwebdesignhub"
                  className="text-[18px] font-bold text-[#666362] flex items-end cursor-pointer"
                >
                  <LuExternalLink className="self-center" />
                  <span className="self-end ml-[2px]">Youtube</span>
                </Link>
                <div className="w-[120%] h-[2px] bg-none border border-none mt-0">
                  <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
                </div>
              </div>
              <div className=" h-auto ml-[20px] group self-end flex flex-col mt-[15px]">
                <Link
                  href="https://github.com/Tosin-Mayowa"
                  className="text-[18px] font-bold text-[#666362] flex items-end cursor-pointer"
                >
                  <LuExternalLink className="self-center" />
                  <span className="self-end ml-[2px]">Github</span>
                </Link>
                <div className="w-[120%] h-[2px] bg-none border border-none mt-0">
                  <div className="transition-all duration-500 ease-in-out w-0 h-full group-hover:bg-primary group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

// "use client";
// import { IoMdMenu } from "react-icons/io";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Link from "next/link";
// import { useContext, useState } from "react";
// import { ThemeContext } from "@/app/_lib/Context";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { id: 1, name: "Home", href: "/" },
//   { id: 2, name: "About", href: "/about" },
//   { id: 3, name: "Projects", href: "/projects" },
//   { id: 4, name: "Contact", href: "/contact" },
// ];

// export const Header: React.FC = () => {
//   const [isClick, setIsClick] = useState<boolean>(false);
//   const mode = useContext(ThemeContext);
//   const pathname = usePathname();
//   const [hoveredLink, setHoveredLink] = useState<string | null>(null);

//   const handleMouseEnter = (name: string) => {
//     if (isClick) {
//       setHoveredLink(name.toLowerCase());
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoveredLink(null);
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 z-50 w-screen transition-all duration-500 ease-in-out overflow-hidden ${
//           isClick ? "h-screen border-none bg-[#f5f5f5]" : "h-[80px]"
//         }`}
//       >
//         <div className="p-4 text-white font-bold flex justify-between">
//           <h1
//             className={`text-[30px] flex ${
//               mode?.light ? "text-primary" : "text-secondary"
//             }`}
//           >
//             Tosin
//           </h1>

//           <div
//             className="relative h-[50px] flex cursor-pointer"
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
//                 className={`text-[30px] absolute top-0 ${
//                   mode?.light ? "text-[#1F1E1E]" : "text-white"
//                 } right-1.5 self-center`}
//               />
//             )}
//           </div>
//         </div>

//         <div className="relative">
//           {/* Nav Links */}
//           <nav
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               isClick ? "h-auto opacity-100" : "h-0 opacity-0"
//             }`}
//           >
//             <ul className="flex flex-col gap-4 p-4 text-white lg:flex-row">
//               {navLinks?.map((navLink) => {
//                 const isActive =
//                   pathname === navLink.href ||
//                   (pathname.startsWith(navLink.href) && navLink.href !== "/");

//                 return (
//                   <li
//                     key={navLink.id}
//                     onMouseEnter={() => handleMouseEnter(navLink.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <Link
//                       href={navLink.href}
//                       className={`transition-all duration-500 ease-in-out ${
//                         mode?.light ? "text-[#1f1e1e]" : "text-white"
//                       } ${
//                         isActive ? "text-primary" : "text-[#666362]"
//                       } text-[16px] font-bold lg:text-[60px] hover:text-primary`}
//                     >
//                       {navLink.name}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Hover content below nav */}
//           {isClick && hoveredLink && (
//             <div
//               className="absolute left-0 top-full w-full z-40"
//               onMouseEnter={() => setHoveredLink(hoveredLink)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {hoveredLink === "home" && (
//                 <div className="xl:w-full xl:h-[700px] border border-solid border-[#666362] xl:bg-primary">
//                   {/* Home content */}
//                 </div>
//               )}
//               {hoveredLink === "about" && (
//                 <div className="xl:w-full xl:h-[900px] border border-solid border-[#666362] xl:bg-red-600">
//                   {/* About content */}
//                 </div>
//               )}
//               {hoveredLink === "projects" && (
//                 <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-green-600">
//                   {/* Projects content */}
//                 </div>
//               )}
//               {hoveredLink === "contact" && (
//                 <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-blue-600">
//                   {/* Contact content */}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         {/* h */}
//       </header>
//     </>
//   );
// };
