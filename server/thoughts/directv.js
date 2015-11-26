var Thought = require('../thought.js');
class DirecTVControl extends Thought {
	constructor() {
		super("DirecTV");
	}

	status() {
	}

}

module.exports = new DirecTVControl();