import minimist from "minimist";
import { version } from "../apps/api/package.json";

const args = minimist<{ deploy?: boolean; build?: boolean }>(Bun.argv);

const tagVersion = `raulfdm/taco-api:v${version}`;
const latestVersion = "raulfdm/taco-api:latest";

console.log("Building...");

Bun.spawnSync(
  [
    "docker",
    "build",
    "-f",
    "./apps/api/Dockerfile",
    "-t",
    tagVersion,
    "-t",
    latestVersion,
    ".",
  ],
  {
    stdio: ["inherit", "inherit", "inherit"],
  },
);

if (args.deploy) {
  console.log("Deploying...");
  Bun.spawnSync(["docker", "push", latestVersion]);
  Bun.spawnSync(["docker", "push", tagVersion]);
} else {
  console.log("Skipping deploy...");
}
