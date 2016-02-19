var fs = require('fs');
var request = require('request');
var record = require('node-record-lpcm16');
var witToken = '44IW65YB57UWLLNQFWZT525N3QS6OHFC';

class Ears {
	constructor() {
		this.subscribers = []
	}

	startListening() => {
		record.start({
		  sampleRate : 44100,
		  threshold  : 0.3,
		  verbose : true
		}).pipe(request.post({
		  	'url' : 'https://api.wit.ai/speech?client=chromium&lang=en-us&output=json',
		  	'headers' : {
		    	'Accept' : 'application/vnd.wit.20160202+json',
		    	'Authorization' : `Bearer${witToken}`,
		    	'Content-Type' : 'audio/wav'
		  	}
		}, (err, resp, body) => {
			if (err) {
				console.log(err);
				return;
			}
		  	
		  	for (subscriber in this.subscribers) {
		  		subscriber.heard(body);
		  	}
		}));
	}

}

module.exports = new Ears();