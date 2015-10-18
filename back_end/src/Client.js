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

Client.prototype.persist = function() {
	if (Database.get(this.id)) {
		Database.update(this.id, this.playlistId, this.location);
	} else {
		Database.add(this.id, this.playlistId, this.location);
	}
}

Client.prototype.constructor = Client;