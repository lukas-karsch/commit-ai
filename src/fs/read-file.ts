import { PathLike, readFileSync } from "node:fs";

export const readFileToJson = (path: PathLike) => {
  return readFileSync(path).toJSON();
};
