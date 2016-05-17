FROM node:latest
EXPOSE 3000
COPY . /src/
RUN cd /src && npm install express

VOLUME /logs
WORKDIR /src

CMD ["node", "app.js"]
