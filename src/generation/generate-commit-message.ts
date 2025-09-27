import { generateObject, LanguageModel } from "ai";
import { commitTextSchema } from "./schema.js";
import { CommitAiOptions } from "../repo/get-options.js";
import { buildPrompt } from "./prompt-builder.js";

export const generateCommitMessage = async (
  model: LanguageModel,
  diff: string,
  options: CommitAiOptions,
) => {
  const { object } = await generateObject({
    model,
    prompt: buildPrompt(diff, options),
    schema: commitTextSchema,
  });

  return object;
};
