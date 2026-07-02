import { CareerResult } from "../types/career-result.types";
import { Career } from "../constants/careers";

export const mockCareerResults: CareerResult = {
  userProfile: {
    summary:
      "You enjoy building digital products, prefer hands-on learning, and are motivated by creating practical solutions. Your profile suggests a strong fit for software engineering roles with opportunities for continuous learning and collaboration.",
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
    oneYear:
      "With consistent study and portfolio projects, you could become competitive for junior frontend positions.",

    threeYears:
      "You could progress into a mid-level software engineering role with experience across modern frontend technologies.",

    fiveYears:
      "Potential career paths include Senior Frontend Engineer, Fullstack Engineer, Technical Lead, or Engineering Manager depending on your interests.",
  },

  warnings: [
    "Do not rely solely on certificates; employers prioritize practical projects.",

    "Expect competition for entry-level positions and continue improving your portfolio.",

    "Continuous learning is essential because web technologies evolve rapidly.",
  ],
};
