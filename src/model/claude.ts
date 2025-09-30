import { createAnthropic } from "@ai-sdk/anthropic";
import { env } from "../env.js";

const anthropic = createAnthropic({
  apiKey: env.CLAUDE_API_KEY,
});

export const claude = anthropic.languageModel("claude-sonnet-4-0");
