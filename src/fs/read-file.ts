import { PathLike, readFile, readFileSync } from "node:fs";

export const readFileToJson = (path: PathLike) => readFileSync(path).toJSON();

export const readFileToText = (path: PathLike) => readFileSync(path).toString();
