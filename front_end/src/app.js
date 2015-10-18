var React = require('react');
var Footer = require('./footer.js');
var Header = require('./header.js');
var Base = require('./base.js');

var ActiveItemPanel = React.createClass({
    contextTypes: {
        activeItem: React.PropTypes.any
    },
    render: function () {
        return (
            <div>
                {this.context.activeItem}
            </div>
        );
    }
});

var DummyWrapper = React.createClass({
    render: function () {
        return <ActiveItemPanel />;
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            activeItem: <Base />
        };
    },
    childContextTypes: {
        activeItem: React.PropTypes.any
    },
    getChildContext: function () {
        return {
          activeItem: this.state.activeItem
        };
    },
    setActiveItem: function (item) {
        this.setState({activeItem: item});
    },
    render: function() {
        return(
            <div>
                <Header />
                <DummyWrapper />
                <Footer setActiveItem={this.setActiveItem}/>
            </div>
        );
    }
});

module.exports = App;