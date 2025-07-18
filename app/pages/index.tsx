import DarkModeToggle from "~/components/darkmodeButton";
import { Link } from "react-router";

export function Index() 
{
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-3xl font-bold underline dark:text-white">
              Hey  
            </h1>
            <p>
              Welcome to my portfolio, as you can see the website is under construction.
              Go to the projects and find yourself a project that intrests you.
              If you're a react developer - I'm sorry.
            </p>
            <Link to="/about" className="group flex items-center gap-3 p-3 text-blue-700 hover:underline dark:text-blue-500">
              About
            </Link>
            <Link to="/projects" className="group flex items-center gap-3 p-3 text-blue-700 hover:underline dark:text-blue-500">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
