var request = require('request');

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
    	profileInfo = body
    	console.log(body);
    });
    
  }
});

function getUserPlaylists() {
	request.post(autOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/{user_id}/playlists',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
      return body
    });
    
  }
});
}