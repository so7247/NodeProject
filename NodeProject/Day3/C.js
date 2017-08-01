/**
 * http://usejsdoc.org/
 */

const fs = require('fs');
const path = require('path');

var fname = 'package.json';
var dname = '..';

var dfname = path.join(dname,fname);
var data1 = 'basic';
fs.readFile(dfname, 'utf8', (err, data) => {
	if(err){
		console.log(err);
		return;
	}
	data1 = data;
	console.log('함수 안' + data);
	console.log('함수 안 this' + this.data);
});

console.log('함수 밖' + data1);
function a(){
	console.log('a 밖' + data1);
};

setTimeout(a, 4000);