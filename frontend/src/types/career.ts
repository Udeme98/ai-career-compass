export interface UserProfile {
  summary: string;
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
  oneYear: string;
  threeYears: string;
  fiveYears: string;
}

export interface CareerResult {
  userProfile: UserProfile;

  topCareerMatches: CareerMatch[];

  marketAnalysis: MarketAnalysis[];

  learningRoadmap: LearningRoadmap;

  futureProjection: FutureProjection;

  warnings: string[];
}
