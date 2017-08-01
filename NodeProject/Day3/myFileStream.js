/**
 * 파일 관리하는 모듈을 만들어서 이를 불러와서 실행하는
   자바 스크립트를 만들어라
 
 * myfilestream.js
   
   파일 읽기,
   파일 쓰기
   폴더 생성
   파일 삭제
   파일 이름 변경
   파일 목록 불러오기

 */

const fs = require('fs');
const path = require('path');


exports.myFileRead = (fname, dname, func) => {
	var dfname = path.join(dname, fname);
	fs.readFile(dfname, func);
};

exports.myReadDir = (dname, fn) => {
	fs.readdir(dname, fn);
};









