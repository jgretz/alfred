var say = require('say');

var Thought = require('../thought.js');
class SpeakControl extends Thought {
	constructor() {
		super("speak");
	}

	status() {
	}

	speak() {
		say.speak('Ralph', 'Coffee Is For Closers');
	}
}

module.exports = new SpeakControl();
