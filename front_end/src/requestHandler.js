/*
Interface for all requests to the rest server
*/

'use strict';

var request = require('request');

// Initializes and starts a song playing
function initClient(id, lat, long) {
	var options = {
		'url': 'http://initClient',
		'headers': {},
		'json': true,
		'body': {
		    'id': id,
		    'lat': lat,
		    'long': long
	      	}
	    };
	request.post(options, function(error, response, body) {
	  	if (!error && response.statusCode === 200) {
	    // use the access token to access the Spotify Web API
	    	var parsedBody = JSON.parse(body);
	    	return {
				'playlist': parsedBody['playlist'];
				'otherid': parsedBody['otherid'];
				'lat': parsedBody['lat'];
				'long': parsedBody['long'];
			};
  		} else {
  			return {error};
  		}
	});
}

// Retreives next song from playlist to the user
function getNextSong(id, lat, long) {
	var options = {
		'url': 'http://nextSong',
		'headers': {},
		'json': true,
		'body': {
		    'id': id,
		    'lat': lat,
		    'long': long
	      	}
	    };
	request.post(options, function(error, response, body) {
	  	if (!error && response.statusCode === 200) {
	    // use the access token to access the Spotify Web API
	    	var parsedBody = JSON.parse(body);
	    	return {
				'playlist': parsedBody['playlist'];
				'otherid': parsedBody['otherid'];
				'lat': parsedBody['lat'];
				'long': parsedBody['long'];
			};
  		} else {
  			return {error};
  		}
	});
}
/*
function destruct(id) {
		var options = {
		'url': 'http://destructClient',
		'headers': {},
		'json': true,
		'body': {
		    'id': id
	      	}
	    };
	request.post(options, function(error, response, body) {
	  	if (!error && response.statusCode === 200) {
	    // use the access token to access the Spotify Web API
	    	var parsedBody = JSON.parse(body);
	    	return {
				'success': true
			};
  		} else {
  			return {'success': false};
  		}
	});
}
*/

// Retreives an array of all users nearby and their playlists
function getNearbyUsers(id, lat, long) {
	var options = {
		'url': 'http://nearbyUsers',
		'headers': {},
		'json': true,
		'body': {
		    'id': id,
		    'lat': lat,
		    'long': long
	      	}
	    };
	request.post(options, function(error, response, body) {
	  	if (!error && response.statusCode === 200) {
	    // use the access token to access the Spotify Web API
	    	var parsedBody = JSON.parse(body);
	    	return {
				'users'; parsedBody.users;
			};
  		} else {
  			return {error};
  		}
	});
}

// Changes the playlist to that of another user on the map
function changePlaylist(id) {
	var options = {
		'url': 'http://setPlaylist',
		'headers': {},
		'json': true,
		'body': {
		    'id': id,
	      	}
	    };
	request.post(options, function(error, response, body) {
	  	if (!error && response.statusCode === 200) {
	    // use the access token to access the Spotify Web API
	    	var parsedBody = JSON.parse(body);
	    	return {
				'users'; parsedBody.playlist;
			};
  		} else {
  			return {error};
  		}
	});
}