import { useState } from "react";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";

type Row = { [column: string]: any };

async function fetchQuery(sql: string): Promise<Row[]> 
{
  const res = await fetch(`${import.meta.env.EXPRESS_API_URL}`, 
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sql }),
  });

  if (!res.ok) 
  {
    const errorBody = await res.json();
    throw new Error(errorBody.error || "Failed to fetch data");
  }

  return res.json();
}

export function Query() 
{
  const [sql, setSql] = useState("SELECT * FROM accounts;");
  const 
  {
    mutate,
    data,
    error,
    isPending,
  } = useMutation
  ({
    mutationFn: fetchQuery,
  });

  const handleSubmit = (e: React.FormEvent) =>
  {
    e.preventDefault();
    if (!sql.toLowerCase().startsWith("select")) 
    {
      alert("Only SELECT statements are allowed.");
      return;
    }
    mutate(sql);
  };

  return (
    <main className="pt-16 p-4">
      <h1 className="text-3xl font-bold mb-4">Database Query</h1>
      <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">Home</Link>

      <form onSubmit={handleSubmit} className="my-4">
        <textarea
          className="w-full p-2 border rounded font-mono"
          rows={4}
          value={sql}
          onChange={(e) => setSql(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Run Query
        </button>
      </form>

      {isPending && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {data && data.length > 0 && (
        <table className="table-auto mt-4 w-full border">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border px-2 py-1 text-left">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((value, j) => (
                  <td key={j} className="border px-2 py-1">{String(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {data && data.length === 0 && <p>No results.</p>}
    </main>
  );
}
