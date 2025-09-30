import path from "node:path";
import z from "zod";
import { readFileToJson } from "../fs/read-file.js";

// Idea: prepend issue number from branch name
// options for commit conventions
export const optionsSchema = z.object({
  useReadme: z.boolean().default(false),
  customInstructions: z.string().default(""),
  readFullChangedFiles: z.boolean().default(false),
});

export type CommitAiOptions = z.output<typeof optionsSchema>;

export const getOptions = (cwd?: string): CommitAiOptions => {
  const basename = "commit-ai.json";
  const filepath = cwd ? path.join(cwd, basename) : basename;

  const data = readFileToJson(filepath);

  return optionsSchema.parse(data);
};
