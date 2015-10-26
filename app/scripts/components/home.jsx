var React = require('react');
var Dropdown = require('./dropdown/src/dropdown');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Home = React.createClass({
  getInitialState: function(){
    return {
      red: 0,
      green: 0,
      blue: 0
    };
  },
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
    if(this.state.dropdownOpen){
      visible = "visible"
    }
    visible = "hidden";
    return (
      <div>
          <Dropdown />
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
    return <input type="range" min="0" max="255" onChange={this.props.update} />
  }
});

module.exports = Home;
