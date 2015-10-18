////////////////////// Bounding lat/lon code //////////////////////

// Globals
var degreesPerRadian = 57.296
var earthRadius = 6371;
var MIN_LAT = -(Math.PI/2);  // -PI/2
var MAX_LAT = (Math.PI/2);   //  PI/2
var MIN_LON = -(Math.PI); // -PI
var MAX_LON = (Math.PI);  //  PI

// To get a bounding rectangle, call new Geolocation(lat, lon).boundingCoordinates(distance);
// Lat and lon must be in degrees, distance must be in kilometers.

// Creates a geolocation. Pass in latitude and longitude in degrees.
function GeoLocation(latitude, longitude)
{
	this.radlat = this.fromDegrees(latitude);
	this.radlon = this.fromDegrees(longitude);
}

//Translates degrees to radians.
GeoLocation.prototype.fromDegrees = function(angle) {
	return angle / degreesPerRadian;
}

//Translates radians to degrees.
GeoLocation.prototype.fromRadians = function(angle) {
	return angle * degreesPerRadian;
}

// Gets the bounding coordinates defining a specified distance from this geolocation.
GeoLocation.prototype.boundingCoordinates = function(distance) {

    if (distance < 0) {
		console.log("Distance invalid: " + distance);
		return null;
	}

	// angular distance in radians on a great circle
	var radDist = distance / earthRadius;

	var minLat = this.radLat - this.radDist;
	var maxLat = this.radLat + this.radDist;

	var minLon, maxLon;
	if (minLat > MIN_LAT && maxLat < MAX_LAT) {
		var deltaLon = Math.asin(Math.sin(this.radDist) /
			Math.cos(this.radLat));
		minLon = this.radLon - deltaLon;
		if (minLon < MIN_LON) minLon += 2d * Math.PI;
		maxLon = radLon + deltaLon;
		if (maxLon > MAX_LON) maxLon -= 2d * Math.PI;
	} else {
		// a pole is within the distance
		minLat = Math.max(minLat, MIN_LAT);
		maxLat = Math.min(maxLat, MAX_LAT);
		minLon = MIN_LON;
		maxLon = MAX_LON;
	}

	return {minLat:minLat maxLat:maxLat minLon:minLon maxLon:maxLon};
}

GeoLocation.prototype.constructor = GeoLocation;

module.exports = GeoLocation;