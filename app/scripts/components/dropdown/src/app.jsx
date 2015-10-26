var React = require('react');
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert', // what should show up on button to open/close dropdown
	items: [
		'cookie',
		'ice cream',
		'cupcake'
	]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));