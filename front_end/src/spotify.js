var request = require('request');
var parse = require('JSON.parse');

var client_id = '97c780212e3e47b9b9b7330b9cad1423'; // Your client id
var client_secret = '6254bddc7c7f4fe29c44d81ed735afb4'; // Your client secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

var profileInfo;

function getUserInfo() {
request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
    	profileInfo = JSON.parse(body);
    	console.log(body);
    });
    
  }
});
}

var playlists;

function getUserPlaylists(user_id) {
	request.post(autOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
    	playlists = JSON.parse(body);
      	console.log(body);
    });
    
  }
});
}
var playlistTracks;

	function getPlayListTracks(user_id, playList_id) {
	request.post(autOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists/' + playlist_id + '/tracks',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
    	playlistTracks = JSON.parse(body);
      console.log(body);
    });
    
  }
});