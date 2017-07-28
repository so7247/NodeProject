/**
 * http://usejsdoc.org/
 */
//은닉
var pri = function(){
	console.log('내부함수');
};
//모듈
exports.add = function(a,b){
	pri();
	return a + b;
};

var/*private*/ num = 100;
exports/*public*/.MAX = 100;