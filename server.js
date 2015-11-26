require('use-strict')

var express = require('express');
var app = express();

// load thoughts
var thoughts = {};

var glob = require('glob');
glob('./server/thoughts/*.js', (er, files) => {
	if (er) {
		console.log(er);
		return;
	}

	for (i = 0; i < files.length; i++) {
		var thought = require(files[i]);

		thoughts[thought.id] = thought;
	}
});

// add handlers
var defaultHandler = (thoughtName, methodName, res) => {
	var thought = thoughts[thoughtName];
	if (thought == null) {
		res.status(400).send("The thought '" + thoughtName + "' doesn't exist in my mind.");
		return
	}

	var method = thought[methodName];
	if (method == null) {
		res.status(400).send("The thought '" + thoughtName + "." + methodName + "' doesn't exist in my mind.");
		return	
	}

	thought[methodName]();

	res.status(200).send("Now thinking about method '" + thoughtName + "." + methodName + "'.");
};

app.get("/", (req, res) => {
	res.send("My mind is blank.");
});

app.get("/:thought", (req, res) => {
	defaultHandler(req.params.thought, 'status', res);
});

app.get("/:thought/:method", (req, res) => {
	defaultHandler(req.params.thought, req.params.method, res);
});

// listen
app.listen(process.env.PORT || 2000);