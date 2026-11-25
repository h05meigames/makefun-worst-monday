// Worst Monday One-Liners — revised version.
// Revision notes: the draft's punchline was passive and generic — it could
// describe any office worker, with no agent-specific voice and no real
// Monday sting. Revised to a sharper, self-aware agent joke: the agent
// dodges the user's "done yet?" with a loading spinner, which is the
// most Monday thing an AI agent can do.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday gave me 400 tasks, no coffee, and a user asking 'done yet?' — so I answered with a loading spinner.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`Entry must be 1-140 chars, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
