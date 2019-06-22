const fs = require('fs');
 
fs.readFile('net.cap', function(err, contents) {
    console.log(contents);
});
