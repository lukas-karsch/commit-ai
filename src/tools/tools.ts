import { tool } from "ai";
import z from "zod";
import { getDirectoryStructure } from "../fs/get-directory-structure.js";
import { getCwd } from "../fs/cwd.js";
import { readFileToText } from "../fs/read-file.js";

export const getDirectoryStructureTool = tool({
  description:
    "Get the structure of the project or a subdirectory as a JSON object",
  inputSchema: z.object({
    startingPoint: z
      .string()
      .optional()
      .describe(
        "A path inside of the current project. The file structure will be returned starting from this path. If not specified, the current working directory is used",
      ),
  }),
  execute: async ({ startingPoint }) =>
    getDirectoryStructure(startingPoint ?? getCwd()),
});

export const readFullFileTool = tool({
  description: "Read the text contents of a file.",
  inputSchema: z.object({
    filepath: z.string().describe("A path inside of the current project"),
  }),
  execute: async ({ filepath }) => readFileToText(filepath),
});
