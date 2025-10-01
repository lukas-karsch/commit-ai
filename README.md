# commit-ai 🪄

`commit-ai` is a command-line tool that uses AI to automatically generate commit messages for your git repositories. It analyzes the changes in your staged files and creates a concise and descriptive commit message that follows conventional commit standards.

## Features

- **AI-powered commit messages:** Uses the power of Anthropic's Claude Sonnet 4.0 to generate high-quality commit messages.
- **Custom instructions:** Follows your custom instructions to generate the commit message. Can be used to e.g. follow conventional commits (`feat`, `fix`, etc.)
- **Customizable:** Allows for options to be passed to the AI through a `commit-ai.json` configuration file.
- **Context-aware:** Can read the full content of changed files and the project's README to generate more relevant commit messages.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lukas-karsch/commit-ai.git
   cd commit-ai
   ```

2. **Install dependencies with pnpm:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add your Claude API key:
   ```
   CLAUDE_API_KEY=your-api-key
   ```

4. **Build the project:**
   ```bash
   pnpm build
   ```

5. **Link the package for global usage (optional):**
   To use the `commit-ai` command from any directory, you can link the package globally:
   ```bash
   pnpm link --global
   ```

## Usage

Once installed, you can use the `commit-ai` command in any git repository to generate a commit message for your staged changes:

```bash
git add .
commit-ai
```

The tool will then output a suggested commit message.

## Configuration

You can customize the behavior of `commit-ai` by creating a `commit-ai.json` file in the root of your project.

```json
{
  "useReadme": false,
  "customInstructions": "Use conventional commits. Use elements like 'feat', 'fix', 'chore', 'test', 'style', 'refactor'. ",
  "readFullChangedFiles": true
}
```

- **`useReadme`**: If set to `true`, the tool will include the content of your project's `README.md` file in the prompt sent to the AI. This can provide more context for generating the commit message.
- **`customInstructions`**: Allows you to provide specific instructions to the AI for generating the commit message.
- **`readFullChangedFiles`**: If set to `true`, the tool will read the entire content of the changed files, not just the diff. This can lead to more accurate commit messages but may take longer. Will also be more expensive by using more tokens.
