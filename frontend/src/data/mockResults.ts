import type { CareerResult } from "../types/career";

export const mockResults: CareerResult = {
  userProfile: {
    summary:
      "You enjoy solving problems, building software, and learning modern technologies.",
  },
  topCareerMatches: [
    {
      career: "Frontend Developer",
      matchScore: 92,
      fitReason:
        "Strong interest in building user interfaces and visual experiences.",
      pros: ["Creative work", "High demand", "Remote opportunities"],
      cons: ["Rapidly changing ecosystem"],
    },

    {
      career: "UI/UX Designer",
      matchScore: 84,
      fitReason: "Strong alignment with creativity and user-focused thinking.",
      pros: ["Creative problem solving", "Cross-functional collaboration"],
      cons: ["Can require portfolio-heavy job search"],
    },
  ],

  marketAnalysis: [
    {
      career: "Frontend Developer",
      demandLevel: "High",
      difficulty: "Medium",
      notes: "Demand remains strong but competition has increased.",
    },
  ],

  learningRoadmap: {
    career: "Frontend Developer",

    phases: [
      {
        title: "Foundation",
        duration: "Weeks 1–4",
        topics: ["HTML", "CSS", "JavaScript"],
      },

      {
        title: "React Development",
        duration: "Weeks 5–8",
        topics: ["React", "TypeScript", "State Management"],
      },

      {
        title: "Portfolio Building",
        duration: "Weeks 9–12",
        topics: ["Projects", "GitHub", "Deployment"],
      },
    ],
  },
  futureProjection: {
    oneYear:
      "You could be ready for junior developer opportunities with consistent learning and projects.",

    threeYears:
      "You could be working independently on production applications.",

    fiveYears:
      "You may progress into senior engineering or technical leadership roles.",
  },

  warnings: [
    "Frontend development remains competitive.",
    "Consistent portfolio building is essential.",
  ],
};
