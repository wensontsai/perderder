var React = require('react');

var List = React.createClass({
	handleClick: function(){
		this.props.whenItemClicked(this.props.item);
	},
	render: function(){
		return (
			<li>
				<a className={this.props.className} onClick={this.handleClick}>{this.props.item}</a>
			</li>
		)
	}
});

module.exports = List;