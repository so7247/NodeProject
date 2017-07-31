/**
 * http://usejsdoc.org/
	
 */

const url = require('url');
const quriyString = require('querystring');

var sURL = 'http://user:pass@host.com:8080/p/a/t/h?query=string&name=korea&age=20#hash';

var cururl = url.parse(sURL);

var href = cururl.href;

console.log('href : ' + href);
console.log('host : ' + cururl.host);
console.log('quriy : ' + cururl.query);
var obj = quriyString.parse(cururl.query);
console.log(obj); //쩐당














