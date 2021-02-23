import React, { Component } from "react";
import "./App.css";
import TodoList from "./list";
import TodoItems from "./listItems";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
var apiService = require("./core/apiService");

export default class App extends Component {
  inputElement = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      apiFoodName: "",
      apiFoodMeasure: "",
      apiFoodQuantity: "",
      foodData: [],
      status: "Please search the food item in above box",
      items: [],
      measureData: [],
      currentItem: {
        text: "",
        key: ""
      },
      currentQuantity: {
        text: "1",
        key: ""
      },
      totalCalories: 0,
      toMuchValueErr: "",
      currentCalories: "",
      loader:false,
    };
  }

  deleteItem = async key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    await this.setState({
      items: filteredItems
    });
    if(this.state.items.length === 0){
      this.setState({totalCalories:0})
    }else{
      this.calculateCalories()
    }
  };

  handleInput = async e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    };
    this.setState({
      currentItem
    });
  };

  handleInputQunatity = async e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    };
    this.setState({
      currentQuantity: currentItem
    });
  };
  getParsedResponse = async e => {
    this.setState({
      loader:true
    })
    e.preventDefault();
    this.setState({ toMuchValueErr: "" });
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      await apiService
        .getParsedObject(newItem.text)
        .then(res => {
          this.setState({
            loader:false
          })
          if (res !== "fail") {
            this.setState({
              foodData: res,
              status: "Please select the food from drop down"
            });
          } else {
            this.setState({
              status: "Sorry Selected item is not present in our database",
              foodData: []
            });
          }
        })
        .catch(err => {
          this.setState({
            status: "Sorry Selected item is not present in our database",
            foodData: []
          });
        });
    }
  };

  onSelectFood = async e => {
    await this.setState({ apiFoodName: e.label });
    let arr = [];
    e.value.forEach(element => {
      let obj = {};
      obj.label = element.label;
      obj.value = element.uri;
      arr.push(obj);
    });
    await this.setState({ measureData: arr });
    console.log(this.state.apiFoodName);
  };

  onSelectMeasure = async e => {
    await this.setState({ apiFoodMeasure: e.label });
    console.log(this.state.apiFoodMeasure);
  };

  addItem = async () => {
    const newItem = {
      text:
        this.state.apiFoodQuantity +
        "-" +
        this.state.apiFoodMeasure +
        "-" +
        this.state.apiFoodName,
      calorie: this.state.currentCalories,
      key: Date.now(),
    };
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      await this.setState({
        items: items
      });
      this.calculateCalories()
    }
  };

  calculateCalories = async () => {
    if (this.state.items.length !== 0) {
      let sum = this.state.items.reduce((currSum, item) => {
        return item.calorie + currSum;
      }, 0);
      await this.setState({ totalCalories: sum });
    }
  }

  finalSubmit = async () => {
    await this.setState({ apiFoodQuantity: this.state.currentQuantity.text });
    let query =
      this.state.apiFoodQuantity +
      " " +
      this.state.apiFoodMeasure +
      " " +
      this.state.apiFoodName;
    await apiService
      .getCalories(query)
      .then(async res => {
        if (res !== "fail") {
          console.log(res);
          await this.setState({ currentCalories: res.calories });
          this.addItem();
        } else {
          console.log("Failed to get calories");
        }
      })
      .catch(err => {
        this.setState({ toMuchValueErr: err });
      });
  };

  getTotalCalories = () => {
    if (this.state.totalCalories !== 0) {
      return <h3>Total calories consumed => {this.state.totalCalories}</h3>;
    }
  };

  getQuery = () => {
    if (this.state.apiFoodName !== "") {
      return (
        this.state.apiFoodName +
        " " +
        this.state.apiFoodMeasure +
        " " +
        this.state.apiFoodQuantity
      );
    }
  };

  render() {
    return (
      <div>
        <TodoList
          submit={this.getParsedResponse}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          loading = {this.state.loader}
          name="Search"
        />
        <br></br>
          <Dropdown
            options={this.state.foodData}
            onChange={this.onSelectFood}
            value={this.state.status}
          />
        <br></br>
        {this.state.measureData.length !== 0 ? (
          <Dropdown
            options={this.state.measureData}
            onChange={this.onSelectMeasure}
            value={"Please select measure type"}
          />
        ) : (
          <div></div>
        )}
        <br></br>
        {this.state.apiFoodMeasure !== "" ? (
          <TodoList
            submit={this.finalSubmit}
            inputElement={this.inputElement}
            handleInput={this.handleInputQunatity}
            currentItem={this.state.currentQuantity}
            name="Add"
          />
        ) : (
          <div></div>
        )}
        <br></br>
        {this.state.toMuchValueErr}
        <br></br>
        <br></br>
        {this.getQuery()}
        <br></br>
        {this.getTotalCalories()}
        <br></br>
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
        <br></br>
      </div>
    );
  }
}
