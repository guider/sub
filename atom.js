#!/usr/bin/env node

var child_process = require('child_process');

var  argvs = process.argv;

console.log("befor"+argvs);

console.log(argvs.shift());

console.log("after " +argvs);



var file_path = __dirname;
var current_path = process.cwd;


var arg0=".";
if (argvs.length>1) {
	arg0=argvs[1];
}


var command  = "open -a Atom "+arg0+"&";

console.log(command);

child_process.exec(command,function (error,stdout,stderr){

	if (error) {
		console.log(error);
	}else{
		console.log("atom  start");
	}
})
