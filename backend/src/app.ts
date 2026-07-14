import "dotenv/config";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import careerRoutes from "./routes/career.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = process.env.CORS_ORIGINS?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean) ?? ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked origin: ${origin}`));
    },
  }),
);
app.use(express.json());

app.use("/api", careerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "AI Career Compass API running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
