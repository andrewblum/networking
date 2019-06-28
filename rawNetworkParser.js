const fs = require('fs');
 
fs.readFile('net.cap', function(err, data) {
  // contents is a buffer of Unit8Array, 8 bit unsigned (single byte) entries.
  // contents = contents.toString('hex')
  pcapHeader(data)
  data = data.slice(24, data.length)

  console.log(data.slice(0, 1))

  for (let i = 0; i < data.length; i++) {
  }
});





function pcapHeader(contents) {
  console.log(contents.toString('hex', 0, 4))
  console.log(contents.slice(0, 4))

  console.log(contents.slice(4, 6))

  console.log(contents.slice(6, 8))

  console.log(contents.slice(8, 12))

  console.log(contents.slice(12, 16))

  console.log(contents.slice(16, 20))

  console.log(contents.slice(20, 24))
}
