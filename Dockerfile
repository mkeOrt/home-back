FROM node

WORKDIR /home/app/dist
COPY dist .
COPY node_modules .

CMD ["node",  "main.js"]