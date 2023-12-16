# It needs to be node. Prisma still depends on something from node
# to generate the client.
FROM node:20-slim as base

# Install OpenSSL. Required for prisma to work.
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Install bun to be available in all stages.
RUN npm install -g bun@1.0.18 pnpm@8.12.1

FROM base as builder
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile -F taco-api
RUN bun run build --filter=taco-api

RUN mkdir -p /temp/prod
RUN cp -r /app/packages/api/dist /temp/prod
RUN cp -r /app/packages/api/package.json /temp/prod
RUN cp -r /app/packages/api/tsconfig.json /temp/prod
# RUN cd /temp/prod && pnpm install --prod --frozen-lockfile
# RUN pnpm deploy -F taco-api --prod prod


# FROM base as release
# COPY --from=builder /app/prod .

# run the app
# EXPOSE 4000
# ENTRYPOINT bun run start