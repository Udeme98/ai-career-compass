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
//   console.log("Received assessment:", answers);

//   return res.status(200).json({
//     topCareerMatches: [
//       {
//         career: "Frontend Developer",
//         matchScore: 92,
//         fitReason:
//           "Strong interest in building user interfaces and visual experiences.",
//         pros: ["Creative work", "High demand", "Remote opportunities"],
//         cons: ["Competitive market"],
//       },
//     ],

//     marketAnalysis: [
//       {
//         career: "Frontend Developer",
//         demandLevel: "High",
//         difficulty: "Medium",
//         notes: "Demand remains strong but competition has increased.",
//       },
//     ],

//     learningRoadmap: {
//       career: "Frontend Developer",

//       phases: [
//         {
//           title: "Foundation",
//           duration: "Weeks 1–4",
//           topics: ["HTML", "CSS", "JavaScript"],
//         },
//       ],
//     },

//     warnings: ["Portfolio projects are essential."],
//   });
