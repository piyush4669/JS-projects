import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
var common = require('./Common');


export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  state = {
    theme : 'Dark',
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  componentDidUpdate(prevProps, prevState) {
    let newTheme = common.getTheme()
    if(this.state.theme !== newTheme){
      this.setState({theme:newTheme})
    }
  }

  render() {
        
    const className = [
      "component-button",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()} >
        <button style={this.state.theme === 'Light' ? {backgroundColor:'white'} : {backgroundColor:'black'}} onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
