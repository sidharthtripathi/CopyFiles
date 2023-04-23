// now writableStream and read using fs modules


const {createWriteStream,readFile,readFileSync} = require('fs')

// creating the writeStream

const writeStream = createWriteStream('output.iso');

//reading file sync
const data = readFileSync('tekken6.iso')
writeStream.write(data);

// working