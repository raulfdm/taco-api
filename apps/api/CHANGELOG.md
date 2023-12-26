# taco-api

## 3.0.2

### Patch Changes

- 76e7f1a: update bun to 1.0.20

## 3.0.1

### Patch Changes

- 5257a21: fix optional options

## 3.0.0

### Major Changes

- 65ccf6d: replace express with elysia.

  Taco API now runs on top of bun and we have faster and better HTTP frameworks.

  We don't do anything fancy that only express could do. To provide an HTTP client for a single endpoint, we can rely on something more modern.

- bc854f6: Switch from node to bun

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

- 5384de3: new docs website.

  Now, instead using vuepress, I've switch to starlight and refactor the whole docs.
