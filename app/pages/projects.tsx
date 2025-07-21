import { Link } from "react-router";

export function Projects()
{
    return(
        <main>
            <h1>
                Projects
            </h1>
            <Link to="/">
                Home
            </Link>
            <br></br>
            <Link to="/vibe_database">
                VIBE Database
            </Link>
        </main>
    )
}