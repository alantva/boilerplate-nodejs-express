FROM node:13

ENV DIR /usr/src
ARG PORT

# Create app directory
WORKDIR $DIR

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json $DIR

RUN yarn --silent

# Bundle app source
COPY . $DIR

EXPOSE $PORT
