/**
 * http://usejsdoc.org/
 */


const net = require('net');

var server = net.createServer((socket)=>{
	console.log(socket.remoteAddress);
	
	
	socket.on('data', (data) => {
		console.log(data +'');
		socket.write('echo : ' + data);
	});
	
	socket.on('end', () =>{
		console.log('연결 종료');
	});
});

server.listen(12345);
console.log('server start');


































