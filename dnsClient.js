const net = require('net');

const unixServer = net.createServer((client) => {
  // do something with the client connection
  console.log(client)
})

unixServer.listen(80);

