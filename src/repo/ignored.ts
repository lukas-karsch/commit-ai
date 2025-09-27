import { spawnSync } from "node:child_process";

export const isFileIgnored = (file: string) => {
  const { status } = spawnSync("git", ["check-ignore", file], {
    encoding: "utf8",
  });

  return status === 0;
};
