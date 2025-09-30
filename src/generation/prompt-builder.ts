import { readFileToText } from "../fs/read-file.js";
import { getChangedFiles, getGitDiff } from "../repo/get-diff.js";
import { CommitAiOptions } from "../repo/get-options.js";

export const buildPrompt = (options: CommitAiOptions, cwd: string): string => {
  let prompt = `You are a professional developer. Your task is to write a short and precise commit message.\n`;

  if (options.customInstructions) {
    prompt += `Follow the custom instructions provided by the user: ${options.customInstructions}\n`;
  }

  const diff = getGitDiff();
  prompt += `This is the git diff: ${diff}}\n`;

  prompt += `Below is additional context about the project.\n`;

  if (options.readFullChangedFiles) {
    const changedFileContents = getChangedFiles(cwd).map((filepath) => ({
      filepath,
      content: readFileToText(filepath),
    }));
    prompt += "Here is the full contents of each changed file:\n";
    prompt += JSON.stringify(changedFileContents, null, 2);
  }

  console.log(prompt);

  return prompt;
};
