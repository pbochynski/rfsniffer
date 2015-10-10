var gpio = require('rpi-gpio');

var state = null;
var start = process.hrtime();

gpio.on('change', function(channel, value) {
	if (state!=value) {
		var diff = process.hrtime(start);
		console.log(channel + ' = ' + value+', time: %s s, %s ns',diff[0], diff[1]);
		state = value;
	}
});

gpio.setup(13, gpio.DIR_IN, gpio.EDGE_BOTH, function(err){
	if (err) {
		return console.error("Cannot set pin 13: %s", err);
	}
});

setTimeout(function(){}, 200000);

