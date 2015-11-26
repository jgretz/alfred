var port = "/dev/tty.Sphero-YOR-AMP-SPP";
var Sphero = require('../sphero/sphero.js');

var Thought = require('../thought.js');
class SpheroControl extends Thought {
	constructor() {
		super("Sphero");

		this.sphero = Sphero();
		this.connected = false;

		this.sphero.on('open', function() {
			this.connected = true;
		});

		this.sphero.on('error', function(error) {
		  console.log(error);
		});

		this.sphero.open(port);
	}

	status() {
		console.log(this.connected ? "I'm connected to the sphero" : "I'm not connected, sad panda");
	}

	blue() {
		if (!this.connected) {
			return;
		}
		
		this.sphero.setRGB(0x0000ff, false);
	}

}

module.exports = new SpheroControl();