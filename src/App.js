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
      <Item todo={item} index={i} key={i} delete={this.props.delete} edit={this.props.edit} todos={this.props.todos} />
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
