
"use client";
import { ThemeContext } from "@/app/_lib/Context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const HomeComp = () => {
  const mode = useContext(ThemeContext);
  const router = useRouter();

  return (
    <section
      className={`w-screen min-h-screen ${
        mode?.light ? "bg-backgroundLight" : "bg-backgroundDark"
      }`}
    >
      {/* 
        FIX: Two-column layout on large screens.
        Previously the right column had lg:hidden xl:hidden which made it ALWAYS hidden.
        Now it's a proper responsive flex row: stacked on mobile, side-by-side on lg+.
      */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-20 lg:py-[60px] lg:px-2 xl:px-20 gap-8">

        {/* ── Left: Text Content ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1
            className={`text-[28px] small:text-[34px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-tight ${
              mode?.light ? "text-[#666362]" : "text-white"
            }`}
          >
            Clean Code, Smart Features
            <span
              className={`block ${
                mode?.light ? "text-primary" : "text-secondary"
              }`}
            >
              Full-Stack Solutions
            </span>
          </h1>

          <p
            className={`${
              mode?.light ? "text-[#666362]" : "text-white"
            } font-light text-[14px] mt-4 small:text-[15px] md:text-[17px] lg:text-[16px] xl:text-[18px] max-w-[600px]`}
          >
            I am a versatile Full-Stack Engineer with a strong foundation in
            frontend development, a passion for building scalable digital
            solutions, and a proven track record of quickly adapting to new
            technologies and leading high-impact projects across fintech,
            edtech, logistics, and enterprise environments.
          </p>

          <button
            className={`cursor-pointer w-[180px] md:w-[220px] h-[44px] lg:h-[54px] transition-colors duration-300 ease-in-out font-bold text-[14px] md:text-[16px] mt-6 bg-primary rounded-[10px] border-none text-white
              ${mode?.light ? "hover:bg-[#1f9692] hover:text-white" : "hover:bg-secondary hover:text-black"}`}
            onClick={() => router.push("/projects")}
          >
            My projects
          </button>
        </div>

        {/* ── Right: Animated Circles ──
            FIX: Removed the contradictory lg:hidden xl:hidden classes.
            Now hidden on mobile/tablet (flex would crowd small screens), visible from lg up.
        */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
          <div className="relative w-[320px] h-[320px] xl:w-[420px] xl:h-[420px]">
            {/* Outermost ring */}
            <div className="absolute inset-0 rounded-full bg-[rgba(0,184,177,0.15)] animate-pulse" />
            <div
              className="absolute rounded-full bg-[rgba(0,184,177,0.20)]"
              style={{ inset: "10%" }}
            />
            <div
              className="absolute rounded-full bg-[rgba(0,184,177,0.28)]"
              style={{ inset: "20%" }}
            />
            <div
              className="absolute rounded-full bg-[rgba(0,184,177,0.38)]"
              style={{ inset: "30%" }}
            />
            <div
              className="absolute rounded-full bg-[rgba(0,184,177,0.50)]"
              style={{ inset: "40%" }}
            />
            {/* Core */}
            <div
              className="absolute rounded-full bg-[rgba(0,184,177,0.70)]"
              style={{ inset: "50%" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};









// "use client";
// import { ThemeContext } from "@/app/_lib/Context";
// import { useContext } from "react";
// import { useRouter } from "next/navigation";
// export const HomeComp = () => {
//   const mode = useContext(ThemeContext);
//   const router = useRouter();
//   return (
//     <>
//       <section className="w-screen h-screen bg-[#f5f5f5]">
//         {/* left */}
//         <div
//           className={`w-full h-full flex items-center justify-center lg:h-[50%] xl:h-full lg:mt-[100px] xl:mt-0 ${
//             mode?.light ? "bg-backgroundLight" : "bg-backgroundDark"
//           } flex flex-col justify-center items-center`}
//         >
//           <div className="w-full h-[60%] p-2 border border-solid border-white md:w-[90%]  flex flex-col small:h-[50%] xmd:w-[80%]  xmd:h-[50%] lg:w-[70%] lg:h-full lg:justify-center">
//             <h1
//               className={`text-center text-[30px] small:text-[35px] md:text-[55px] lg:text-[65px] font-bold ${
//                 mode?.light ? "text-[#666362]" : "text-white"
//               }`}
//             >
//               {" "}
//               Clean Code, Smart Features
//               <span
//                 className={`${mode?.light ? "text-primary" : "text-secondary"}`}
//               >
//                 {" "}
//                 Full-Stack Solutions
//               </span>{" "}
//               <br />
//             </h1>
//             <p
//               className={`${
//                 mode?.light ? "text-[#666362]" : "text-white"
//               } text-center font-light text-[14px] mt-[10px] small:text-[15px] md:mt-[15px] md:text-[18px] lg:w-[80%] lg:self-center`}
//             >
//               I am a versatile Full-Stack Engineer with a strong foundation in
//               frontend development, a passion for building scalable digital
//               solutions, and a proven track record of quickly adapting to new
//               technologies and leading high-impact projects across fintech,
//               edtech, logistics, and enterprise environments.
//             </p>
//             <button
//               className={`cursor-pointer w-[50%] h-[40px] transition-colors duration-300 ease-in-out font-bold text-[14px] mt-[20px] self-center bg-primary rounded-[10px] border-none text-white ${
//                 mode?.light ? "hover:bg-[#1f9692]" : "hover:bg-secondary"
//               } ${mode?.light ? "hover:text-white" : "hover:text-black"}
//          md:mt-[15px] md:text-[18px] xmd:mt-[25px] lg:mt-[30px] lg:h-[60px] ${
//            mode?.light ? "text-[#1f1e1e]" : "text-white"
//          }`}
//               onClick={() => router.push("/projects")}
//             >
//               My projects
//             </button>
//           </div>
//         </div>
//         {/* Right */}
//         <div className="hidden lg:hidden xl:hidden xmd:block justify-center h-full w-full">
//           <div className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px]">
//             {/* Animated Card */}
//             <div className="card relative w-full h-full rounded-full bg-[rgba(0,184,177,0.3)] transition-all duration-1000">
//               <div
//                 className="circle absolute rounded-full inset-[20px]"
//                 style={{
//                   backgroundColor: "rgba(0, 184, 177, 0.15)",
//                   transitionDelay: "0.1s",
//                 }}
//               ></div>
//               <div
//                 className="circle absolute rounded-full inset-[40px]"
//                 style={{
//                   backgroundColor: "rgba(0, 184, 177, 0.25)",
//                   transitionDelay: "0.2s",
//                 }}
//               ></div>
//               <div
//                 className="circle absolute rounded-full inset-[60px]"
//                 style={{
//                   backgroundColor: "rgba(0, 184, 177, 0.35)",
//                   transitionDelay: "0.3s",
//                 }}
//               ></div>
//               <div
//                 className="circle absolute rounded-full inset-[80px]"
//                 style={{
//                   backgroundColor: "rgba(0, 184, 177, 0.45)",
//                   transitionDelay: "0.4s",
//                 }}
//               ></div>
//               <div
//                 className="circle absolute rounded-full inset-[100px]"
//                 style={{
//                   backgroundColor: "rgba(0, 184, 177, 0.6)",
//                   transitionDelay: "0.5s",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* end right */}
//       </section>
//     </>
//   );
// };
