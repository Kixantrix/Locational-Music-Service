// Load the http module to create an http server.
var http = require('http');

// Load the dispatcher module to hanadle different requests
var dispatcher = require('httpdispatcher');

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('res');

// Catch 404 errors
dispatcher.onError(function(req, res) {
	res.writeHead(404);
	res.end();
});

// Returns the next song/playlist to play
dispatcher.onPost("/nextSong", function (req, res) {
	// Message to record errors
	var errorMsg = '';
	// Checked that request is received
	if(req) {
		// Attempt to parse body. Record error if failure
		try {
			var body = JSON.parse(req.body);
		}
		catch (error) {
			// Record error
			errorMsg = error;
		}
		// If body exists and correct fields are included
		if(body && body['id'] && body['lat'] && body['long']) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			data = {'id': body['id'], 
					'lat': body['lat'],
					'long': body['long']
				};
    		var postData = JSON.stringify(data);
    		res.end(postData);
		} else {
			// bad request
			errorMsg = 'Body does not exist or lacks proper fields'
			res.writeHead(400);
		}
	} else {
		//bad request
		errorMsg = 'Request is missing'
		res.writeHead(400);
	}
	res.end(errorMsg);
});

// Returns a list of nearby user locations
dispatcher.onPost("/nearbyUsers", function (req, res) {
    	// Message to record errors
	var errorMsg = '';
	// Checked that request is received
	if(req) {
		// Attempt to parse body. Record error if failure
		try {
			var body = JSON.parse(req.body);
		}
		catch (error) {
			// Record error
			errorMsg = error;
		}
		// If body exists and correct fields are included
		if(body && body['lat'] && body['long']) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			data = {'lat': body['lat'],
					'long': body['long']
				};
    		var postData = JSON.stringify(data);
    		res.end(postData);
		} else {
			// bad request
			errorMsg = 'Body does not exist or lacks proper fields'
			res.writeHead(400);
		}
	} else {
		//bad request
		errorMsg = 'Request is missing'
		res.writeHead(400);
	}
	res.end(errorMsg);
});

// Initializes the client with given information in server
dispatcher.onPost("/initClient", function (req, res) {
		// Message to record errors
	var errorMsg = '';
	// Checked that request is received
	if(req) {
		// Attempt to parse body. Record error if failure
		try {
			var body = JSON.parse(req.body);
		}
		catch (error) {
			// Record error
			errorMsg = error;
		}
		// If body exists and correct fields are included
		if(body && body['id'] && body['lat'] && body['long']) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			data = {'id': body['id'], 
					'lat': body['lat'],
					'long': body['long']
				};
    		var postData = JSON.stringify(data);
    		res.end(postData);
		} else {
			// bad request
			errorMsg = 'Body does not exist or lacks proper fields'
			res.writeHead(400);
		}
	} else {
		//bad request
		errorMsg = 'Request is missing'
		res.writeHead(400);
	}
	res.end(errorMsg);
});

/*
// Destructs users client, deleting them from running server instance
dispatcher.onPost("/destructClient", function (req, res) {
    	// Message to record errors
	var errorMsg = '';
	// Checked that request is received
	if(req) {
		// Attempt to parse body. Record error if failure
		try {
			var body = JSON.parse(req.body);
		}
		catch (error) {
			// Record error
			errorMsg = error;
		}
		// If body exists and correct fields are included
		if(body && body['id']) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			data = {'id': body['id']
				};
    		var postData = JSON.stringify(data);
    		res.end(postData);
		} else {
			// bad request
			errorMsg = 'Body does not exist or lacks proper fields'
			res.writeHead(400);
		}
	} else {
		//bad request
		errorMsg = 'Request is missing'
		res.writeHead(400);
	}
	res.end(errorMsg);
});

*/
dispatcher.onPost("/addFriend", function (req, res) {
		// Message to record errors
	var errorMsg = '';
	// Checked that request is received
	if(req) {
		// Attempt to parse body. Record error if failure
		try {
			var body = JSON.parse(req.body);
		}
		catch (error) {
			// Record error
			errorMsg = error;
		}
		// If body exists and correct fields are included
		if(body && body['id'] && body['friend']) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			data = {'id': body['id'], 
					'friend': body['friend']
				};
    		var postData = JSON.stringify(data);
    		res.end(postData);
		} else {
			// bad request
			errorMsg = 'Body does not exist or lacks proper fields'
			res.writeHead(400);
		}
	} else {
		//bad request
		errorMsg = 'Request is missing'
		res.writeHead(400);
	}
	res.end(errorMsg);
});

// A sample POST request
dispatcher.onPost("/setPlaylist", function (req, res) {
    	// Message to record errors
	var errorMsg = '';
	// Checked that request is received
	if(req) {
		// Attempt to parse body. Record error if failure
		try {
			var body = JSON.parse(req.body);
		}
		catch (error) {
			// Record error
			errorMsg = error;
		}
		// If body exists and correct fields are included
		if(body && body['id'] && body['playlist']) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			data = {'id': body['id'], 
					'playlist': body['playlist']
				};
    		var postData = JSON.stringify(data);
    		res.end(postData);
		} else {
			// bad request
			errorMsg = 'Body does not exist or lacks proper fields'
			res.writeHead(400);
		}
	} else {
		//bad request
		errorMsg = 'Request is missing'
		res.writeHead(400);
	}
	res.end(errorMsg);
});

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
	try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
});

// Listen on port 8000, IP defaults to 127.0.0.127
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");