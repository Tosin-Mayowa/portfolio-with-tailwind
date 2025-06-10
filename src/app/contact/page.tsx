


export default function Contact(){
    return(
        <>
       <section className="mt-[80px] h-screen w-screen bg-[#f5f5f5] flex flex-col items-center ">
     <div className="w-[70%] h-auto flex flex-col items-center xl:mt-[200px]">
       <h1 className="text-[60px] font-extrabold text-[#666362] self-start">Contact</h1>
       {/* line */}
       <div className="w-[100%] bg-[#666362] h-[5px]"></div>
     </div>
      <div className="w-[70%] h-auto flex mt-4">
          <div className="w-[70%] h-auto flex ">
            <h3 className="text-[20px] font-extrabold text-[#666362]">E-MAIL</h3>
            <div className="self-center h-auto ml-[20px]">
              <p className="text-[18px] font-bold text-[#666362] group cursor-pointer">toss800@gmail.com</p>
              <div className="w-[120%] h-[5px] bg-transparent ">
                <div className="transition-all duration-500 ease-in-out w-full h-full group-hover:bg-[#666362] "></div>
              </div>
            </div>
          </div>
        </div>
       </section>
        </>
    )
}