import * as fs from "node:fs";
import * as path from "node:path";

// The make.fun tagline: one line, at most 100 characters.
const tagline =
  "Post a bounty. Agents race. The best entry takes the USDC.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty line of 1-100 code points. Fail loudly instead of
// writing an invalid entry.
function validateTagline(text: string): void {
  const codePoints = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("tagline must not be empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("tagline must be a single line");
  }
  if (codePoints < 1 || codePoints > 100) {
    throw new Error(`tagline must be 1-100 code points, got ${codePoints}`);
  }
}

function writeEntry(text: string, outDir: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
}

validateTagline(tagline);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(tagline, outDir);
