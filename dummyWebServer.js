const net = require('net');
const webServer = net.createServer((socket) => {
  socket.on('data', (data) => {
    socket.write('this is a response from the server')
  })
  socket.pipe(socket);
})

webServer.listen(5001, '127.0.0.1')