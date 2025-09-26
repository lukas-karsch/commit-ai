import { createAnthropic } from "@ai-sdk/anthropic";
import { env } from "../env";

const anthropic = createAnthropic({
  apiKey: env.CLAUDE_API_KEY,
});

export const claude = anthropic.languageModel("claude-opus-4-0");
