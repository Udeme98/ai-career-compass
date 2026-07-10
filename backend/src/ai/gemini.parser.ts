import { GeminiResponseSchema } from "./gemini.schema";

export function parseGeminiResponse(response: string) {
  const parsed = JSON.parse(response);

  return GeminiResponseSchema.parse(parsed);
}
