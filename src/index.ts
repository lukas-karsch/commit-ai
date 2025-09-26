import { claude } from "./model/claude";
import { generateText } from "ai";

async function main() {
  const { text } = await generateText({
    model: claude,
    prompt: "Write 5 words about typescript.",
  });

  console.log(text);
}

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
