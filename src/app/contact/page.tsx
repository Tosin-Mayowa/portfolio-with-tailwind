import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
export default function Contact() {
  return (
    <>
      <section className="mt-[80px] h-screen pt-[100px] md:pt-0 w-screen bg-[#f5f5f5] flex flex-col items-center ">
        <div className="w-full md:w-[70%] h-auto flex flex-col p-2 md:p-0 md:items-center md:mt-[200px]">
          <h1 className="text-[30px] lg:text-[60px] font-extrabold text-[#666362] self-start">
            Contact
          </h1>
          {/* line */}
          <div className="w-[100%] bg-[#666362] h-[3px] md:h-[5px]"></div>
        </div>
        {/* end title */}
        <div className="w-full p-2 md:w-[70%] md:p-0 h-auto flex flex-col lg:flex-row mt-4">
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
          <div className="w-[70%] h-auto flex mt-[15px] md:mt-[20px] lg:mt-0">
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
    </>
  );
}
