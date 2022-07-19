FROM node

WORKDIR /home/app
COPY . .

RUN yarn
RUN yarn build

CMD ["node",  "/home/app/dist/main.js"]