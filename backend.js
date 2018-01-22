const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  let buttonCount = Math.floor(Math.random() * 2)+4;
  let buttonVal = [];
  for (i=0; i<buttonCount; i++) {
      buttonVal[i] = Math.floor(Math.random() * 80) - 30;
  }
  let barsCount = Math.floor(Math.random() * 3)+2;
  let limit = Math.floor(Math.random() * 500);

  let resp = "{\n\"button\" : ["+buttonVal[0];
  for (i=1; i<buttonCount; i++) {
      resp += ", " + buttonVal[i];
  }
  resp += "],\n\"bars\" : " + barsCount + ",\n\"limit\" : " + limit + "\n}"
  res.end(resp);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});