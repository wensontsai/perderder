var React = require('react');

var List = React.createClass({
	render: function(){
		return <li><a>{this.props.item}</a></li>
	}
});

module.exports = List;