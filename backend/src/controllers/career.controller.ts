import { Request, Response } from "express";
import { AssessmentSchema } from "../validators/assessment.schema.js";
import { analyzeCareerEngine } from "../services/career.engine";

export async function analyzeCareer(req: Request, res: Response) {
  const validation = AssessmentSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      message: "Invalid assessment data",
      error: validation.error.flatten(),
    });
  }
  const answers = validation.data;

  const results = await analyzeCareerEngine(answers);

  return res.status(200).json(results);
}
