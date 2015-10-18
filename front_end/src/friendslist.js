var React = require('react');

var CommentBox = React.createClass({
	render() {
		return (
			<div className="commentBox">
				Hello, world! I am a CommentBox
				{this.props.user}
			</div>
		);
	}
});

module.exports = CommentBox;