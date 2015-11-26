var request = require('request');
var addr = "http://192.168.11.109:8080/";

var Thought = require('../thought.js');
class DirecTVControl extends Thought {
	constructor() {
		super("directv");
	}

	request(url, callback) {
		request(`${addr}${url}`, (error, response, body) => {
			if (error) {
				console.log(error);
				return;
			}

			if (response.statusCode == 200) {
				callback(body);
				return;
			}

			console.log(`Status Code: ${response.statusCode}`);
		});
	}

	status() {
		this.request("info/getVersion", (response) => {
			console.log(response);
		});
	}

	currentlyWatching() {
		this.request("tv/getTuned", (response) => {
			console.log(response);
		});
	}

	pause() {
		this.request("remote/processKey?key=pause", (response) => {
			console.log(response);
		});	
	}

	advance() {
		this.request("remote/processKey?key=advance", (response) => {
			console.log(response);
		});		
	}
}

module.exports = new DirecTVControl();