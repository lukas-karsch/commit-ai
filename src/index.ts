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

  const interval = setInterval(
    () => console.log(chalk.gray("still waiting...")),
    2000,
  );

  try {
    await generateCommitMessage(claude, options, cwd);
  } catch (error) {
    console.error(chalk.red("sorry!! something went wrong :("));
    console.error(error);
  } finally {
    clearInterval(interval);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
