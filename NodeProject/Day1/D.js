/**
 * http://usejsdoc.org/
 */
//const/*final*/ http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World\n');
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});


//외부함수
//add, sub, multi, divde 함수를 생성해서
// 그 함수를 불러와서 실행하는 함수 구현
//(인자는 두개씩)
//외부함수의 이름 calc.js
//실행하는 함수는 calcTest

var calcTest = require('./calc');

console.log(calcTest.add(6,7));
console.log(calcTest.sub(6,7));
console.log(calcTest.multi(6,3));
console.log(calcTest.divde(6,3));


