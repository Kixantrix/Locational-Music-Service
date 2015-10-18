var React = require('react');

var Map = React.createClass({
	render() {
		return (
			// placeholder map
			<div className="map">
				<iframe
				  width="600"
				  height="450"
				  frameBorder="0"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBH0JAIOzNaDIpTaQ-7-NcjUZZl1lrj54c
				    &q=Space+Needle,Seattle+WA" allowFullScreen>
				</iframe>
			</div>
		);
	}
});

module.exports = Map;