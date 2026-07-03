import { gemini } from "./gemini.client";

export async function askGemini(prompt: string) {
  const response = await gemini.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}
