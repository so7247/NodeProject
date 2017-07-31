/**
 * http://usejsdoc.org/
 */

const net = require('net');

var IP = '192.168.205.119';
var port = '12345';

var client = new net.Socket();

client.connect(port, IP, () => {
	console.log('connect');
	client.write('야호~!');
});

client.on('data', (data) => {
	console.log(data+'');
	client.end();
});

client.on('end', () => {
	console.log('END');
});




























