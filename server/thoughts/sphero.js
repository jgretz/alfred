var port = "/dev/tty.Sphero-YOR-AMP-SPP";
var Sphero = require('../sphero/sphero.js');

var Thought = require('../thought.js');
class SpheroControl extends Thought {
	id() {
		return "Sphero";
	}

	status() {
		var sphero = Sphero();
		
		sphero.on('open', function() {
			console.log("opened");
			sphero.setRGB(0x0000ff, false);
		});

		sphero.on('error', function(error) {
		  console.log(error);
		});

		console.log("Trying to open");
		sphero.open(port);
	}

}

module.exports = new SpheroControl();