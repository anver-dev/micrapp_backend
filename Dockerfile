FROM node:16.13.2-alpine3.15
WORKDIR /app
COPY . .
RUN npm install --production \
    node /app/lib/generateKeyPair.js
CMD ["node", "/app/server.js"]