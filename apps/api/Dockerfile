# It needs to be node. Prisma still depends on something from node
# to generate the client.
FROM node:20-slim as base

# Install OpenSSL. Required for prisma to work.
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Install bun to be available in all stages.
RUN npm install -g bun@1.0.20

FROM base as installer
# install with devDependencies to be used later
RUN mkdir -p /temp/dev

COPY package.json bun.lockb /temp/dev/
COPY /apps/api/package.json /temp/dev/apps/api/package.json
COPY /apps/website/package.json /temp/dev/apps/website/package.json

RUN --mount=type=cache,id=buncache,target=/root/.bun/install/cache\
  cd /temp/dev &&\
  bun install --frozen-lockfile --ignore-scripts

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
COPY /apps/api/package.json /temp/prod/apps/api/package.json
# We need to include the website package.json because otherwise it will throw
# an error due to a difference between lockfiles
COPY /apps/website/package.json /temp/prod/apps/website/package.json
RUN --mount=type=cache,id=buncache,target=/root/.bun/install/cache\
  cd /temp/prod &&\
  bun install --frozen-lockfile --ignore-scripts --production

# ------------------------------ #
FROM base as prerelease
ENV NODE_ENV=production

COPY --from=installer /temp/dev/node_modules node_modules

COPY . .

RUN bun run build --filter=taco-api

# ------------------------------ #
FROM base AS release

ENV NODE_ENV=production

COPY --from=installer /temp/prod/node_modules /app/node_modules
# Includes the database and schema
COPY --from=prerelease /app/apps/api/prisma /app/prisma
COPY --from=prerelease /app/apps/api/tsconfig.json /app/tsconfig.json
COPY --from=prerelease /app/apps/api/dist /app/dist
COPY --from=prerelease /app/apps/api/package.json .

# run the app
EXPOSE 4000
ENTRYPOINT bun run start