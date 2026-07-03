import { AssessmentInput } from "../validators/assessment.schema";
import { CAREERS } from "../constants/careers";

export function buildCareerPrompt(assessment: AssessmentInput): string {
  return `
You are an experienced technology career counselor, hiring manager, technical mentor, and labor market analyst.

Your job is to analyze the user's assessment and recommend the most suitable technology careers.

Only recommend careers from this list:

${CAREERS.join(", ")}

User Assessment:

${JSON.stringify(assessment, null, 2)}

Return ONLY valid JSON.

The JSON must follow this format:

{
  "topCareerMatches": [
    {
      "career": "Frontend Developer",
      "matchScore": 95,
      "fitReason": "Short explanation",
      "pros": [
        "High demand",
        "Creative work"
      ],
      "cons": [
        "Competitive market",
        "Requires continuous learning"
      ]
    }
  ]
}

Rules:

Rules:

- Recommend exactly 5 careers.
- Match scores must be between 0 and 100.
- Sort careers from highest to lowest score.
- Include 2–5 realistic pros for each career.
- Include 2–5 realistic cons for each career.
- Pros and cons should be concise bullet-style phrases.
- Do not include markdown.
- Do not explain outside the JSON.
- Return ONLY valid JSON.
`;
}
