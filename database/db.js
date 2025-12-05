import pkg from "pg";
const { Client } = pkg;

const database = new Client({
  user: "postgres",
  host: "localhost",
  database: "shopify",
  password: "12@Shreya",
  port: 5432,
});

try {
  await database.connect();
  console.log("Connected to the database successfully");
} catch (error) {
  console.error("Database connection failed:", error);
  process.exit(1);
}

export default database;