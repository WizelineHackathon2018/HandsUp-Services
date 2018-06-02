FROM debian:latest

MAINTAINER Barbarillos Team <cilp2912@gmail.com>

# installs all the app required packages
RUN apt-get update && apt-get -y install gnupg2 curl htop vim git build-essential \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn \
    && npm install -g pm2


WORKDIR /var/www/html/handserver

COPY package.json .
RUN yarn install
COPY . .
