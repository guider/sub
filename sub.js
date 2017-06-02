#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;

argv.shift();


var file_path = __dirname
var current_path = process.cwd();

var arg0 ='.';


console.log(argv);
if (argv.length>1) {

	arg0 = argv[1];

}

// var command =  "/Applications/Sublime\\ Text.app/Contents/MacOS/Sublime\\ Text"+arg0+"&";

var command =  "open -a Sublime\\ Text "+arg0+"&";

console.log(command);
child_process.exec(command,function (error,stdout,stderr) {

	if (error) {
		console.log(error);
	}else{
		console.log("sublime text start ");
	}

})