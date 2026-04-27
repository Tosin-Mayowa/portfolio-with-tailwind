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
     
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-20 lg:py-[60px] lg:px-2 xl:px-20 gap-8">

      
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

       
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
          <div className="relative w-[320px] h-[320px] xl:w-[420px] xl:h-[420px]">
           
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








