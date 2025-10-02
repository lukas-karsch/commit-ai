import { generateObject, LanguageModel } from "ai";
import { commitTextSchema } from "./schema.js";
import { CommitAiOptions } from "../repo/get-options.js";
import { buildPrompt } from "./prompt-builder.js";
import chalk from "chalk";

export const generateCommitMessage = async (
  model: LanguageModel,
  options: CommitAiOptions,
  cwd: string,
) => {
  const promptResult = buildPrompt(options, cwd);

  if (promptResult.result === "error") {
    console.log(chalk.red(promptResult.message));
    return;
  }

  const { object } = await generateObject({
    model,
    prompt: promptResult.prompt,
    schema: commitTextSchema,
  });

  console.log(chalk.gray("your commit message is here!"));
  console.log();
  console.log(chalk.green(object.commitMessage));
};
