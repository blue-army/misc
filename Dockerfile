FROM node as builder

RUN apt-get update && \
    apt-get install cpio

WORKDIR /server

COPY ./package.json /server
RUN npm install

COPY . /server
RUN ./build.sh

FROM mcr.microsoft.com/azure-functions/node:2.0

WORKDIR /functions

ENV AzureWebJobsScriptRoot=/functions

COPY --from=builder /server/dist .
