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
 },
 "userProfile": {
  "summary": "The user enjoys analytical problem solving and prefers structured learning.",

  "strengths": [
    "Logical thinking",
    "Self-motivated",
    "Enjoys continuous learning"
  ],

  "growthAreas": [
    "Improve collaboration skills",
    "Gain more practical project experience"
  ],

  "learningStyle": "Learns best through mentorship and hands-on practice.",

  "recommendedEnvironment": "A collaborative engineering team with experienced mentors."
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

Generate a realistic user profile.

Requirements:

- Write in a supportive but honest tone.
- Do not exaggerate.
- Do not make unsupported assumptions.
- Base every observation only on the assessment.
- Strengths should be evidence-based.
- Growth areas should be constructive.
- Avoid generic motivational language.

Generate a realistic future projection for the highest-ranked career.

Requirements:

- Base projections on current technology trends.
- Do not guarantee employment or salary.
- Be optimistic but realistic.
- Recommend 3–5 possible future roles.
- Recommend 4–8 skills that will likely become more valuable.
`;
}
