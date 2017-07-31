/**
 * http://usejsdoc.org/
 */

const fs = require('fs');
const readline = require('readline');

var fname = 'K.txt';

var fInput = fs.createReadStream(fname)




const rl = readline.createInterface( fInput,process.stdout);

rl.on('line', function(data) {
	var name = data.split(' ');
	console.log(name[0]);
	console.log(data);
});

rl.on('close',()=>{
	console.log('read end');
})

