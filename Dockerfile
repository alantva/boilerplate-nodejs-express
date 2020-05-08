FROM node:13

ENV DIR /usr/src
ARG NODE_ENV
ARG PORT

# Create app directory
WORKDIR $DIR

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . $DIR
RUN yarn --silent

EXPOSE $PORT
