import type { Route } from "./+types/vibe_database";
import { Database } from "../pages/vibe_database";

export function meta({}: Route.MetaArgs) 
{
  return [
    { title: "Database" },
    { name: "description", content: "Database" },
  ];
}

export default function DatabaseRoute() 
{
  return <Database />;
}
