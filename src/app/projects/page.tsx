import { link } from "fs";
import Link from "next/link";

export const projects = [
  {
    id: 1,
    title: "ILearner",
    imgUrl: "/image/portfolio-pixx.png",
    description:
      "ILearner is a modern, intuitive Learning Management System (LMS) built to transform the way individuals, educators, and institutions deliver and experience online learning. Designed for accessibility and ease-of-use, ILearner enables seamless course creation, student management, assessments, and real-time progress tracking all in one centralized platform. Whether you are a tutor, training organization, or school administrator, ILearner gives you the tools to educate, engage, and evaluate learners from anywhere in the world",
    link: "https://lms-app-njr7.vercel.app/",
    stack: "Next.js,Tailwind css, React Testing Library, Typescript,Git",
  },
  {
    id: 2,
    title: "I-DigixQuiz App",
    imgUrl: "/image/Quizima.png",
    description:
      "i-DigixQuiz is a lightweight and user-friendly quiz application built with React that allows users to set custom questions, navigate through them, and receive a final score upon completion. The app efficiently utilizes local storage to store quiz data, ensuring a seamless experience without requiring a backend.You can either attempt the default quiz or you can create your own quiz",
    link: "https://i-digix-quiz.vercel.app/",
    stack: "React.js,CSS3,Git",
  },
  {
    id: 3,
    title: "PortFolio",
    imgUrl: "",
    description:
      "This is my portfolio, I thought of the design in my head, just at some simple layout from dribble.",
    link: "",
    stack: "Next.js,React.js,Typescript,Tailwind CSS,Git",
  },
  {
    id: 4,
    title: "Dashboard",
    imgUrl: "/image/forbe.png",
    description: "Simple Dashboard Layout",
    link: "https://forbework-app-nkyd.vercel.app/dashboard",
    stack: "Next.js,CSS,Typescript",
  },
  {
    id: 5,
    title: "Regix",
    imgUrl: "/image/regix-1.jpg",
    description:
      "Regix is an educational management and administration system for enhancing school performance.It holds many crucial functions to ensure school management run smoothly. The teachers, staff and other external parties can collaborate easily through a centralized platform.It also bridges communication between the school, students and parents. Some of the essential features on Regix are: Attendance record,Effortless fee payment,effective communication,parent access,students and school vehicle tracker,Inventory management, and many more",
    link: "https://regix-rzay.vercel.app/",
    stack: "React.js,Typescript,Chakra-ui,Nest.js",
  },
  {
    id: 6,
    title: "Shopping Cart",
    imgUrl: "/image/cart.jpg",
    description:
      "This is a shopping cart I built when I was starting up as a frontend developer, the functionality is the thing for me at the time,I intend rebuilding it",
    link: "https://shopping-cart-psi-ten.vercel.app/",
    stack: "React.js,Redux,CSS,Git",
  },
];

export default function Projects() {
  return (
    <>
      <section 
      className="w-screen p-2 h-screen flex flex-col items-center md:items-start mt-[80px] lg:flex-row lg:flex-wrap lg:p-4 ">
        {
            projects?.map(project=><div key={project.id} className="group flex flex-col lg:ml-4 justify-center items-center 
            w-[300px] h-[400px] border border-solid border-black mt-4 bg-cover bg-center "
            style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.imgUrl})`,
      }}
            >
                <h2 className="text-white text-center text-[20px]">{project.title}</h2>
                <p className="text-white text-[16px] mt-4 text-center font-light w-[80%]">{project.stack}</p>
                <Link href={`/projects/${project.id}`} className="transition-all duration-500 ease-in-out w-[60%] text-center opacity-0 group-hover:opacity-100 h-[40px] flex justify-center items-center mt-3  rounded-[8px] self-center bg-primary ">View Details</Link>
            </div>)
        }
      </section>
    </>
  );
}
