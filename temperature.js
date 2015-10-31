var ds18b20 = require('ds18b20');
var RADIATOR = '28-031467bacdff';
var ROOM = '28-0115621a55ff';
var heat = require('./heat');

ds18b20.sensors(function(err, ids) {
	ids.forEach(function (id){
			console.log(id);
			setInterval(function(){
				readTemp(id);
			}, 10000);
		}
	);
});

function getDate() {
  return new Date().toISOString().
	  replace(/T/, ' ').      // replace T with a space
	  replace(/\..+/, '');     // delete the dot and everything after
}

function readTemp(id) {
	ds18b20.temperature(id, function (err, value) {
		console.log(getDate()+' '+id+': ', value);
	});
}

function regulator() {
	ds18b20.temperature(ROOM, function (err, value) {
		if (err) return;
		if (value > 22.0) {
			heat.off();
			console.log(getDate()+': Heat Off');
		}
		if (value < 20.0) {
			heat.on();
			console.log(getDate()+': Heat On');
		}
	});
}

setInterval(regulator, 60000);