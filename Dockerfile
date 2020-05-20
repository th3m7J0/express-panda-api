FROM node:8

#Create API directory
WORKDIR /usr/src/API

# Install app dependencies
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . . # add volume in docker-compose this is just for dev

EXPOSE 3001

CMD npm run dev
