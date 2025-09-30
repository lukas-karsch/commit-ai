import { claude } from "./model/claude.js";
import { getOptions } from "./repo/get-options.js";
import { generateCommitMessage } from "./generation/generate-commit-message.js";

async function main() {
  const cwd = process.cwd();
  const options = getOptions(cwd);

  const result = await generateCommitMessage(claude, options, cwd);

  console.log(result);
}

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
