import { generateText } from "ai";
import { claude } from "./model/claude.js";
import { getGitDiff } from "./repo/get-diff.js";
import { getOptions } from "./repo/get-options.js";
import { generateCommitMessage } from "./generation/generate-commit-message.js";

async function main() {
  const diffString = getGitDiff();
  const options = getOptions();

  const result = await generateCommitMessage(claude, diffString, options);

  console.log(result);
}

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
