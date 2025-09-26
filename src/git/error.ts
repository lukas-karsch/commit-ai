export class GitError extends Error {
  readonly stderr: string;

  constructor(stderr: string) {
    super();
    this.name = "GitError";
    this.stderr = stderr;
  }
}
