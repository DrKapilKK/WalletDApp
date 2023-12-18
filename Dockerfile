FROM node:19

RUN echo "Installing Start ..."

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "wallet-dictionary.js"]

RUN echo "Done!!"