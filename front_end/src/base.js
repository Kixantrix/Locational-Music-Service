var React = require('react');

var Base= React.createClass({
	render() {
		return (
			<div>
				<div className="login">
					<a href="/login">
						<img className="spotifyIn" src="/res/assets/img/log_in-desktop-medium.png" alt="spotify login" height="40px" width="232px"></img>
					</a>
				</div>
				<div className="base">
					<iframe src="https://embed.spotify.com/?uri=spotify:track:4th1RQAelzqgY7wL53UGQt" width="300" height="380" frameBorder="0" 
					allowTransparency="true"></iframe>
				</div>
			</div>
		);
	}
});

module.exports = Base;