var React = require('react');

var Base= React.createClass({
	render() {
		return (
			<div>
				<div className="login">
					<a href="https://accounts.spotify.com/authorize/?client_id=19343335c03d4a59906107c95a3af807&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Ffront_end%2F&scope=user-read-private%20user-read-email">
						<img className="spotifyIn" src="/front_end/res/assets/img/log_in-desktop-medium.png" alt="spotify login" height="40px" width="232px"></img>
					</a>
				</div>
				<div className="base">
					<iframe src="https://embed.spotify.com/?uri=spotify:user:arm38:playlist:6Un2aucyme3wtF7f2GrWxj" width="300" height="380" frameBorder="0" 
					allowTransparency="true"></iframe>
				</div>
			</div>
		);
	}
});

module.exports = Base;