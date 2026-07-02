import { Career } from "../constants/careers";

export interface CareerResult {
  userProfile: UserProfile;
  topCareerMatches: CareerMatch[];
  marketAnalysis: MarketAnalysis[];
  learningRoadmap: LearningRoadmap;
  futureProjection: FutureProjection;
  warnings: string[];
}

export interface UserProfile {
  summary: string;
}

export interface CareerMatch {
  career: Career;
  matchScore: number;
  fitReason: string;
  pros: string[];
  cons: string[];
}

export interface MarketAnalysis {
  career: Career;
  demandLevel: "Low" | "Medium" | "High";
  difficulty: "Easy" | "Medium" | "Hard";
  notes: string;
}

export interface LearningRoadmap {
  career: Career;
  phases: RoadmapPhase[];
}

export interface RoadmapPhase {
  title: string;
  duration: string;
  topics: string[];
}

export interface FutureProjection {
  oneYear: string;
  threeYears: string;
  fiveYears: string;
}
