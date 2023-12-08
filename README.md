# Taco GraphQL API

> Brazilian Table of Food Composition

![GraphQL Client](./apps/website/docs/images/graphql-client.png)

<p align="center">
 <a href="https://github.com/raulfdm/taco-api/actions/workflows/ci.yml">
   <img src="https://github.com/raulfdm/taco-api/actions/workflows/ci.yml/badge.svg"
        alt="build status">
 </a>
</p>

## Getting started

Make sure to have installed:

- [Node 20 or higher](https://nodejs.org/en) - For Prisma
- [Bun](https://bun.sh/)

Clone/fork this repo.

Install the dependencies:

```bash
bun install
```

Run the API:

```bash
bun run dev --filter=taco-api
```

## Structure

This project is a monorepo:

- [The API project](./apps/taco/)
- [The DOCs project](./apps/website)

The monorepo handling is done by Turbo and Bun.

## Docs

For more details about this API, check the official docs:

- [Portuguese](https://taco-api.netlify.app/)
- [English](https://taco-api.netlify.app/en)

## License

[MIT](./LICENSE.md)
