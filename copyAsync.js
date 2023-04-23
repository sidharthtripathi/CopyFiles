const {readFile,writeFile} = require('fs');
console.log('copying...')
function copyFile(input,output){
	readFile(input,(err,data)=>{
	writeFile(output,data,(err)=>{console.log('done')})
})
}
let input = process.argv[2];
let output = process.argv[3];
copyFile(input,output)
