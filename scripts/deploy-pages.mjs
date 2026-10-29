import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(os.tmpdir(), "csmc-pages-cache");
const result = spawnSync("npx", ["gh-pages", "-d", "dist-release"], {
  cwd: root,
  env: { ...process.env, CACHE_DIR: cacheDir },
  stdio: "inherit",
  shell: true,
});

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
