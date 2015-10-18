var React = require('react');
var FriendList = require('./friendslist.js');
var Footer = require('./footer.js');
var Map = require('./map.js');
var Base = require('./base.js');

var App = React.createClass({
    render: function() {
        return(
            <div>
                <Base />
                <Footer />
            </div>
        );
    }
});

module.exports = App;