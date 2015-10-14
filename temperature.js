var ds18b20 = require('ds18b20');

ds18b20.sensors(function(err, ids) {
	console.log(ids);
});

// ...
function readTemp() {
	ds18b20.temperature('28-031467bacdff', function (err, value) {
		console.log('Current temperature is', value);
	});
}

setInterval(5000,readTemp);