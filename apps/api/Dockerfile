# It needs to be node. Prisma still depends on something from node
# to generate the client.
FROM node:20-slim as base

# Install OpenSSL. Required for prisma to work.
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Install bun to be available in all stages.
RUN npm install -g bun@1.2.2

FROM base as setup

COPY package.json bun.lockb ./
COPY /apps/api/package.json ./apps/api/package.json
COPY /apps/website/package.json ./apps/website/package.json
COPY /scripts/fix-graphql-types.ts ./scripts/fix-graphql-types.ts

RUN bun install

COPY . .

RUN bun run db:generate --filter=taco-api
# this build command generates a standalone binary
RUN bun run build --filter=taco-api

# node:20-slim is based on debian:bookworm-slim, but I don't want node
FROM debian:bookworm-slim as release

# Install OpenSSL. Required for prisma to work.
RUN apt-get update -y && apt-get install -y openssl

COPY --from=setup /app/apps/api/dist/taco-api-standalone .
COPY --from=setup /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=setup /app/apps/api/prisma ./apps/api/prisma

# run the app
EXPOSE 4000
ENV NODE_ENV production
ENTRYPOINT ./taco-api-standalone