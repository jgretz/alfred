var Thought = require('../thought.js');

class Sphero extends Thought {
	id() {
		return "Sphero";
	}

}

module.exports = new Sphero();