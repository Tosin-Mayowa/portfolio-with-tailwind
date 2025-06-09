'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import { projects } from '../../app/projects/page';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Link from 'next/link';

interface IParams {
  params: string;
}

export function ProjectIntercept({ params }: IParams): JSX.Element {
  const router = useRouter();
  const project = projects.find(project => project.id === Number(params));

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-xl relative w-full max-w-4xl max-h-[100vh] md:max-h-[70vh] overflow-y-auto p-2 md:p-6">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
          aria-label="Close"
        >
          <IoIosCloseCircleOutline />
        </button>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-6">
          {project?.imgUrl && (
            <div className="flex-shrink-0 w-full sm:w-[200px] h-auto">
              <Image
                src={project.imgUrl}
                alt={project.title ?? 'Project Image'}
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded"
              />
            </div>
          )}

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2 text-[#1f1e1e]">{project?.title}</h2>
            <p className="text-gray-700 mb-4">{project?.description}</p>
            {project?.link && (
              <Link
                href={project.link}
                className="text-primary text-sm underline hover:opacity-80"
              >
                View Project
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}





























// 'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { JSX } from 'react';
// import {projects} from "../../app/projects/page"
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Link from 'next/link';
// interface IParams {
//   params: string;
// }

// export function ProjectIntercept({ params }: IParams): JSX.Element {
//   const router = useRouter();
//   const project=projects.find(project=>project.id===Number(params))
//   const closeModal = () => {
//     router.back(); // This will close the modal and go back to the previous route
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="w-[80vw] h-[80vh] bg-white rounded-lg shadow-xl relative p-6">
//         <button
//           onClick={closeModal}
//           className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black"
//         >
//             <IoIosCloseCircleOutline/>
//           {/* &times; */}
//         </button>
//         {project?.imgUrl && (
//   <Image
//     src={project.imgUrl}
//     alt={project.title ?? "Project Image"}
//     width={600}
//     height={400}
//     className="w-[200px] h-[200px] object-contain mb-4"
//   />
// )}
//         {/* <Image src={project?.imgUrl} alt="" width={600} height={600} className='w-[200px] h-[200px] object-contain'/> */}
//         <h2 className="text-2xl font-semibold mb-4 text-[#1f1e1e]">{project?.title}</h2>
//         <p className="text-gray-700">{project?.description}</p>
//        {project?.link&&<Link href={project?.link} className='text-primary text-sm cursor-pointer hover:border-b hover:border-solid border-primary p-1'>View</Link>
//   }     </div>
//     </div>
//   );
// }
