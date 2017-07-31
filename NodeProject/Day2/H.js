/**
 * http://usejsdoc.org/
 */
const fs = require('fs');

//비동기방식
//fs.readFile('../package.json1', 'utf-8', (err, data) => {
//	if(err){
//		console.log(err);
//		return;
//	}
//	console.log('readData : ' + data);
//});

//동기방식
//var data = fs.readFileSync('../package.json', 'utf-8');

//console.log('data : ' + data);


fs.open('./sam.txt', 'w', (err, fd) => {
	if(err){
		console.log(err);
		return;
	}
	console.log(fd);
	
	
	var buf = new Buffer('hello 노드 1234');
	fs.write(fd, buf, 0, buf.length, (err, witten, buffer) => {
		if(err){
			console.log(err);
		}
		console.log(witten);
		console.log(buffer);
		
		fs.close(fd,() => {
			console.log('close success');
		});
		
	});
	
	
});
















