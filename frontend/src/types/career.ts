export interface UserProfile {
  summary: string;
  strengths: string[];
  growthAreas: string[];
  learningStyle: string;
  recommendedEnvironment: string;
}

export interface CareerMatch {
  career: string;
  matchScore: number;
  fitReason: string;
  pros: string[];
  cons: string[];
}

export interface MarketAnalysis {
  career: string;
  demandLevel: "Low" | "Medium" | "High";
  difficulty: "Easy" | "Medium" | "Hard";
  notes: string;
}

export interface RoadmapPhase {
  title: string;
  duration: string;
  topics: string[];
}

export interface LearningRoadmap {
  career: string;
  phases: RoadmapPhase[];
}

export interface FutureProjection {
  career: string;
  outlook: string;
  salaryPotential: "Low" | "Medium" | "High" | "Very High";
  growthPotential: "Low" | "Medium" | "High" | "Very High";
  nextRoles: string[];
  futureSkills: string[];
}

export interface CareerResult {
  userProfile: UserProfile;

  topCareerMatches: CareerMatch[];

  marketAnalysis: MarketAnalysis[];

  learningRoadmap: LearningRoadmap;

  futureProjection: FutureProjection;

  warnings: string[];
}
