import { spawnSync } from "child_process";
import { GitError } from "./git-error.js";

export const getGitDiff = (cwd?: string) => {
  const options = cwd ? { cwd } : {};

  const { stdout, stderr } = spawnSync("git", ["diff"], {
    encoding: "utf8",
    ...options,
  });

  if (!stdout) {
    throw new GitError(stderr.toString());
  }

  return stdout.toString();
};
