const net = require('net');

// CLIENT

const client = new net.Socket();

client.on('message', (msg, rinfo) => {
  console.log('Got a message')
  parseDnsResponse(msg);
  console.log(rinfo)
});

client.connect(5000, '127.0.0.1', () => {
  console.log(' client connected')
  socket.write('hello server')
});

client.on('data', (data) => {
  console.log('got data:', data);
})

client.on('close', () => {
  console.log('connection was closed')
})


// SERVER

const server = netcreateServer((socekt) => {
  socket.pipe(socket);
})

server.listen(5000, '127.0.0.1')