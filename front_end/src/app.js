var React = require('react');
var CommentBox = require('./friendslist.js');

var App = React.createClass({
    render: function() {
        return(
            <div>
                <CommentBox user="Sam"/>
            </div>
        );
    }
});

module.exports = App;