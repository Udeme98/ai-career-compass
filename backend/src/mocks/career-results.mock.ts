import { CareerResult } from "../types/career-result.types";
import { Career } from "../constants/careers";

export const mockCareerResults: CareerResult = {
  userProfile: {
    summary: "You enjoy building digital products...",

    strengths: ["Logical thinking", "Curious learner", "Self-motivated"],

    growthAreas: [
      "Gain more real-world project experience",
      "Improve technical communication",
    ],

    learningStyle: "Hands-on learning with mentorship.",

    recommendedEnvironment: "Collaborative engineering teams.",
  },

  topCareerMatches: [
    {
      career: "Frontend Developer",
      matchScore: 94,

      fitReason:
        "You enjoy creating user-facing experiences, have an interest in web technologies, and prefer seeing immediate visual results from your work.",

      pros: [
        "Strong global demand",
        "Excellent remote work opportunities",
        "Large developer community",
        "Fast feedback while building products",
      ],

      cons: [
        "Highly competitive entry-level market",
        "Requires a strong portfolio",
      ],
    },

    {
      career: "Fullstack Developer",
      matchScore: 90,

      fitReason:
        "Your curiosity and willingness to learn both frontend and backend technologies make Fullstack Development a natural progression.",

      pros: [
        "Versatile skillset",
        "Higher career flexibility",
        "Can build complete applications independently",
      ],

      cons: ["Broad learning curve", "Requires continuous learning"],
    },

    {
      career: "UI/UX Designer",
      matchScore: 82,

      fitReason:
        "Your interest in user experience and product design complements your technical abilities.",

      pros: ["Creative career path", "Growing demand"],

      cons: ["Requires design portfolio"],
    },
  ],

  marketAnalysis: [
    {
      career: "Frontend Developer",

      demandLevel: "High",

      difficulty: "Medium",

      notes:
        "Demand remains strong, although employers increasingly expect modern frameworks, TypeScript, testing, and strong portfolios.",
    },

    {
      career: "Fullstack Developer",

      demandLevel: "High",

      difficulty: "Hard",

      notes:
        "Companies increasingly value developers capable of working across the entire application stack.",
    },
  ],

  learningRoadmap: {
    career: "Frontend Developer",

    phases: [
      {
        title: "Foundation",

        duration: "Weeks 1–4",

        topics: ["HTML", "CSS", "JavaScript", "Git"],
      },

      {
        title: "Modern Frontend",

        duration: "Weeks 5–8",

        topics: ["React", "TypeScript", "TailwindCSS", "API Integration"],
      },

      {
        title: "Portfolio Building",

        duration: "Weeks 9–12",

        topics: ["Projects", "Testing", "Deployment", "GitHub Portfolio"],
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
      "System Design",
      "Docker",
      "Kubernetes",
      "AI Integration",
    ],
  },

  warnings: [
    {
      title: "Competitive Entry",
      description:
        "Junior positions are competitive. A strong portfolio is essential.",
      severity: "High",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology changes rapidly, so regular learning is required.",
      severity: "Medium",
    },
    {
      title: "Communication Skills",
      description: "Soft skills become increasingly important as you progress.",
      severity: "Low",
    },
  ],
};
