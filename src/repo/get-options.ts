import path from "node:path";
import z from "zod";
import { fileExists, readFileToJson } from "../fs/read-file.js";

// Idea: prepend issue number from branch name
// options for commit conventions
export const optionsSchema = z.object({
  useReadme: z.boolean().default(false),
  customInstructions: z.string().default(""),
  readFullChangedFiles: z.boolean().default(false),
});

export type CommitAiOptions = z.output<typeof optionsSchema>;

export const defaultOptions: CommitAiOptions = {
  useReadme: false,
  readFullChangedFiles: false,
  customInstructions:
    "Use conventional commits. Use elements like 'feat', 'fix', 'chore', 'test', 'style', 'refactor'. ",
};

/**
 * @param cwd current working directory. if not given, the basename of the file ("commit-ai.json") will just be used
 * @returns parsed options or default options, if the commit-ai.json file doesnt exist
 */
export const getOptions = (cwd?: string): CommitAiOptions => {
  const basename = "commit-ai.json";
  const filepath = cwd ? path.join(cwd, basename) : basename;

  if (fileExists(filepath)) {
    const data = readFileToJson(filepath);
    return optionsSchema.parse(data);
  }

  return defaultOptions;
};
