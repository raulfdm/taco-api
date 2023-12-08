import { dependencies } from "../package.json";

await Bun.build({
  entrypoints: ["./src/app.ts"],
  outdir: "./dist",
  external: Object.keys(dependencies),
  target: "bun",
  splitting: true,
});
