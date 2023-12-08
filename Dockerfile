FROM oven/bun:1.0.15 as base

WORKDIR /app

FROM base as installer

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/

RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/index.ts .
COPY --from=prerelease /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts" ]

# ENV NODE_ENV=production

# COPY package.json .
# COPY bun.lockb .

# RUN bun i --ignore-scripts --frozen-lockfile

# COPY . .

# RUN bunx prisma generate
# RUN bun run build

# EXPOSE 4000

# CMD [ "bun", "start" ]