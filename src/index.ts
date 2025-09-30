#!/usr/bin/env node

import { claude } from "./model/claude.js";
import { getOptions } from "./repo/get-options.js";
import { generateCommitMessage } from "./generation/generate-commit-message.js";
import chalk from "chalk";

async function main() {
  console.log(chalk.green("welcome to commit-ai 🪄"));

  const cwd = process.cwd();
  const options = getOptions(cwd);

  const result = await generateCommitMessage(claude, options, cwd);

  console.log(result);
}

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
