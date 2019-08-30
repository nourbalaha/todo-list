import React, { Component } from "react";
import {
  Button,
  Form,
  Container,
  Navbar
} from "react-bootstrap";
import "./App.css";
import Item from "./Item";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: ""
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
      <Item
        todo={item}
        index={i}
        key={i}
        delete={this.props.delete}
        edit={this.props.edit}
        todos={this.props.todos}
      />
    ));
    return (
      <Container>
        <Navbar bg="dark" variant="dark" expand="true" className="justify-content-between">
          <Navbar.Brand variant="light">Todo List</Navbar.Brand>
          <Form onSubmit={this.handleClick} inline>
            <Form.Control
              type="text"
              placeholder="Add Todo"
              className="mr-sm-2"
              value={this.state.toDo}
              onChange={this.handleChange}
            />
            <Button variant="outline-success" type="submit">
              add
            </Button>
          </Form>
        </Navbar>

        <Container bg="dark">
          <h5 className="text-center m-3"> Here is today's todo list: </h5>
          <Container> {list} </Container>
        </Container>
      </Container>
    );
  }
}
