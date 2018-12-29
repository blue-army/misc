FROM mcr.microsoft.com/azure-functions/node:2.0

WORKDIR /home/site/wwwroot

COPY . /home/site/wwwroot
RUN npm install
RUN node_modules/.bin/tsc -p ./src

EXPOSE 80
CMD [ "npm", "start" ]
