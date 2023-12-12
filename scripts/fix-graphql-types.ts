/**
 * This hack only exists until the types is fixed in graphql-modules:
 * @see https://github.com/Urigo/graphql-modules/issues/2480
 * @see https://github.com/Urigo/graphql-modules/pull/2481
 */
import path from "path";

const BASE_PATH = path.resolve(
  import.meta.dir,
  "../node_modules/graphql-modules",
);

const GRAPHQL_MODULES_PKG_JSON_PATH = `${BASE_PATH}/package.json`;

const graphqlModulesPkgJson = Bun.file(GRAPHQL_MODULES_PKG_JSON_PATH);

const jsonContent = await graphqlModulesPkgJson.json();

jsonContent.exports["."].types = `./${jsonContent.typings}`;
jsonContent.exports["./*"].types = "./*.d.ts";

Bun.write(GRAPHQL_MODULES_PKG_JSON_PATH, JSON.stringify(jsonContent, null, 2));

console.log("`graphql-modules` types fixed!");
