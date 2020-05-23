FROM node:10-alpine

WORKDIR /main
COPY ./backend/WebSocket.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 6000

CMD ["node", "websocket.js"]