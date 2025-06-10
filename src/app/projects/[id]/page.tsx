import { projects } from "@/app/_lib/utils";
import Image from "next/image";

import Link from "next/link";

type IParams={
    params:Promise<{id:string}>;
}
export default async function ProjectDetail({params}:IParams){
  const {id} =await params
     const project=projects.find(project=>project.id===Number(id))

    return(
<>

<div className="mt-[80px] flex items-center justify-center bg-white ">
      <div className="w-[80vw] h-[80vh] bg-[#f5f5f5] rounded-lg shadow-xl relative p-6">
       
        {project?.imgUrl && (
  <Image
    src={project.imgUrl}
    alt={project.title ?? "Project Image"}
    width={600}
    height={400}
    className="w-[200px] h-[200px] object-contain mb-4"
  />
)}
        {/* <Image src={project?.imgUrl} alt="" width={600} height={600} className='w-[200px] h-[200px] object-contain'/> */}
        <h2 className="text-2xl font-semibold mb-4 text-[#1f1e1e]">{project?.title}</h2>
        <p className="text-gray-700">{project?.description}</p>
       {project?.link&&<Link href={project?.link} className='text-primary text-sm cursor-pointer hover:border-b hover:border-solid border-primary p-1'>View</Link>
  }     </div>
    </div>
</>
    )
}