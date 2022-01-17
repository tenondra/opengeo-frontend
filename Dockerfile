FROM node:14.15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 100000

COPY docker/.env.example ./.env
COPY . ./

CMD ["yarn", "start"]
