var React = require('react');

var Footer = React.createClass({
	render() {
		return(
			<div className="footer">
				<a href="#"><i className="fa fa-arrow-circle-left fa-4x"></i></a>
				<a href="#"><i className="fa fa-arrow-circle-right fa-4x"></i></a>
			</div>
		);
	}
});

module.exports = Footer;