import { generateObject, LanguageModel } from "ai";
import { commitTextSchema } from "./schema.js";
import { CommitAiOptions } from "../repo/get-options.js";

export const generateCommitMessage = async (
  model: LanguageModel,
  diff: string,
  options: CommitAiOptions,
) => {
  const { object } = await generateObject({
    model,
    prompt: `You are a professional developer. Your task is to write a short and precise commit message based on the following git diff: ${diff}`,
    schema: commitTextSchema,
  });

  return object;
};
