import Markdown from 'react-markdown';
import { Link } from "react-router";
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import remarkWikiLink from "remark-wiki-link";

export function Dictionary()
{
    const [markdown, setMarkdown] = useState<string|null>(null);
    
    useEffect(() => {
        fetch("/dictionary.md")
        .then((response) => {
        if(!response.ok) throw new Error("Failed to fetch markdown");
        return response.text();
        })
        .then(setMarkdown)
        .catch((err) =>
        {
            console.error(err);
            setMarkdown("Error loading markdown (What did you do?)");
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
            <p>
                Dictionary is incomplete.
            </p>
            <div className="prose prose-xl max-w-3xl">
            {
                markdown ? 
                (
                    <ReactMarkdown remarkPlugins={[remarkGfm,[remarkWikiLink, { pageResolver: (name: string) => [name] }]]} components={{a: ({ href, children }) =>
                        {
                            if (href?.startsWith("/")) 
                                {
                                    return <Link to={href}>{children}</Link>;
                                }
                            return (
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                {children}
                                </a>
                            );
                        },
                    }}>
                        {markdown}
                    </ReactMarkdown>
                ) : 
                (
                    <p className="text-gray-500 italic">Loading dictionary...</p>
                )}
            </div>
        </main>
    )
}