import z from "zod";

export const commitTextSchema = z.object({
  commitMessage: z
    .string()
    .max(180, "The commit message must have a maximum length of 180.")
    .min(10),
});

export type CommitText = z.infer<typeof commitTextSchema>;
