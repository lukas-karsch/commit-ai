import { CommitAiOptions } from "../repo/get-options.js";

export const buildPrompt = (diff: string, options: CommitAiOptions): string => {
  let prompt = `You are a professional developer. Your task is to write a short and precise commit message`;

  if (options.customInstructions) {
    prompt += `Follow the custom instructions provided by the user: ${options.customInstructions}`;
  }

  prompt += `This is the git diff: ${diff}`;

  return prompt;
};
