import { rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));
const nextDir = join(currentDir, "..", ".next");

rmSync(nextDir, { recursive: true, force: true });
