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
  ],
   "marketAnalysis": [
    {
      "career": "Frontend Developer",
      "demandLevel": "High",
      "difficulty": "Medium",
      "notes": "Demand remains strong, but junior competition is increasing."
    }
  ],
  "learningRoadmap": {
  "career": "Frontend Developer",
  "phases": [
    {
      "title": "Foundation",
      "duration": "Weeks 1–4",
      "topics": [
        "HTML",
        "CSS",
        "JavaScript",
        "Git"
      ]
    },
    {
      "title": "Core Skills",
      "duration": "Weeks 5–8",
      "topics": [
        "React",
        "TypeScript",
        "APIs",
        "TailwindCSS"
      ]
    },
    {
      "title": "Portfolio & Deployment",
      "duration": "Weeks 9–12",
      "topics": [
        "Projects",
        "Testing",
        "Deployment",
        "Performance Optimization"
      ]
    }
  ]
}
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

For every recommended career:

- Include one marketAnalysis entry.
- The order of marketAnalysis must match topCareerMatches.
- demandLevel must be one of:
  - Very High
  - High
  - Medium
  - Low

- difficulty must be one of:
  - Easy
  - Medium
  - Hard

Create a personalized 90-day learning roadmap.

Requirements:

- The roadmap must be for the highest-ranked career.
- Divide it into exactly 3 phases.
- Each phase must contain:
  - title
  - duration
  - at least 4 learning topics
- Topics should progress from beginner to intermediate.
- Tailor the roadmap to the user's assessment where appropriate.
`;
}
