/**
 * http://usejsdoc.org/
 */

var _ = require('underscore');

var arr = [4, 2, 2, 3, 4, 5, 6];

//var first = arr[0];
var first = _.first(arr);

console.log(first);

//var last = arr[arr.length];
var last = _.last(arr);

console.log(last);
