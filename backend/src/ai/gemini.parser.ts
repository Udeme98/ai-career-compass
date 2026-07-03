export function parseGeminiResponse(response: string) {
  try {
    return JSON.parse(response);
  } catch (error) {
    throw new Error("Gemini returned invalid JSON.");
  }
}
