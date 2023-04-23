const {readFile,writeFile} = require('fs').promises;

async function copyFile(input,output){
// reading from file
console.log('copying...')
const data = await readFile(input);
const res = await writeFile(output,data);
console.log('done')
}
let input = process.argv[2];
let output = process.argv[3];
copyFile(input,output);