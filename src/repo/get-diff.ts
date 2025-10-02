import { spawnSync } from "child_process";
import { GitError } from "./git-error.js";

export const getGitDiff = (cwd?: string): string => {
  const options = cwd ? { cwd } : {};

  const { stdout, stderr, status } = spawnSync("git", ["diff", "--staged"], {
    encoding: "utf8",
    ...options,
  });

  if (status !== 0) {
    throw new GitError(stderr.toString(), status ?? -1);
  }

  return stdout.toString();
};

export const getChangedFiles = (cwd?: string): string[] => {
  const options = cwd ? { cwd } : {};

  const { stdout, stderr, status } = spawnSync("git", ["diff", "--name-only"], {
    encoding: "utf8",
    ...options,
  });

  if (status !== 0) {
    throw new GitError(stderr.toString(), status ?? -1);
  }

  return stdout
    .toString()
    .split("\n")
    .filter((l) => !l.startsWith("warning"))
    .filter((s) => s.trim().length > 0);
};
