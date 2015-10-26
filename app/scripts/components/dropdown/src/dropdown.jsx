// need to show button and a list
// component should know when to show list based on when user clicks on button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

var Dropdown = React.createClass({
	handleClick: function(){
		alert('dropdown yoo');
	},
	render: function(){
		var list = this.props.items.map(function(item){
			return <ListItem item={item} />
		});
		return (
			<div className = "dropdown">
				<Button 
					whenClicked={this.handleClick} 
					className="btn-default" 
					title={this.props.title} 
					subTitleClassName="caret" 
					/>
				<ul>
					{list}
				</ul>
			</div>
		);
	}
});

module.exports = Dropdown;