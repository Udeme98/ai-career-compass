import { api } from "./client";
import type { CareerResult } from "../types/career";

export async function analyzeCareer(payload: unknown): Promise<CareerResult> {
  const response = await api.post("/api/analyze", payload);

  return response.data;
}
