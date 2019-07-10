const net = require('net');
const dns = require('dns');
const CACHE = {};

// ***** CLIENT ******

const client = new net.Socket();

client.on('close', () => {
  console.log('connection was closed')
})




// ***** CACHE SERVER *****

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    parseRequest(data, socket)
  })
  socket.pipe(socket);
})

server.listen(5000, '127.0.0.1')

function parseRequest(request, socket) {
  console.log('socket data obtained', request)
  if (!requestInCache(request)) {
    const response = httpRequest(request)
    //socket.write(response)
  } else {
    socket.write(CACHE[request])
  }
}

function httpRequest(request) {
  client.connect(5001, '127.0.0.1', () => {
    console.log('client connected')
    client.write(request)
  });

  client.on('data', (data) => {
    console.log('client got response:', data);
  })  
}

function requestInCache(request) {
    return false;
}
