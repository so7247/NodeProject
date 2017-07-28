/**
 * http://usejsdoc.org/
 */
console.time('sTime');

var sum = 0;
var i;
for (i = 0; i < 10000; i++) {
	sum += i;
	
}

console.log(`sum : ${sum}`);
console.timeEnd('sTime');

console.log('filename : ' + __filename);
console.log('dirname : ' + __dirname);