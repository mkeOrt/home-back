FROM node:18.6.0-bullseye-slim

RUN mkdir /home/app
WORKDIR /home/app
COPY . .

RUN yarn --ignore-engines --ignore-optional --prefer-offline 
RUN yarn build

CMD ["node",  "/home/app/dist/main.js"]