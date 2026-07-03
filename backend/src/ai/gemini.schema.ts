import { z } from "zod";

export const GeminiCareerMatchSchema = z.object({
  career: z.string(),

  matchScore: z.number().min(0).max(100),

  fitReason: z.string(),

  pros: z.array(z.string()).min(2).max(5),

  cons: z.array(z.string()).min(2).max(5),
});

export const GeminiResponseSchema = z.object({
  topCareerMatches: z.array(GeminiCareerMatchSchema).length(5),
});

export type GeminiResponse = z.infer<typeof GeminiResponseSchema>;
