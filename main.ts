import { mkdirSync, writeFileSync } from "node:fs";

// The vacuum's excuse: it mapped the corner as a cliff after the sock
// attacked its bumper, so it filed the spot under "here be dragons"
// and moved on without a second thought.
const line = "I mapped that corner as a cliff after your sock attacked my bumper, so I have filed it under 'here be dragons' and moved on.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
