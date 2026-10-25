import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const PKG = join(import.meta.dirname, "..");

export default function setup(): void {
  execFileSync("pnpm", ["build"], { cwd: PKG, stdio: "pipe" });
  if (!existsSync(join(PKG, "dist", "bin", "wordink-gateway.js"))) {
    throw new Error("global-setup: pnpm build did not produce dist/bin/wordink-gateway.js");
  }
}
