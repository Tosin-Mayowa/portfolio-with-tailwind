"use client";

import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "@/app/_lib/Context";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  { id: 4, name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const mode = useContext(ThemeContext);
  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-screen transition-all duration-500 ease-in-out overflow-hidden ${
          isClick ? "h-screen border-none bg-[#f5f5f5]" : "h-[80px]"
        }`}
      >
        <div className="p-4 text-white font-bold flex justify-between">
          <h1
            className={`text-[30px] flex ${
              mode?.light ? "text-primary" : "text-secondary"
            }`}
          >
            Tosin
          </h1>

          <div
            className="relative h-[50px] flex cursor-pointer"
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
                className={`text-[30px] absolute top-0 ${
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
            <ul className="flex flex-col gap-4 p-4 text-white lg:flex-row">
              {navLinks.map((navLink) => {
                const isActive =
                  pathname === navLink.href ||
                  (pathname.startsWith(navLink.href) &&
                    navLink.href !== "/");

                return (
                  <li
                    key={navLink.id}
                    onMouseEnter={() =>
                      isClick && setHoveredLink(navLink.name.toLowerCase())
                    }
                  >
                    <Link
                      href={navLink.href}
                      className={`transition-all duration-500 ease-in-out ${
                        mode?.light ? "text-[#1f1e1e]" : "text-white"
                      } ${
                        isActive
                          ? "text-primary"
                          : "text-[#666362]"
                      } text-[16px] font-bold lg:text-[60px] hover:text-primary`}
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
            <div className="absolute left-0 top-full w-full z-40">
              {hoveredLink === "home" && (
                <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-primary" />
              )}
              {hoveredLink === "about" && (
                <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-red-600" />
              )}
              {hoveredLink === "projects" && (
                <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-green-600" />
              )}
              {hoveredLink === "contact" && (
                <div className="xl:w-full xl:h-[800px] border border-solid border-[#666362] xl:bg-blue-600" />
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

