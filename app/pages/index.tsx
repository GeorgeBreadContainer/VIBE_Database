import { Link } from "react-router";

export function Index() 
{
  return (
    <main>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="flex flex-col items-center gap-9 w-[500px] max-w-[100vw] p-4">
            <h1>
              Hey  
            </h1>
            <br></br>
            <p>
              Welcome to my portfolio, as you can see the website is under construction.
              Go to the projects and find yourself a project that intrests you.
              If you're a react developer - I'm sorry.
            </p>
        </div>
      </div>
      <div>
        <Link to="/about">
          About
        </Link>
        <br></br>
        <Link to="/projects">
          Projects
        </Link>
      </div>
    </main>
  );
}
