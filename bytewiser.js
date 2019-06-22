// Exercise 1

// Write a node program that prints a buffer object containing
// the string "bytewiser" using console.log.

// const buf1 = Buffer.from('bytewsier');
// const buf2 = new Buffer('bytewiser');
// console.log(buf2);

// Exercise 2
// const input = process.argv;
// console.log(Buffer.from(input).toString('hex').replace(/^0+/, ''))

// Exercise 3 
// look at process stdin and change all . to ! and console log 

// process.stdin.on('data', buff => {
//   for (let i = 0; i < buff.length; i++) {
//     if (buff[i] === 46) {
//       buff[i] = 33
//     }
//   }
//   console.log(buff)
// })


// exercise 4 
// const fs = require('fs');
// filename = process.argv[2]
// fs.readFile(filename, (err, contents) => {
//   let start = 0;
//   for (let i = 0; i < contents.length; i++) {
//     if (contents[i] === 10 || i === contents.length - 1) {
//       console.log(contents.slice(start, i))
//       start = i + 1;
//     }
//   }
// })

// exercise 5 




