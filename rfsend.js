var exec = require('child_process').exec;

var ON = '1400588', OFF = '1400579';
var CODESEND = 'sudo /home/pi/433Utils/RPi_utils/codesend ';

function heatOn() {
	codesend(ON);
}

function heatOff() {
	codesend(OFF);
}

function codesend(code) {
	exec(CODESEND + code, function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
}

heatOn();