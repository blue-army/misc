FROM node:8-slim

WORKDIR /server

COPY . /server
RUN npm install
RUN node_modules/.bin/tsc -p ./src

EXPOSE 3000
CMD [ "npm", "start" ]
