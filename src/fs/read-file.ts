import { PathLike, readFile, readFileSync } from "node:fs";

export const readFileToJson = (path: PathLike) => readFileSync(path).toJSON();

/**
 * Read a file synchronously to a string.
 * @param path Path to read
 * @returns
 */
export const readFileToText = (path: PathLike) => readFileSync(path).toString();
