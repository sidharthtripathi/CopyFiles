const {createReadStream} = require('fs');
const {writeFile} = require('fs');
const readStream = createReadStream('tekken6.iso',{
	// adjust this value according to your need
	// higher value -> higher memory consuption and lower cpu usage
	// lower value -> lower memory consuption and hihger cpu usage
	// default is 16KB
	//highWaterMark : 2e+8
	

});
readStream.on('data',(chunk)=>{
	writeFile('output.iso',chunk, {flag : 'a'},(err)=>{});
})

// not working