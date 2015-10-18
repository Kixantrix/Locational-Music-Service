var Firebase = require("firebase");
function Database () {
	this.clients = new Firebase(/*httpURL*/);

}

Database.prototype.queryRange = function (minLat, maxLat, minLong, maxLong) {
	//return this.clients.orderByChild("Lat").once("value", )
	return null;
}

Database.prototype.addClient = function (id, playlistId, latitude, longitude) {
	return null;
}

Database.prototype.constructor = Database;

module.exports = Database;