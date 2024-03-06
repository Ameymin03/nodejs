const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('Amey');
  res.end('Server running on port 4000');
});
server.listen(4000, () => {
  console.log('Server running on port 4000');
});
