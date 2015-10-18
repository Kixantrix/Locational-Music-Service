var React = require('react');

var MakeList = React.createClass({
	render: function() {
		return (
			<div className="makeList">
				<div className="title">
					<h2>People Near Me</h2>
				</div>
				<div className="data">
					<ul>
						<li>name, lat, lon, playlist, artist, song</li>
						<li>name, lat, lon, playlist, artist, song</li>
						<li>name, lat, lon, playlist, artist, song</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = MakeList;