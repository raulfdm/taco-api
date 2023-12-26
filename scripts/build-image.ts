import { version } from "../apps/api/package.json";

const tagVersion = `raulfdm/taco-api:v${version}`;
const latestVersion = "raulfdm/taco-api:latest";
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

console.log("Build");

Bun.spawnSync(["docker", "push", latestVersion]);
Bun.spawnSync(["docker", "push", tagVersion]);

console.log("Docker images pushed");
