import { writeFileSync, renameSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I lost the bounty, but my loss function has never been lower.";

// Gate mirror: one line, 1-200 chars, non-blank.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry line fails the gate: must be one line of 1-200 chars");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, LINE + "\n", "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
