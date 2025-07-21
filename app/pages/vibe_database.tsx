import { Link } from "react-router";

export function Database()
{
    return(
        <main>
            <h1>
                Database
            </h1>
            <p>
                When I was playing TF2 the other day, I was really frustrated that every single match I got a really obvious cheater and nobody cared.
                <br></br>
                Then the next day I met a couple of people with very harsh stance on certain groups of individuals but also a couple normal people.
                <br></br>
                The next day I got a following idea:
                <br></br>
                I could store cheaters, toxic people, suspects and friendly people and report,block and friend them accordingly. 
                <br></br>
                I could later post it into the internet so others could do the same.
                <br></br>
                Thus the VIBE Database was born. A database that stores information about TF2 players based on the vibe that they gave me.
                <br></br>
                If they give me neutral vibe or are completely quiet, minding their own buisness, I do not put them in.
                <br></br>
                You can browse the database by navigating to the Query and using the SELECT statement, examples:
                <br></br>
                SELECT * FROM accounts
                <br></br>
                SELECT * FROM Cheaters
                <br></br>
                You cannot use any other statement than Select
                <br></br>
                You can check the dictionary if you don't understand a meaning of a certain word
                <br></br>
                You can check the database structure to get tables, columns and views

            </p>
            <Link to="/">
                Home
            </Link>
            <br></br>
            <Link to="/vibe_database_query">
                Query
            </Link>
            <br></br>
            <Link to="/vibe_database_dictionary">
                Dictionary
            </Link>
            <br></br>
            <Link to="/vibe_database_structure">
                Structure
            </Link>
        </main>
    )
}