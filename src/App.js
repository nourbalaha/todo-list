import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      toDo: event.target.value
    });
  }
  handleClick(event) {
    event.preventDefault();
    this.props.add(this.state.toDo);
    this.setState({
      toDo: ""
    });
  }
  render() {
    const list = this.props.todos.map((item, i) => (
      <Item todo={item} index={i} key={i} delete={this.props.delete}/>
    ));
    return (
      <div class="container">
        <h1 class="text-center m-3">Todo</h1>
        <form onSubmit={this.handleClick}>
          <div class="row">
            <div class="col-sm-8">
              <input
                class="form-control"
                type="text"
                value={this.state.toDo}
                onChange={this.handleChange}
              />{" "}
            </div>
            <div class="col-sm-4">
              <input
                class="btn btn-primary btn-block"
                type="submit"
                value="add"
              />{" "}
            </div>
          </div>{" "}
        </form>
        <div class="container mt-3">
          <p class="text-center"> To Do List: </p>{" "}
          <ul class="list-group"> {list} </ul>{" "}
        </div>
      </div>
    );
  }
}
