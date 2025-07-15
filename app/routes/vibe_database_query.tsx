import type { Route } from "./+types/vibe_database_query";
import { Query } from "../pages/vibe_database_query";

export function meta({}: Route.MetaArgs) 
{
  return [
    { title: "Vibe Database Query" },
    { name: "description", content: "Query" },
  ];
}

export default function DatabaseRoute() 
{
  return <Query />;
}
