# Changelog

## 2.2.0

### Minor Changes

- aa9b51c: update all dependencies, including [Prisma 5](https://www.prisma.io/blog/prisma-5-f66prwkjx72s) which brings huge performance improvement
- aa9b51c: add a build step and run the production with node itself instead `tsx`

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
Added for new features.
Changed for changes in existing functionality.
Deprecated for soon-to-be removed features.
Removed for now removed features.
Fixed for any bug fixes.
Security in case of vulnerabilities.

 -->

## [2.1.0]

### What has changed?

- add new `getFoodByName` query:

```gql
query FoodByName {
  getFoodByName(name: "carne") {
    name
  }
}
```

## [2.0.0]

This is the major change after 5 years of this project creation.

I've decided to revamp completely the project using modern tech and implementing a few features some people asked a couple years ago.

### What has changed?

The main change here is now the project is complete type-safe thanks to [Prisma](https://prisma.io).

Also, instead Rest API, I've decide to switch completely to GraphQL. This will makes the documentation and the ability to fetch data easier.

### all changes

- refactor everything to TypeScript;
- re-done the data processing to fix data mistakes such as keeping strings with numbers;
- remove APIDoc in favor of GraphQL api docs;
- update docs;
- switch from `npm` to `pnpm`;
- use relational database (`SQLite`) instead local `json` files for storing data;
- implement filter ability. Now for in a few endpoints you can pass `skip` and `take` ([see more here](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#offset-pagination));
- migrate to Node18;
- use full ESM instead CJS;

## [1.0.1]

- tag docker image with `v1`

## [1.0.0]

- create a tag version to prep v2 to get in place

## [0.1.0]

### Added

- MIT License;
- Changelog file;
- CI with Travis;
- Unit/integration tests with Jest;
- Prettier/eslint to keep code quality;
- API Documentation with [apidocJS](http://apidocjs.com/#param-api-success)

### Changed

- Improve `package.json` information;
- Rename all files/methods/code in general to ENGLISH;
- Refactor routes
