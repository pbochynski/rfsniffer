var ds18b20 = require('ds18b20');


ds18b20.sensors(function(err, ids) {
	ids.forEach(function (id){
			console.log(id);
			setInterval(function(){
				readTemp(id);
			}, 5000);
		}
	);
});

function readTemp(id) {
	ds18b20.temperature(id, function (err, value) {
		console.log(id+': ', value);

	});
}

