/**
 * http://usejsdoc.org/
 */

const mtfs = require('./myFileStream');


var fname = 'package.json';
var dname = '..';

//mtfs.myFileRead(fname, dname, (err, data) => {
//	if(err){
//		console.log(err);
//		return;
//	}
//	console.log('읽기 성공 : ' + data);
//	mtfs.myReadDir('.', (err, files) => {
//		if(err){
//			console.log(err);
//			return;
//		}
//		files.forEach(function(elt) {
//			console.log(elt);
//		});
//	});
//});

console.log('a');
//console.log(data);


mtfs.myFileRead(fname, dname, (err, data) => {
	if(err){
		console.log(err);
		return;
	}
	console.log('읽기 성공 : ' + data);
});

console.log('a');
//console.log(data);

mtfs.myReadDir('.', (err, files) => {
	if(err){
		console.log(err);
		return;
	}
	files.forEach(function(elt) {
		console.log(elt);
	});
});








