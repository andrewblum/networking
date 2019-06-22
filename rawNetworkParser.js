const fs = require('fs');
 
fs.readFile('net.cap', function(err, contents) {
  // contents is a buffer of Unit8Array, 8 bit unsigned (single byte) entries.
  //contents = contents.toString('hex')
  console.log(contents.toString('hex', 0, 4))

  for (let i = 0; i < contents.length; i++) {
  }
  // in hex, every 2 charecters represents 1 byte
  // 8 hex charecters holds 4 bytes
  // our magic number is the first 8 hex charecters 

  console.log(contents[4])
  console.log(contents[5])

  console.log(contents[6])
  console.log(contents[7])

  console.log(contents[8])
  console.log(contents[9])
  console.log(contents[10])
  console.log(contents[11])
 
});


function pcapHeader(contents) {

}
