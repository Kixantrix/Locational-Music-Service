// Load the http module to create an http server.
var http = require('http');

// Load the dispatcher module to hanadle different requests
var dispatcher = require('httpdispatcher');

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('res');

// Returns the next song/playlist to play
dispatcher.onGet("/nextSong", function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    data = {'song': 'Cool Song Name'};
    var postData = JSON.stringify(data);
    res.end(postData);
});

// Returns a list of nearby user locations
dispatcher.onGet("/nearbyUsers", function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    data = {'users': ['Bob', 'Linda', 'Joe']};
    var postData = JSON.stringify(data);
    res.end(postData);
});

// Initializes the client with given information in server
dispatcher.onPost("/initClient", function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    data = {'success': 'success'};
    var postData = JSON.stringify(data);
    res.end(postData);
});

// Destructs users client, deleting them from running server instance
dispatcher.onPost("/destructClient", function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    data = {'success': 'failure'};
    var postData = JSON.stringify(data);
    res.end(postData);
});

dispatcher.onPost("/addFriend", function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
    data = {'friends': 'We are friends'};
    var postData = JSON.stringify(data);
    res.end(postData);
});

//A sample POST request
dispatcher.onPost("/setPlaylist", function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    data = {'playlist': 'Cool Song Names'};
    var postData = JSON.stringify(data);
    res.end(postData);
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