var Firebase = require("firebase");
function Database () {
	this.clients = new Firebase(/*httpURL*/);

}

// Spotify id is main key

/*
	returns an array of clients which fall within the bounded region.
*/
Database.prototype.queryRange = function (minLat, maxLat, minLon, maxLon) {
	var results = [];
	var withinLatQuery = this.clients.orderByChild("Lat").startAt(minLat).endAt(maxLat);
	var withinLonQuery = this.clients.orderByChild("Lon").startAt(minLon).endAt(maxLon);
	withinLatQuery.once("value", function(snapLat) {
		withinLonQuery.once("value", function(snapLon) {
			var withinLat = snapLat.val();
			var withinLong = snapLon.val();
			for (var client in withinLat) {
				if (withinLon[client] != undefined)
					results[client.id] = withinLon[client];
			}
		})
	})
	return results;
}

// TODO: this function might not actually put the data in the format that queryRange() expects it to be in.
Database.prototype.addClient = function (id, playlistId, latitude, longitude) {
	this.clients.push({
  		id: {
    		Lat: latitude,
    		Lon: longitude,
    		pid: playlistId
    	}
	});
}

Database.prototype.constructor = Database;

module.exports = Database;