var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<h1>Geo-Music</h1>
				<img className="spotifyIn" src="/img/log_in-desktop-medium.png" alt="spotify login" height="40px" width="232px"></img>
			</div>
		);
	}
});

module.exports = Header;