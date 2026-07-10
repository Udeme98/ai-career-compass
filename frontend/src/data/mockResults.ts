import type { CareerResult } from "../types/career";

export const mockResults: CareerResult = {
  userProfile: {
    summary:
      "You enjoy solving problems, building software, and learning modern technologies.",
    strengths: [
      "Problem solving",
      "Creative thinking",
      "Interest in modern web technologies",
    ],
    growthAreas: [
      "Building a consistent project portfolio",
      "Deepening TypeScript and testing skills",
    ],
    learningStyle: "Hands-on learning through guided projects and iteration.",
    recommendedEnvironment:
      "Collaborative teams where you can build visible products and receive regular feedback.",
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
    career: "Backend Developer",
    outlook:
      "Backend engineering is expected to remain highly valuable due to cloud adoption, scalable systems, and AI-driven applications.",
    salaryPotential: "High",
    growthPotential: "Very High",
    nextRoles: [
      "Senior Backend Developer",
      "Solutions Architect",
      "Engineering Manager",
    ],
    futureSkills: [
      "Cloud Computing",
      "Docker",
      "Kubernetes",
      "AI Integration",
      "System Design",
    ],
  },

  warnings: [
    {
      title: "Competitive Entry",
      description:
        "Junior positions are highly competitive. A strong portfolio is essential.",
      severity: "High",
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves quickly. Learning never really stops.",
      severity: "Medium",
    },
    {
      title: "Communication Skills",
      description:
        "Communication becomes increasingly important for senior engineers.",
      severity: "Low",
    },
  ],
};
