var React = require('react');
var CommentBox = require('./friendslist.js');
var Footer = require('./footer.js');

var App = React.createClass({
    render: function() {
        return(
            <div>
                <CommentBox user="Sam"/>
                <Footer />
            </div>
        );
    }
});

module.exports = App;