/**
 * http://usejsdoc.org/
 */


//process.addListener('exit', () => {
process.on('exit', () => {
	console.log('exit call');
});
process.once('doAdd', () => {
	console.log('doAdd call');
});

function fnc(){
	process.exit();
}
function foo(){
	process.emit('doAdd');
	console.log('foo');
}

//setInterval(foo, 1000);

setTimeout(foo, 5000);
