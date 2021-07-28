# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /frontend

COPY package.json /frontend

RUN npm install --save --silent
RUN npm install react-scripts@latest -g --silent

# add app
COPY . .

# start app
RUN npm run build
