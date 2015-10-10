var gpio = require('rpi-gpio');

gpio.on('change', function(channel, value) {
	console.log(channel + ' = ' + value);
});
gpio.setup(13, gpio.DIR_IN, gpio.EDGE_BOTH, function(err){
	if (err) {
		return console.error("Cannot set pin 13: %s", err);
	}
});

setTimeout(function(){}, 200000);

