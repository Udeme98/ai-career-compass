import { z } from "zod";

export const AssessmentSchema = z.object({
  interests: z.array(z.string()).min(1),
  skills: z.array(z.string()).min(1),
  learningStyle: z.string().min(1),
  weeklyHours: z.string().min(1),
  careerGoals: z.array(z.string()).min(1),
  personalityTraits: z.array(z.string()).min(1),
});

export type AssessmentInput = z.infer<typeof AssessmentSchema>;
