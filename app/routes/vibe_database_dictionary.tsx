import type { Route } from "./+types/vibe_database_dictionary";
import { Dictionary } from "../pages/vibe_database_dictionary";

export function meta({}: Route.MetaArgs) 
{
  return [
    { title: "Dictionary" },
    { name: "description", content: "Dictionary" },
  ];
}

export default function DatabaseRoute() 
{
  return <Dictionary />;
}
