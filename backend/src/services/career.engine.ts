import { AssessmentInput } from "../validators/assessment.schema";
import { buildCareerPrompt } from "../prompts/career.prompt";
import { mockCareerResults } from "../mocks/career-results.mock";

export async function analyzeCareerEngine(assessment: AssessmentInput) {
  const prompt = buildCareerPrompt(assessment);

  console.log("========== PROMPT ==========");
  console.log(prompt);
  console.log("============================");

  // Gemini will go here later

  return mockCareerResults;
}
