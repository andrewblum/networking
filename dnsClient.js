const dgram = require('dgram')
const server = dgram.createSocket('udp4');

const DNSHEADER = [['ID', 16], ['QR', 1], ['OPCODE', 4], ['AA', 1], 
                  ['TC', 1], ['RD', 1], ['RA', 1], ['Z', 3], ['RCODE', 4], 
                  ['QDCOUNT', 16], ['ANCOUNT', 16], ['NSCOUNT', 16], ['ARCOUNT', 16]];

const DNSQUESTION = [['QNAME', '?'], ['QTYPE', 16], ['QCLASS', 16]];

server.on('message', (msg, rinfo) => {
  console.log('Got a message')
  parseDnsResponse(msg);
  console.log(rinfo)
});

server.on('listening', () => {
  console.log(`I'm awake`)
});

server.bind(1153)
                         
let hex = '86510120000100000000000106676f6f676c6503636f6d00000100010000291000000000000000';
let msg = Buffer.from(hex, 'hex');
let length = msg.length // calculate length of message in byte as an int

server.send(msg, 0, length, 53, '8.8.8.8', () => {
  console.log('DNS request sent')
})

function parseDnsResponse(msg) {
  const unpackedHeader = unpacker(msg, DNSHEADER);
  console.log(unpackedHeader)
}

function unpacker(buffer, format) {
  let currentPos = 0; 
  const response = {};
  for (let val of format) {
    let headerValue = buffer.slice(currentPos, currentPos + val[1]);
    //let headerValue = buffer.readUIntBE(currentPos, val[1]);
    response[val[0]] = headerValue;
    currentPos += val[1];
  }
  return response;
}










