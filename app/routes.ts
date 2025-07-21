import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects","routes/projects.tsx"),
  route("vibe_database","routes/vibe_database.tsx"),
  route("vibe_database_dictionary","routes/vibe_database_dictionary.tsx"),
  route("vibe_database_query","routes/vibe_database_query.tsx"),
  route("vibe_database_structure","routes/vibe_database_structure.tsx")
] satisfies RouteConfig;
