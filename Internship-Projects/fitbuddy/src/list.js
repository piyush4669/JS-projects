import React, { Component } from "react";

class TodoList extends Component {
  componentDidUpdate() {
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={(e)=>{
            e.preventDefault()}}>
            <input
              placeholder="Item"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="button" onClick={this.props.submit} disabled={this.props.loading}> {this.props.loading?"Loading ...":this.props.name} </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
