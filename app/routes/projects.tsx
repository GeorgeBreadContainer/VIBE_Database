import type { Route } from "./+types/projects";
import { Projects } from "../pages/projects";

export function meta({}: Route.MetaArgs) 
{
  return [
    { title: "Projects" },
    { name: "description", content: "Projects" },
  ];
}

export default function ProjectsRoute() 
{
  return <Projects />;
}
