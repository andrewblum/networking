const net = require('net');
const CACHE = {};

// ***** CACHE SERVER *****

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    parseRequest(data, socket)
  })
  socket.pipe(socket);
})

server.listen(5000, '127.0.0.1')

function parseRequest(request, socket) {

  if (!requestInCache(request)) {
    httpRequest(request, socket)
  } else {
    socket.write(CACHE[request])
  }
}

// Connection to our web server
const client = new net.Socket();
client.connect(5001, '127.0.0.1', () => {});

function httpRequest(request, socket) {
  client.on('data', (data) => {
    socket.write(data)
  }) 
  client.write(request)
}

function requestInCache(request) {
  if (CACHE[request]) {
    return true;
  } else {
    CACHE[request] = request;
  }
}
