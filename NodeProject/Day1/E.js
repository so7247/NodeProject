/**
 * http://usejsdoc.org/
 */

//var os = require('os');
//
////console.log(os.cpus());
//
//console.log('hostname : ' + os.hostname());

var fs = require('fs');
var data = 'korea test 티아카데미';
var fname = 'sam.txt';

////비동기
//fs.writeFile(fname, data, (err) => {
//	if(err){
//		console.log('쓰기 실패 \\ ' + err);
//		return;
//	}
//	console.log('쓰기 성공');
//});

//동기방식
//fs.writeFileSync(fname, data);
//
//console.log('Tacademy');
var newData = '';
fs.readFile(fname, (err, data) => {
	if(err){
		console.log('읽기 실패 \\ '+ err);
		return;
	}
	newData = data;
	console.log('읽기성공');
	console.log(newData);
	console.log(''+newData);
});
/*console.log(newData);*/





