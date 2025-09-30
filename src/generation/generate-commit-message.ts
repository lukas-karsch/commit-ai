import { generateObject, LanguageModel } from "ai";
import { commitTextSchema } from "./schema.js";
import { CommitAiOptions } from "../repo/get-options.js";
import { buildPrompt } from "./prompt-builder.js";

export const generateCommitMessage = async (
  model: LanguageModel,
  options: CommitAiOptions,
  cwd: string,
) => {
  const { object } = await generateObject({
    model,
    prompt: buildPrompt(options, cwd),
    schema: commitTextSchema,
  });

  return object;
};
