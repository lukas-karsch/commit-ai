import { configDotenv } from "dotenv";
import z from "zod";

configDotenv();

const envSchema = z.object({
  CLAUDE_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
