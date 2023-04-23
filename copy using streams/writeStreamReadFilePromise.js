// now writableStream and read using fs modules


const {createWriteStream,readFileSync} = require('fs')
const {readFile} = require('fs').promises;
// creating the writeStream

const writeStream = createWriteStream('output.iso');

//reading file async
readFile('tekken6.iso')
.then((data)=>{
	writeStream.write(data);
})
// working
