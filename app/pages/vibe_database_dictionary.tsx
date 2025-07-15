import Markdown from 'react-markdown';
import { Link } from "react-router";
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';

export function Dictionary()
{
    const [markdown, setMarkdown] = useState<string>("");
    useEffect(() => {
        fetch("/dictionary.md")
        .then((response) => {
        if(!response.ok) throw new Error("AAAAA");
        return response.text();
        })
        .then(setMarkdown)
        .catch((err) =>
        {
            console.error("Error");
            setMarkdown("AAAAA");
        });
    }, []);

    return(
        <main className="pt-16 p-4">
            <h1 className="text-3x1 font-bold">
                Dictionary
            </h1>
            <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">
                Home
            </Link>
            <div className="prose prose-xl dark:prose-invert max-w-3xl mx-auto p-8">
            <Markdown>{markdown}</Markdown>
            </div>
        </main>
    )
}