FROM mhart/alpine-node:8.0.0

RUN apk add --no-cache git

RUN mkdir -p /var/app/current/dist
WORKDIR /var/app/current
COPY package.json package-lock.json /var/app/current/

RUN npm install --production

COPY ./dist/ /var/app/current/dist/

EXPOSE 3000

CMD ["npm", "start"]
