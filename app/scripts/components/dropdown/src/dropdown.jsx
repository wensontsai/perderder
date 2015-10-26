// need to show button and a list
// component should know when to show list based on when user clicks on button

var React = require('react');
var Button = require('./button');
// var List = require('./list');

var Dropdown = React.createClass({
	handleClick: function(){
		alert('dropdown yoo');
	},
	render: function(){
		return (
			<div className = "dropdown">
				<Button whenClicked={this.handleClick} className="btn-default" title="perfermerdet" subTitleClassName="caret" />
				<ul>
					<List />
				</ul>
			</div>
		);
	}
});

module.exports = Dropdown;