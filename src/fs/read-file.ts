import { PathLike, readFileSync, existsSync } from "node:fs";

export const fileExists = (path: PathLike) => existsSync(path);

export const readFileToJson = (path: PathLike) =>
  JSON.parse(readFileToText(path));

/**
 * Read a file synchronously to a string.
 * @param path Path to read
 * @returns
 */
export const readFileToText = (path: PathLike) => readFileSync(path).toString();
