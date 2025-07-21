import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL)
{
  throw new Error("Missing DATABASE_URL in .env");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post('/api/query', async (req, res) => 
{
  const { sql } = req.body;
  console.log("SQL received:", sql);
  if (!sql.toLowerCase().startsWith("select")) 
    {
    return res.status(400).json({ error: "Only SELECT statements allowed" });
    }

  try 
  {
    const result = await pool.query(sql);
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) 
  {
    console.error("Query error:", error);
    res.status(500).json({ error: "Query failed", details: error });
  }
});

app.get("/health", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Query result:", result.rows);
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: "DB connection failed", details: err });
  }
});
