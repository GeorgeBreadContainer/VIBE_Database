import { Link } from "react-router";

export function Projects()
{
    return(
        <main className="pt-16 p-4">
            <h1 className="text-3x1 font-bold">
                Projects
            </h1>
            <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">
                Home
            </Link>
            <br></br>
            <Link to="/vibe_database" className="text-blue-700 hover:underline dark:text-blue-500">
                VIBE Database
            </Link>
        </main>
    )
}