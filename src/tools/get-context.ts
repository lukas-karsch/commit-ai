import { readdirSync, lstatSync, existsSync, readFileSync } from "node:fs";
import { basename, dirname } from "node:path";
import { isFileIgnored } from "../repo/ignored.js";
import { getCwd } from "../fs/cwd.js";

type FileNode = {
  name: string;
  type: "file";
};

type DirectoryNode = {
  name: string;
  type: "directory";
  children: Node[];
};

export type Node = FileNode | DirectoryNode;

export function getDirectoryStructure(path: string): Node {
  if (lstatSync(path).isFile()) {
    return {
      name: basename(path),
      type: "file",
    };
  }
  return {
    type: "directory",
    name: basename(path),
    children: readdirSync(path)
      .filter((p) => existsSync(`${path}/${p}`))
      .filter((p) => !isFileIgnored(`${path}/${p}`))
      .filter((p) => !p.startsWith(".git"))
      .map((p) => getDirectoryStructure(`${path}/${p}`)),
  };
}

console.dir(getDirectoryStructure(getCwd()), { depth: 5 });
