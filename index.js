const http = require('http');
const validatePhoneNumber = require('validate-phone-number-node-js');
const hostname = '127.0.0.1';
const port = 3000;

const result = validatePhoneNumber.validate('8800963996');
console.log(result);

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
