var React = require('react');
var Maps = require('./map.js');
var Friends = require('./friendslist.js');
var Base = require('./base.js');

var Footer = React.createClass({
	onClick: function (type) {
	var item;
	switch (type) {
		case 'maps':
			item = <Maps />;
			break;
		case 'base':
			item = <Base />;
			break;
		case 'friends':
			item = <Friends />;
			break;
		default:
			item = <Base />;
	}
	this.props.setActiveItem(item);
	},
	render() {
		return(
			<div className="row footer">
				<div className="col-md-4">
					<a onClick={this.onClick.bind(this, 'maps')} href="#"><i className="fa fa-arrow-circle-left fa-4x"></i></a>
				</div>
				<div className="col-md-4">
					<a onClick={this.onClick.bind(this, 'base')} href="#">
						<span className="fa-stack fa-lg">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-home fa-stack-1x fa-inverse"></i>
						</span>
					</a>
				</div>
				<div className="col-md-4">
					<a onClick={this.onClick.bind(this, 'friends')}  href="#"><i className="fa fa-arrow-circle-right fa-4x"></i></a>
				</div>
			</div>
		);
	}
});

module.exports = Footer;