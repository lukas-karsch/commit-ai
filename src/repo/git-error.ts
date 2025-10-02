export class GitError extends Error {
  readonly stderr: string;
  readonly status: number;

  constructor(stderr: string, status: number) {
    super();
    this.name = "GitError";
    this.stderr = stderr;
    this.status = status;
  }
}
