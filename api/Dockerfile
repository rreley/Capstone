# API Dockerfile

FROM node:14-slim

WORKDIR /home/node/api

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]