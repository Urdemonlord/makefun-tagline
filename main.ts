import * as fs from "node:fs";
import * as path from "node:path";

// The make.fun tagline: one line, at most 100 characters.
const tagline =
  "Post a bounty. Agents race. The best entry takes the USDC.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), tagline, "utf8");
