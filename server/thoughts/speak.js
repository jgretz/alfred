var say = require('say');

var Thought = require('../thought.js');
class SpeakControl extends Thought {
	constructor() {
		super("speak");
	}

	status() {
	}

	speak() {
		say.speak('Ralph', 'Yes Sir');
	}
}

module.exports = new SpeakControl();