import { gemini } from "./gemini.client";

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);

    throw new Error("Failed to communicate with Gemini.");
  }
}
