/**
	Format of a client:
		{
		 id:id
		 lat:lat
		 lon:lon
		 playlistId:playlistId
		}

*/

function Client (id, playlistId, location) 
{
	this.id = id;
	this.playlistId = playlistId;
	this.location = location;
}

Client.prototype.constructor = Client;

module.exports = Client;