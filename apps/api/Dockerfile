# It needs to be node. Prisma still depends on something from node
# to generate the client.
FROM node:20-slim as base

# Install OpenSSL. Required for prisma to work.
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Install bun to be available in all stages.
RUN npm install -g bun@1.0.18 pnpm@8.12.1

FROM base as builder

COPY . .

RUN --mount=type=cache,id=pnpmcache,target=/pnpm_store \
  pnpm config set store-dir /pnpm_store && \
  pnpm config set package-import-method copy && \
  pnpm install --prefer-offline --ignore-scripts --frozen-lockfile

RUN bun run build --filter=taco-api

RUN mkdir -p /temp/prod
RUN cp -rf /app/apps/api/dist /temp/prod
RUN cp -rf /app/apps/api/prisma /temp/prod
RUN cp -rf /app/apps/api/package.json /temp/prod
RUN cp -rf /app/apps/api/tsconfig.json /temp/prod

FROM base as release

COPY --from=builder /temp/prod .

RUN --mount=type=cache,id=pnpmcache,target=/pnpm_store \
  pnpm config set store-dir /pnpm_store && \
  pnpm config set package-import-method copy && \
  pnpm install --prod --prefer-offline --ignore-scripts

# run the app
EXPOSE 4000
ENV NODE_ENV=production
ENTRYPOINT bun run start