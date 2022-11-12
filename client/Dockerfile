FROM node:17-alpine

WORKDIR /home/client_node/app

COPY package.json .
RUN npm install --force

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]