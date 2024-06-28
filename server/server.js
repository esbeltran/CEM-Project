import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

const PORT = process.env.PORT || 5050;
const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
