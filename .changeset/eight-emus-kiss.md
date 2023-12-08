---
"taco-api": major
---

Switch from node to bun

In case you don't know bun, I strongly recommend you to take a look in [their docs](https://bun.sh/). In summary, it's a fast JavaScript runtime that provides tons of performance and great nodejs compat.

The advantage of using Bun instead Node is:

- We don't need `tsx` for handling TypeScript files (such as scripts) or running the dev locally;
- We don't need `esbuild` to build the final file;
- We don't need `pnpm` to install dependencies;
- everything is fast

Though, because we're using Prisma and it relies on NodeJS to do some generation, you may still have Node installed.

Some differences from the previous setup:

Install dependencies:

```diff
-pnpm install
+bun install
```

Run dev server:

```diff
-pnpm run dev
+bun run dev
```

Build the project:

```diff
-pnpm run build
+bun run build
```

etc..

Because we're changing the runner, it's a major bump. If you still want to use Node, I'd recommend you to be in the version 2.
