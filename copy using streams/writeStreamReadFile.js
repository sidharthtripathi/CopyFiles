// now writableStream and read using fs modules


const {createWriteStream,readFile,readFileSync} = require('fs')

// creating the writeStream

const writeStream = createWriteStream('output.iso');

//reading file async
readFile('tekken6.iso',(err,data)=>{
	writeStream.write(data);
})

// working
