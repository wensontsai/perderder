var React = require('react');
var Dropdown = require('./dropdown/src/dropdown');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Home = React.createClass({
  update: function(){
    this.setState({
      red: this.refs.red.getDOMNode().value,
      green: this.refs.green.getDOMNode().value,
      blue: this.refs.blue.getDOMNode().value
    });
  },
  componentWillMount: function(){
  },
  render: function() {
    var options = {
      title: 'Choose a dessert', 
      items: [
          'cookie',
          'ice cream',
          'cupcake'
      ]
    }
    // if(this.state.dropdownOpen){
    //   visible = "visible"
    // }
    // visible = "hidden";
    return (
      <div>
          <Dropdown {...options} />
      </div>
    );
  },
  componentDidMount: function(){

  }
});

var Badge = React.createClass({
  render: function(){
    return 
  }
});

var UnorderedList = React.createClass({
  render: function(){
    return 
  }
});

var Slider = React.createClass({
  // mixins: [LinkedStateMix],
  render: function(){
    console.log(this.props.options);
    return <input type="range" min="0" max="255" onChange={this.props.update} />
  }
});

module.exports = Home;
