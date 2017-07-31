/**
 * http://usejsdoc.org/
 */

//setTimeout(함수명 , 1000); 일정 시간 후 함수를 실행한다
//setInterval(); 일정 시간마다 반복해서 실행한다.
//clearTimeout();


function a(){
	console.log('a');
}
//setTimeout(a, 1000);
var time = setInterval(a, 1000);
console.log('b');

function b () {
	clearTimeout(time);
}
setTimeout(b, 5000);

// http://www.naver.com:80/test/img/sam/aa.js?a=b&c=d


