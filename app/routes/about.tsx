import type { Route } from "./+types/about";
import { About } from "../pages/about";

export function meta({}: Route.MetaArgs) 
{
  return [
    { title: "About Me" },
    { name: "description", content: "Learn more about me." },
  ];
}

export default function AboutRoute() 
{
  return <About />;
}
