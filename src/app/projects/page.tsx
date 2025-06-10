
import Link from "next/link";
import { projects } from "../_lib/utils";



export default function Projects() {
  return (
    <>
      <section className="w-screen h-[1024px] bg-[#f5f5f5] flex flex-col items-center lg:items-start mt-[80px] lg:flex-row lg:flex-wrap lg:p-4 ">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="group  flex flex-col lg:ml-4 justify-center items-center 
          h-[400px] w-[300px] md:w-[80%]  lg:w-[300px] lg:h-[400px] border border-solid border-black mt-8 bg-cover bg-center p-1"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${project.imgUrl})`,
            }}
          >
            <h2 className="text-white text-center text-[20px]">
              {project.title}
            </h2>
            <p className="text-white text-[13px] md:text-[16px] mt-4 text-center font-light w-[80%]">
              {project.stack}
            </p>
            <Link
              href={`/projects/${project.id}`}
              className="transition-all duration-500 text-white ease-in-out w-[60%] 
                text-center opacity-100 xl:opacity-0 group-hover:opacity-100 
                h-[20px] md:h-[40px] flex justify-center items-center mt-3 text-[13px] rounded-[4px] md:rounded-[8px] self-center bg-primary "
            >
              View Details
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
