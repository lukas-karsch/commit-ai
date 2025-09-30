import path from "node:path";
import { readFileToText } from "../fs/read-file.js";

export const getReadme = (cwd?: string) => {
  const readme = cwd ? path.join(cwd, "README.md") : "README.md";
  return readFileToText(readme);
};
