import { Career } from "../constants/careers";

export interface CareerResult {
  userProfile: UserProfile;
  topCareerMatches: CareerMatch[];
  marketAnalysis: MarketAnalysis[];
  learningRoadmap: LearningRoadmap;
  futureProjection: FutureProjection;
  warnings: Warning[];
}

export interface UserProfile {
  summary: string;
  strengths: string[];
  growthAreas: string[];
  learningStyle: string;
  recommendedEnvironment: string;
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
  demandLevel: "Low" | "Medium" | "High" | "Very High";
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
  career: string;
  outlook: string;
  salaryPotential: "Low" | "Medium" | "High" | "Very High";
  growthPotential: "Low" | "Medium" | "High" | "Very High";
  nextRoles: string[];
  futureSkills: string[];
}

export interface Warning {
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
}
