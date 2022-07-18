FROM node:18.6

WORKDIR /home/app
COPY /dist .

CMD ["yarn",  "start:dev"]