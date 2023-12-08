import { $ } from "execa";

import { version } from "../package.json";

const command = `docker build -t raulfdm/taco-api:v${version} -t raulfdm/taco-api:latest .`;

await $({ shell: true, stdio: "inherit" })`${command}`;
