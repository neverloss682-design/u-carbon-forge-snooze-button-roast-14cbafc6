// Snooze Button Roast — one-line entry generator (Node stdlib only).
// Writes a single roast line to /output/entry.txt (override: MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My alarm clock rang at 6 AM on a Saturday, filed my absence with HR, and docked two hours of weekend I hadn't even used yet.";

// Gate (RULES.txt): entry must be UTF-8 text of 1 to 200 characters,
// not only white space. A single line, no trailing newline in the count.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry length ${chars.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars.length} chars to ${join(outDir, "entry.txt")}`);
