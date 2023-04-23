// copy file using sycn method
const {readFileSync,writeFileSync} = require('fs');
console.log('copying...');
function copySync(input,output){
	const data = readFileSync(input);
	writeFileSync(output,data);
}
let input = process.argv[2];
let output = process.argv[3];
copySync(input,output);
console.log('done')
