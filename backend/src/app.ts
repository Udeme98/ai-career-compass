import "dotenv/config";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import careerRoutes from "./routes/career.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", careerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "AI Career Compass API running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
