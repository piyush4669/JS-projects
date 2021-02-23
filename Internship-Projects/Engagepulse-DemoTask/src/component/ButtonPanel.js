import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";
var common = require('./Common');


export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  state = {
    theme : 'Light',
    mode : 'Normal'
  };

  changetheme = () => {
    if(this.state.theme === 'Light'){
      this.setState({theme : 'Dark'})
      common.setTheme(this.state.theme);      
    }else{
      this.setState({theme : 'Light'})
      common.setTheme(this.state.theme);
    }
  };

  changeMode = () => {
    if(this.state.mode === 'Sci'){
      this.setState({mode : 'Normal'})
    }else{
      this.setState({mode : 'Sci'})
    }
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name='Sci' clickHandler={this.changeMode} />
          <Button name="AC" clickHandler={this.handleClick} wide/>
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} />
        </div>
        <div>
          {(this.state.mode === 'Sci')?<Button name="+/-" clickHandler={this.handleClick} />:<Button name="" clickHandler={this.handleClick} />}
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} />
        </div>
        <div>
        {(this.state.mode === 'Sci')?<Button name="Sq" clickHandler={this.handleClick} />:<Button name="" clickHandler={this.handleClick} />}
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick}  />
        </div>
        <div>
        {(this.state.mode === 'Sci')?<Button name="Sqrt" clickHandler={this.handleClick} />:<Button name="" clickHandler={this.handleClick} />}
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={this.state.theme} clickHandler={this.changetheme} />
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} dark/>
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}