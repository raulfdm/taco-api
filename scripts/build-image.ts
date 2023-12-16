import { version } from "../apps/api/package.json";

Bun.spawnSync(
  [
    "docker",
    "build",
    "-f",
    "./apps/api/Dockerfile",
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
