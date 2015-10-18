var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Base= React.createClass({
	render() {
		return (
			<div className="base">
				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
					<p>Base</p>
		        </ReactCSSTransitionGroup>
			</div>
		);
	}
});

module.exports = Base;