import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from "dotenv";
import path from "path";

dotenv.config({path:"server/scout.env"})

const app = express();
app.use(cors());
app.use(express.json());

app.use("/public/files",express.static(path.join(__dirname,"files")));

if (!process.env.DATABASE_URL)
{
  throw new Error("Missing DATABASE_URL in .env");
}

console.log("DB URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const port = parseInt(process.env.PORT || "4000", 10);

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => 
{
  console.log(`Server listening on port ${PORT}`);
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
