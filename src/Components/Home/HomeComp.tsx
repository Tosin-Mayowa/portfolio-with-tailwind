"use client";
import { ThemeContext } from "@/app/_lib/Context";
import { useContext, useState } from "react";

export const HomeComp = () => {
  const mode = useContext(ThemeContext);
  return (
    <>
      <section className="w-screen h-screen">
        {/* left */}
        <div
          className={`w-full h-full flex items-center justify-center lg:h-[50%] xl:h-full lg:mt-[100px] xl:mt-0 ${
            mode?.light ? "bg-backgroundLight" : "bg-backgroundDark"
          } flex flex-col justify-center items-center`}
        >
          <div className="w-full h-[60%] p-2 border border-solid border-white md:w-[90%]  flex flex-col small:h-[50%] xmd:w-[80%]  xmd:h-[50%] lg:w-[80%] lg:h-full lg:justify-center">
            <h1
              className={`text-center text-[30px] small:text-[35px] md:text-[55px] lg:text-[60px] ${
                mode?.light ? "text-[#1f1e1e]" : "text-white"
              }`}
            >
              {" "}
              Clean Code, Smart
              <span
                className={`${mode?.light ? "text-primary" : "text-secondary"}`}
              >
                {" "}
                Features, Full-Stack Solutions
              </span>{" "}
              <br />
            </h1>
            <p
              className={`${
                mode?.light ? "text-[#1F1E1E]" : "text-white"
              } text-center font-light text-[14px] mt-[10px] small:text-[15px] md:mt-[15px] md:text-[18px] lg:w-[80%] lg:self-center`}
            >
              I am a versatile Full-Stack Engineer with a strong foundation in
              frontend development, a passion for building scalable digital
              solutions, and a proven track record of quickly adapting to new
              technologies and leading high-impact projects across fintech,
              edtech, logistics, and enterprise environments.
            </p>
            <button
              className={`w-[50%] h-[40px] transition-colors duration-300 ease-in-out font-bold text-[14px] mt-[20px] self-center bg-none rounded-[10px] border border-solid border-primary ${
                mode?.light ? "hover:bg-primary" : "hover:bg-secondary"
              } ${mode?.light ? "hover:text-white" : "hover:text-black"}
         md:mt-[15px] md:text-[20px] xmd:mt-[25px] lg:mt-[30px] lg:h-[60px] ${
           mode?.light ? "text-[#1f1e1e]" : "text-white"
         }`}
            >
              My projects
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="hidden lg:flex xl:hidden xmd:block justify-center h-full w-full">
  <div className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px]">
    {/* Animated Card */}
    <div className="card relative w-full h-full rounded-full bg-[rgba(0,184,177,0.3)] transition-all duration-1000">
      <div className="circle absolute rounded-full inset-[20px]" style={{ backgroundColor: "rgba(0, 184, 177, 0.15)", transitionDelay: "0.1s" }}></div>
      <div className="circle absolute rounded-full inset-[40px]" style={{ backgroundColor: "rgba(0, 184, 177, 0.25)", transitionDelay: "0.2s" }}></div>
      <div className="circle absolute rounded-full inset-[60px]" style={{ backgroundColor: "rgba(0, 184, 177, 0.35)", transitionDelay: "0.3s" }}></div>
      <div className="circle absolute rounded-full inset-[80px]" style={{ backgroundColor: "rgba(0, 184, 177, 0.45)", transitionDelay: "0.4s" }}></div>
      <div className="circle absolute rounded-full inset-[100px]" style={{ backgroundColor: "rgba(0, 184, 177, 0.6)", transitionDelay: "0.5s" }}></div>
    </div>
  </div>
</div>

        {/* end right */}
      </section>
    </>
  );
};
