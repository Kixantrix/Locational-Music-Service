var React = require('react');

var Base= React.createClass({
	render() {
		return (
			<div className="base">
				<iframe src="https://embed.spotify.com/?uri=spotify:track:4th1RQAelzqgY7wL53UGQt" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
			</div>
		);
	}
});

module.exports = Base;