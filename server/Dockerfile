FROM node:20.9.0

# Create app directory
WORKDIR /user/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install


# Bundle app source
COPY ./dist /user/src/app/dist

EXPOSE 8000

CMD ["node","--watch","./dist/server.js"]