import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: "",
      toDos: [],
      index: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    this.setState({
      toDo: event.target.value
    });
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({
      toDos: [...this.state.toDos, this.state.toDo],
      toDo: ""
    });
  }
  handleDelete(i) {
    console.log("i");
  }
  render() {
    const list = this.state.toDos.map(
      (item, i) => {
        return(<div>
          <Item todo={item} index={i} key={i} />
          <input value="x" type="button" onClick={this.handleDelete}></input>
        </div>)

      }
    );
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
