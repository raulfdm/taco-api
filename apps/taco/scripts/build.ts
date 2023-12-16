import { dependencies } from "../package.json";

const result = await Bun.build({
  entrypoints: ["./src/app.ts"],
  outdir: "./dist",
  external: Object.keys(dependencies),
  target: "bun",
  splitting: true,
});

if (result.success) {
  console.log("Build success");
  process.exit(0);
} else {
  console.log("Build failed");
  console.log(result.logs);
  process.exit(1);
}
