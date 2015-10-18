var GeoLocation = require('./GeoLocation');
var Client = require('./Client');
var Database = require('./Database');

/**
	TOP-LEVEL API
*/
function ClientsADT ()
{
	this.database = new Database();
}

/**
	Adds a new client to the database.
*/
ClientsADT.prototype.addNewClient = function(id, playlistId, latitude, longitude) {
	this.clients.add(new Client(id, playlistId, location));
}

/**
	Gets the next playlist for a client to listen to.
	Params: 
		id - id of current user
		latitude & longitude - current lat and lon of user
		playlistId - id of previously playing playlist
	Returns a full client (id, lat, lon, playlistId)
	Returns null if no new playlist is found
*/
ClientsADT.protoype.nextPlaylist = function(id, latitude, longitude, playlistId) {
	var nearbyClients = this.getNear(id, latitude, longitude);
	if (!nearbyClients)
		return null;
	while (nearbyClients)

}

ClientsADT.prototype.updateLocation = function(id, latitude, longitude) {
	//this.database.updateLocation(id, latitude, longitude);
}

ClientsADT.prototype.updatePlaylist = function(id, playlistId) {
	//this.database.updatePlaylist(id, playlistId);
}

/**
	Gets a list of clients near the specified client, at specified location (in lat & lon, degrees)
	Returns null if an error occurs.
*/
ClientsADT.prototype.getNear = function(id, latitude, longitude) {
	if (Database.empty)
	    	return [];
	var geoLocation = new GeoLocation(latitude, longitude);
	// 1 kilometer to start
	var radialDistance = 1;
	var numResults = 0;
	while (numResults < 1) {
		radialDistance++;
		var boundingCoordinates = geoLocation.boundingCoordinates(1);
		if (boundingCoordinates == null)
			return null; 	//		:(
		var queryResults = Database.query(SELECT * FROM Clients WHERE(Lat >= boundingCoordinates.minLat AND Lat <= boundingCoordinates.maxLat) AND (Lon >= boundingCoordinates.minLon AND Lon <= boundingCoordinates.minLon));
		numResults = queryResults.length;
	}

	// Translate latitude and longitude back into degrees
	return queryResults.map( function(obj) {
		var rObj = 
			{   
				id:obj.id 
				playlistId:obj.playlistId 
				Lat:(obj.Lat / degreesPerRadian) 
				Lon:(obj.Lon / degreesPerRadian)
			};

   		return rObj;
	});
}

ClientsADT.prototype.constructor = ClientsADT;

module.exports = ClientsADT;