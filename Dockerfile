FROM node:18

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .

RUN corepack enable
RUN corepack prepare pnpm@latest-8 --activate

RUN pnpm i --prod --ignore-scripts

COPY . .

RUN ls

RUN pnpm prisma generate
RUN pnpm run build

EXPOSE 4000

CMD [ "pnpm", "start" ]