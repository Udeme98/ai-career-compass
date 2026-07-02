import { Router } from "express";
import { analyzeCareer } from "../controllers/career.controller.js";

const router = Router();

router.post("/analyze", analyzeCareer);

export default router;
