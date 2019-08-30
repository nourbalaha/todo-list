import React, { Component } from 'react'
import { Button, Form, ListGroup, Container, Row, Col, Navbar } from 'react-bootstrap'
import './App.css'
import Item from './Item'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toDo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange (event) {
    this.setState({
      toDo: event.target.value
    })
  }
  handleClick (event) {
    event.preventDefault()
    this.props.add(this.state.toDo)
    this.setState({
      toDo: ''
    })
  }
  render () {
    const list = this.props.todos.map((item, i) =>
      <Item
        todo={item}
        index={i}
        key={i}
        delete={this.props.delete}
        edit={this.props.edit}
        todos={this.props.todos}
      />
    )
    return (
      <Container variant="primary">
        <Navbar bg="light" expand="xs" className="justify-content-between">

        <Navbar.Brand>Todo List</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Form onSubmit={this.handleClick} inline>
          {/* <Row className='justify-content-md-center'> */}
            {/* <Col xs='8' md="10"> */}
              <Form.Control
                type='text'
                placeholder="Add Todo"
                className="mr-sm-2"
                value={this.state.toDo}
                onChange={this.handleChange}
              />
            {/* </Col> */}
            {/* <Col xs='3' md="2"> */}
              <Button variant="outline-success" type='submit'>
                add
              </Button>
            {/* </Col> */}
          {/* </Row> */}
        </Form>
        {/* </Navbar.Collapse> */}
        </Navbar>

        <Container bg="dark">
          <h4 className='text-center m-3'> To Do List: </h4>
          <Container> {list} </Container>
        </Container>
      </Container>
    )
  }
}
