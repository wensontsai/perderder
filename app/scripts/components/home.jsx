var React = require('react');
var LinkedStateMix = require('');

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
    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>You now have</p>
        <ul>
            <li>ReactJS Reflux Boilerplate</li>
        </ul>
        <div>
          <label>{this.state.red}</label>
          <Slider ref="red" update={this.update}></Slider>
          <label>{this.state.green}</label>
          <Slider ref="green" update={this.update}></Slider>
          <label>{this.state.blue}</label>
          <Slider ref="blue" update={this.update}></Slider>
        </div>
      </div>
    );
  },
  componentDidMount: function(){

  }
});

var Slider = React.createClass(){
  mixins: [LinkedStateMix],
  render: function(){
    return <input type="range" min="0" max="255" onChange={this.props.update} />
  }
}

module.exports = Home;
