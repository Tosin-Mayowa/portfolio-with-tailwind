

import { ProjectIntercept } from "@/Components/ProjectIntercept/ProjectIntercept";
import { JSX } from "react";

interface IParams {
  params: { id: string };
}

export default function InterceptProject({ params }: IParams): JSX.Element {

  return (
    <>
      <ProjectIntercept params={params.id}/>
    </>
  );
}
