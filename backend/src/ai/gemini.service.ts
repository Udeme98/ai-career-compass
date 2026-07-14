import { gemini } from "./gemini.client";

// Define fallback models from smartest/newest to older/highly available
const MODEL_FALLBACK_CHAIN = [
  "gemini-2.5-flash", // Your primary model
  "gemini-1.5-flash", // Excellent backup (fast & massive capacity)
  "gemini-1.5-pro", // High-capacity reasoning backup
];

const MAX_RETRIES_PER_MODEL = 2;

// Helper function to sleep with a randomized delay (jitter) to avoid thundering herd problem
const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms + Math.random() * 150));

export async function askGemini(prompt: string): Promise<string> {
  let lastError: any = null;

  for (const model of MODEL_FALLBACK_CHAIN) {
    let attempt = 0;

    while (attempt < MAX_RETRIES_PER_MODEL) {
      try {
        if (attempt > 0) {
          console.warn(
            `[Gemini] Retrying model ${model} (Attempt ${attempt + 1}/${MAX_RETRIES_PER_MODEL})...`,
          );
        }

        const response = await gemini.models.generateContent({
          model: model,
          contents: prompt,
        });

        if (!response.text) {
          throw new Error("Gemini returned an empty response.");
        }

        return response.text; // Success! Immediately return and break execution
      } catch (error: any) {
        lastError = error;
        const statusCode = error?.status || error?.statusCode;

        console.error(
          `[Gemini] Error on model "${model}" (Attempt ${attempt + 1}):`,
          error.message || error,
        );

        // Fail Fast on Client/Auth errors (No point in retrying or swapping models for a 400 or 401)
        if (statusCode === 400 || statusCode === 401 || statusCode === 403) {
          throw new Error(
            `Gemini client error: ${error.message || "Invalid request or authentication"}`,
          );
        }

        attempt++;

        // If we still have retry attempts for this specific model, wait before trying again
        if (attempt < MAX_RETRIES_PER_MODEL) {
          const backoffTime = Math.pow(2, attempt) * 1000; // 2s, 4s, etc.
          await delay(backoffTime);
        }
      }
    }

    // If we reach this line, the current model failed all retry attempts
    console.warn(
      `[Gemini] Model "${model}" exhausted. Swapping to next fallback...`,
    );
  }

  // If the code reaches here, every single model in the chain failed
  console.error("All Gemini models in fallback chain failed.", lastError);
  throw new Error(
    "All AI service endpoints are currently busy. Please try again in a few moments.",
  );
}

// import { gemini } from "./gemini.client";

// export async function askGemini(prompt: string): Promise<string> {
//   try {
//     const response = await gemini.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: prompt,
//     });

//     if (!response.text) {
//       throw new Error("Gemini returned an empty response.");
//     }

//     return response.text;
//   } catch (error) {
//     console.error("Gemini Error:", error);

//     throw new Error("Failed to communicate with Gemini.");
//   }
// }
