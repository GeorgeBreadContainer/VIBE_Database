import { Link } from "react-router"

export default function Navbar()
{
    return(
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-6">
    <Link to ="/" className="hover:underline">Portfolio</Link>  
    </nav>
    )
}