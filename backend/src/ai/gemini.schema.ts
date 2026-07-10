import { z } from "zod";

export const GeminiCareerMatchSchema = z.object({
  career: z.string(),
  matchScore: z.number().min(0).max(100),
  fitReason: z.string(),
  pros: z.array(z.string()).min(2).max(5),
  cons: z.array(z.string()).min(2).max(5),
});

export const GeminiMarketAnalysisSchema = z.object({
  career: z.string(),
  demandLevel: z.enum(["Very High", "High", "Medium", "Low"]),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  notes: z.string(),
});

export const GeminiRoadmapPhaseSchema = z.object({
  title: z.string(),
  duration: z.string(),
  topics: z.array(z.string()).min(2),
});

export const GeminiLearningRoadmapSchema = z.object({
  career: z.string(),
  phases: z.array(GeminiRoadmapPhaseSchema).length(3),
});

export const GeminiUserProfileSchema = z.object({
  summary: z.string(),
  strengths: z.array(z.string()).min(3).max(6),
  growthAreas: z.array(z.string()).min(2).max(5),
  learningStyle: z.string(),
  recommendedEnvironment: z.string(),
});

export const GeminiFutureProjectionSchema = z.object({
  career: z.string(),
  outlook: z.string(),
  salaryPotential: z.enum(["Low", "Medium", "High", "Very High"]),
  growthPotential: z.enum(["Low", "Medium", "High", "Very High"]),
  nextRoles: z.array(z.string()).min(3).max(5),
  futureSkills: z.array(z.string()).min(4).max(8),
});

export const GeminiWarningSchema = z.object({
  title: z.string(),
  description: z.string(),
  severity: z.enum(["Low", "Medium", "High"]),
});

export const GeminiResponseSchema = z.object({
  topCareerMatches: z.array(GeminiCareerMatchSchema).length(5),
  marketAnalysis: z.array(GeminiMarketAnalysisSchema).length(5),
  learningRoadmap: GeminiLearningRoadmapSchema,
  userProfile: GeminiUserProfileSchema,
  futureProjection: GeminiFutureProjectionSchema,
  warnings: z.array(GeminiWarningSchema).min(3).max(5),
});

export type GeminiResponse = z.infer<typeof GeminiResponseSchema>;
