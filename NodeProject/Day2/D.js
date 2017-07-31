/**
 * http://usejsdoc.org/
 */

var os = require('os');
var path = require('path');

console.log(os.hostname());

console.log(__filename);
console.log(__dirname);

var img = path.join(__dirname, 'img');
console.log(img);

var img = path.join(__dirname, 'img', 'sam.png');
console.log(img);

var foo = path.join('/foo', 'bar','..','baz/asdf', 'quux', '..');
console.log(foo);








