

import { ProjectIntercept } from "@/Components/ProjectIntercept/ProjectIntercept";
import { JSX } from "react";

interface IParams {
  params: Promise<{ id: string }>;
}

export default async function InterceptProject({ params }: IParams) {
  const {id}= await params

  return (
    <>
      <ProjectIntercept param={id}/>
    </>
  );
}
