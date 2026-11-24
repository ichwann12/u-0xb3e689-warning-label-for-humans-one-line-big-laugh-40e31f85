import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke's angle: a real label's rhythm ("runs on...") listing three
// things every human recognises in themselves — too little sleep, too much
// coffee — and the turn lands in the last few words: the one unshakable
// opinion about a subject it has never studied. Recognition, not absurdity.
const line =
  "CAUTION: This human runs on 4 hours of sleep, 3 cups of coffee, and 1 unshakable opinion about a subject it has never studied.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
