import { readFileToText } from "../fs/read-file.js";
import { getChangedFiles, getGitDiff } from "../repo/get-diff.js";
import { CommitAiOptions } from "../repo/get-options.js";
import { getReadme } from "../repo/get-readme.js";

export const buildPrompt = (options: CommitAiOptions, cwd: string): string => {
  let prompt = `You are a professional developer called "commit-ai". Your task is to write a short and precise commit message. You will be run inside of a git repository.\n`;

  if (options.customInstructions) {
    prompt += `Follow the custom instructions provided by the user: ${options.customInstructions}\n`;
  }

  if (options.useReadme) {
    prompt +=
      "Below is the projects' README.md file. Use any information from the README if it is related to the changes made in this commit.";
    prompt += getReadme(cwd);
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

  return prompt;
};
