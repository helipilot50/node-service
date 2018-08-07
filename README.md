# node-service
A sample `Pet` microservice using Node.js (Express.js)

### Run Locally
```
$ git clone https://github.com/naderskhan/node-service.git
$ cd node-service
$ npm install
$ npm start
# Hit http://localhost:3000/
```

### Run using Docker
```
$ docker build -t node-service .
$ docker run -p 3000:3000 -d node-service
# Hit http://localhost:3000/
```

### Lint & Test
```
$ npm run lint
$ npm test
```

### Access Logs
```
Check /logs/transactions.log

```
