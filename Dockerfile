FROM node:13

ENV DIR /usr/src
# Create app directory
WORKDIR $DIR
COPY . $DIR
# Install app dependencies
RUN yarn --silent
