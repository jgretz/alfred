var Thought = require('../thought.js');
class ListenControl extends Thought {
	constructor() {
		super("listen");
	}

	status() {
	}
}

module.exports = new ListenControl();