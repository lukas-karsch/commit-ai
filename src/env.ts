import chalk from "chalk";
import { configDotenv } from "dotenv";
import z from "zod";

configDotenv();

const envSchema = z.object({
  CLAUDE_API_KEY: z.string(),
});

function parseEnv() {
  const env = envSchema.safeParse(process.env);
  if (!env.success) {
    console.error(chalk.red("you can't use commit-ai right now!"));
    console.error(chalk.gray("> missing environment variables. details below"));
    console.error(env.error.flatten().fieldErrors);
    process.exit(-1);
  }

  return env.data;
}

export const env = parseEnv();
