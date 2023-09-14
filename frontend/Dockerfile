FROM node:18.17.1-alpine3.18 as build

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.17.1-alpine3.18

WORKDIR /home/app

COPY --from=build /home/app/dist/ .

EXPOSE 8080

CMD [ "npx", "http-server", "-y" ]
