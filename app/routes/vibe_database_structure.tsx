import type { Route } from "./+types/vibe_database_structure";
import { Structure } from "../pages/vibe_database_structure";

export function meta({}: Route.MetaArgs) 
{
  return [
    { title: "Structure" },
    { name: "description", content: "Structure" },
  ];
}

export default function DatabaseRoute() 
{
  return <Structure/>;
}
