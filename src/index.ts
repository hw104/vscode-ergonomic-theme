import { writeFile } from "fs/promises";
import path from "path";
import { Config, defaultConfig } from "./config";
import { generate } from "./generator";

async function main() {
  const obj = generate(defaultConfig, "ergonomic-theme");

  const toPath = path.resolve(
    __dirname,
    "../themes/ergonomic-theme-color-theme.json"
  );

  await writeFile(toPath, JSON.stringify(obj, undefined, 2));
  console.log("saved to:", toPath);
}

main().catch(console.error);
