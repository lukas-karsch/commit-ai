#!/usr/bin/env node

import { claude } from "./model/claude.js";
import { getOptions } from "./repo/get-options.js";
import { generateCommitMessage } from "./generation/generate-commit-message.js";
import chalk from "chalk";

async function main() {
  console.log(chalk.green("welcome to commit-ai 🪄"));
  console.log(chalk.gray("we are crafting your commit message..."));

  const cwd = process.cwd();
  const options = getOptions(cwd);

  try {
    const result = await generateCommitMessage(claude, options, cwd);

    console.log(chalk.gray("your commit message is here!"));
    console.log();
    console.log(chalk.green(result.commitMessage));
  } catch (error) {
    console.error(chalk.red("sorry!! something went wrong :("));
    console.error(error);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
