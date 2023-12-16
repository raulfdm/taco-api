# It needs to be node. Prisma still depends on something from node
# to generate the client.
FROM node:slim as base

# Install OpenSSL. Required for prisma to work.
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Install bun to be available in all stages.
RUN npm install -g bun@1.0.18

FROM base as installer
# install with devDependencies to be used later
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
COPY /apps/api/package.json /temp/dev/apps/api/package.json
COPY /apps/website/package.json /temp/dev/apps/website/package.json
RUN cd /temp/dev && bun install --frozen-lockfile --ignore-scripts

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
COPY /apps/api/package.json /temp/prod/apps/api/package.json
# We need to include the website package.json because otherwise it will throw
# an error due to a difference between lockfiles
COPY /apps/website/package.json /temp/prod/apps/website/package.json
RUN cd /temp/prod && bun install --frozen-lockfile --production --ignore-scripts

# ------------------------------ #
FROM base as prerelease
ENV NODE_ENV=production

COPY --from=installer /temp/dev/node_modules node_modules
COPY . .

RUN bun run build --filter=taco-api
RUN cd ./apps/api && bunx prisma generate

# ------------------------------ #
FROM base AS release
ENV NODE_ENV=production

COPY --from=installer /temp/prod/node_modules /app/node_modules
# Includes the prisma client generated
COPY --from=prerelease /app/node_modules/.prisma /app/node_modules/.prisma
# Includes the database and schema
COPY --from=prerelease /app/apps/api/src/infrastructure/prisma /app/src/infrastructure/prisma
COPY --from=prerelease /app/apps/api/dist/app.js .
COPY --from=prerelease /app/apps/api/package.json .

# run the app
EXPOSE 4000
ENTRYPOINT [ "bun", "run", "app.js" ]