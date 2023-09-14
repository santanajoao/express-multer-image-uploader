FROM node:18.17.1-alpine3.18 as build

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

FROM node:18.17.1-alpine3.18

WORKDIR /home/app

COPY package*.json ./

RUN npm install --production

COPY --from=build /home/app/dist ./
COPY --from=build /home/app/src/data ./src/data/

CMD [ "node", "src/server.js" ]
