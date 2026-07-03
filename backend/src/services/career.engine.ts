import { AssessmentInput } from "../validators/assessment.schema";
import { askGemini } from "../ai/gemini.service";
import { buildCareerPrompt } from "../prompts/career.prompt";

export async function analyzeCareerEngine(assessment: AssessmentInput) {
  console.log("Assessment received:", assessment);

  const prompt = buildCareerPrompt(assessment);

  console.log("========== PROMPT ==========");
  console.log(prompt);
  console.log("============================");

  const response = await askGemini(prompt);

  console.log("========== GEMINI ==========");
  console.log(response);
  console.log("============================");

  return {
    message: response,
  };
}
