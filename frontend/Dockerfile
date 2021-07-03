# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

# add app
COPY . .

# start app
RUN npm run build