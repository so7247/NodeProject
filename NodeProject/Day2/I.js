/**
 * http://usejsdoc.org/
 */
var fs = require('fs');

var inFile = fs.createReadStream('./sam.txt', {flags : 'r'});
var outFile = fs.createWriteStream('./sam1.txt', {flags : 'w'});

inFile.on('data', (data) => {
	console.log('읽은 데이타', +data);
	outFile.write(data);
});

inFile.on('end', () => {
	console.log('파일읽기 종료');
	outFile.end(() =>{
		console.log('파일 쓰기 종료');
	});
});


