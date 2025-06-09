import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="w-screen min-h-screen md:h-screen mt-[100px]  md:mt-[80px]">
        <div className="p-3 xl:w-[80%] h-full flex flex-col-reverse justify-center items-center xl-flex-row xl:justify-between  lg:bg-[#f5f5f5]">
          <div className="w-[80%] h-full pt-0  xl:pt-[50px] ">
            <h3 className="text-primary text-sm text-center xl:text-left">
              Hi, I am Tosin Mayowa
            </h3>
            <h1 className="text-[22px] md:text-[40px] text-[#1F1E1E] text-center xl:text-left">
              I am a Full-stack Engineer with 3years Experience
            </h1>
            <h4 className="text-[#1F1E1E] text-sm md:text-[16px] text-center xl:text-left font-extrabold">
              Tech Stack: React.js, Next.js, Typescript,Javascript,React Testing
              Library,Node.js,Supabase
            </h4>
            <p className="text-[#1f1e1e] text-center xl:text-left text-[13px] md:text-[16px] font-light mt-[5px]">
              I am a versatile Full-Stack Engineer with a strong foundation in
              frontend development, a passion for building scalable digital
              solutions, and a proven track record of quickly adapting to new
              technologies and leading high-impact projects across fintech,
              edtech, logistics, and enterprise environments.
              <span className="block mt-2">
                From transforming Figma designs into pixel-perfect, responsive
                user interfaces using React.js, Next.js, TypeScript, and
                Tailwind CSS, to diving deep into C# and ASP.NET to deliver
                enterprise-grade banking solutions, I thrive at the intersection
                of clean design, performance optimization, and business impact.
              </span>
            </p>
            <p className="text-[#1f1e1e] text-center xl:text-left text-[13px] md:text-[16px] font-light mt-[5px]">
              I’ve led engineering teams, collaborated cross-functionally with
              designers and backend developers, and worked directly with
              stakeholders to deliver robust features that are currently live in
              production—empowering decision-makers in finance, education, and
              logistics. Whether it's integrating role-based authentication,
              connecting to Active Directory, exporting dynamic Excel reports,
              or implementing creditworthiness scorecards, I bring clarity,
              ownership, and execution to every project.
            </p>
          </div>
          {/* profile image */}
          <div className="w-[40%] md:w-[80%] h-[50%] lg:mt-[20px] xl:mt-0">
            <Image
              src="/image/mayowa.jpg"
              alt=""
              width={600}
              height={600}
              className="w-full h-[80%] lg:object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
