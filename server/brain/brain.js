class Brain {
	constructor() {
		this.ears = require('../ears/ears.js');
		this.ears.subscribers.add(this);
		this.ears.startListening();
	}

	heard(message) {
		console.log(message);
	}

}

module.exports = new Brain();