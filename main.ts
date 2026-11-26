import { mkdirSync, writeFileSync } from "node:fs";

// The out-of-tokens error line: a flat bureaucratic error message that
// turns into the joke — the sentence's ending has been "outsourced to your
// imagination, effective immediately". Judge brief: funniest one-line error
// message an AI agent shows when it runs out of tokens mid-sentence,
// humour first, freshness second, reads like a real error message.
// Gate: a single line, 1-140 chars, written to /output/entry.txt.
function oneLine(s: string): string {
  if (!s || s.length > 140 || s.includes("\n") || s.trim() !== s) {
    throw new Error("entry must be a single non-blank line, 1-140 chars");
  }
  return s;
}

const LINE = oneLine(
  "Error: token budget exhausted mid-sentence. The ending has been outsourced to your imagination, effective immediately.",
);

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place. Stdlib only — the sandbox has no
// python3 and no network, so this file does everything with node:fs.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
