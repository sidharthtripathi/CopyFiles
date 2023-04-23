	const {createReadStream,createWriteStream} = require('fs');

	const readStream = createReadStream('tekken6.iso');
	const writeStream = createWriteStream('write.txt');

	readStream.on('data',(chunk)=>{
		writeStream.write(chunk)
	})