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
    const list = this.state.toDos.map((item, i) => (
      <Item todo={item} index={i} key={i} display={true} />
    ));
    return (
      <div className="container">
        <h1 className="text-center m-3">Todo</h1>
        <form onSubmit={this.handleClick}>
          <div className="row">
            <div className="col-sm-8">
              <input
                className="form-control"
                type="text"
                value={this.state.toDo}
                onChange={this.handleChange}
              />{" "}
            </div>
            <div className="col-sm-4">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="add"
              />{" "}
            </div>
          </div>{" "}
        </form>
        <div className="container mt-3">
          <p className="text-center"> To Do List: </p>{" "}
          <ul className="list-group"> {list} </ul>{" "}
        </div>
      </div>
    );
  }
}
