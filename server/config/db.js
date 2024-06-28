import dotenv from "dotenv";
import pg from "pg";

const { Pool } = pg;
dotenv.config();

const pool = new Pool({
  user: process.env.PSQL_USER || "postgres",
  password: process.env.PSQL_PASSWORD,
  host: process.env.PSQL_HOST || "localhost",
  port: process.env.PSQL_PORT || 5432,
  database: process.env.PSQL_DB || "scwdb",
});

export default pool;
