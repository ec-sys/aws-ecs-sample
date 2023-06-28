#FROM node:14.5.0-alpine
#
#ENV NODE_ENV=production
#
## configure working directory
#
#WORKDIR /app
#
#COPY ["package.json", "package-lock.json*", "./"]
#
#RUN npm install --production
#
## build app
#
#COPY . .
#
#EXPOSE 8080
#
#CMD["node", "index.js"]


FROM node:14.5.0-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
