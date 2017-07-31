/**
 * http://usejsdoc.org/
 */

const fs = require('fs');

const path = require('path');


//var oldname = path.join(__dirname, 'Test.txt');
//var newname = path.join(__dirname, 'Java.txt');

//fs.stat(oldname, (err,stat)=>{
//	if(stat){
//		fs.rename(oldname, newname, (err) => {
//			if(err){
//				console.log(err);
//			}else{
//				console.log('변경 성공');
//			}
//		});
//	}
//});

fs.readdir('.', function(err, files) {
	if(err){
		console.log('불러오기실패');
		return;
	}
	files.forEach((v, index) => {
		console.log(v, index);
	});
})













//fs.stat(newFolder, function(err, stat){
//	if(err){
//		fs.mkdir(newFolder, 0666, (err) => {
//			if(err){
//				console.log('실패');
//			}else{
//				console.log('성공');
//			}
//		})
//	}else{
//		console.log('이미 있음');
//	}
//})



//var fname = './Sam.txt';
//
////fs.exists(fname, function(exists) {
////	console.log(exists ? '존재 한다' : '존재 안함');
////})
//
//fs.stat(fname, function(err, stats) {
//	console.log(err);
//	console.log(stats);
//	if(!err){
//		fs.unlink(fname, (err) => {
//			if(err){
//				console.log(err);
//			}else{
//				console.log('삭제 성공')
//			}
//		})
//	}
//})
