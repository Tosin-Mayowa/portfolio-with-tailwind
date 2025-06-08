"use client"
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "@/app/_lib/Context";

export const Header: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const mode=useContext(ThemeContext)

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-screen  transition-all duration-500 ease-in-out overflow-hidden ${
          isClick ? "h-screen border-none bg-black" : "h-[80px]"
        }`}
      >
        <div className="p-4 text-white font-bold flex justify-between">
          <h1 className={`text-[30px] flex ${mode?.light?"text-primary":"text-secondary"}`}>Tosin</h1>

          <div
            className="relative h-[50px] flex cursor-pointer"
            onClick={() => setIsClick(!isClick)}
          >
            {!isClick ? (
              <IoMdMenu className={`text-[30px] absolute top-0 ${mode?.light?"text-[#1F1E1E]":"text-white"} right-1.5 self-center`} />
            ) : (
              <IoIosCloseCircleOutline className={`text-[30px] absolute top-0 ${mode?.light?"text-[#1F1E1E]":"text-white"} right-1.5 self-center`} />
            )}
          </div>
        </div>

        <nav
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isClick ? "h-[60%] opacity-100" : "h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 p-4 text-white">
            <li>
              <Link href="#" className="text-[16px] font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};













































// "use client"
// import { IoMdMenu } from "react-icons/io";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Link from "next/link";
// import { useState } from "react";
// import { CiGlobe } from "react-icons/ci";

// export const Header:React.FC=()=>{
// const [isClick,setIsClick]=useState<boolean>(false)
//     return (
//         <>
           
//     <header
//       className={`w-screen transition-all duration-500 ease-in-out overflow-hidden ${
//         isClick ? "h-screen border-none" : "h-[80px]"
//       }`}
//     >
//       <div className="p-4 text-white font-bold flex justify-between">
//         <h1 className="text-[30px] text-secondary flex "> 
//           {/* <CiGlobe className="text-[25px] text-secondary self-center"/> */}
//          Tosin</h1>

//       <div
//         className="relative h-[50px] flex  cursor-pointer"
//         onClick={() => setIsClick(!isClick)}
//       >
//         {!isClick ? (
//           <IoMdMenu className="text-[30px] absolute top-0 text-white right-1.5 self-center" />
//         ) : (
//           <IoIosCloseCircleOutline className="text-[30px] absolute top-0 text-white right-1.5 self-center" />
//         )}
//       </div>
// </div>
//       <nav
//         className={`transition-all duration-500 ease-in-out overflow-hidden ${
//           isClick ? "h-[60%] opacity-100" : "h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-4 p-4 text-white">
//           <li>
//             <Link href="#" className="text-[16px] font-bold">Home</Link>
//           </li>
//           <li>
//             <Link href="#">About</Link>
//           </li>
//           <li>
//             <Link href="#">Projects</Link>
//           </li>
//           <li>
//             <Link href="#">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//         </>
//     )
// }
