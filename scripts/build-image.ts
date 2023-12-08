import { version } from "../apps/taco/package.json";

Bun.spawnSync(
  [
    "docker",
    "build",
    "-f",
    "./apps/taco/Dockerfile",
    "-t",
    `raulfdm/taco-api:v${version}`,
    "-t",
    "raulfdm/taco-api:latest",
    ".",
  ],
  {
    stdio: ["inherit", "inherit", "inherit"],
  },
);
