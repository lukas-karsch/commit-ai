import { spawnSync } from "child_process";

export const isInRepository = (cwd?: string) => {
  const options = cwd ? { cwd } : {};

  const { status } = spawnSync("git", ["status"], options);

  return status !== 128;
};
