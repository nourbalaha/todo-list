import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  Form,
  Card,
} from 'react-bootstrap'

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: this.props.todo,
      disabled: true
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }

  handleKeyPress (event) {
    event.preventDefault()
    this.props.edit(this.state.input, this.props.index)
    this.setState({
      disabled: true,
      input: this.props.todo
    })
  }

  handleEdit () {
    this.setState({
      input: this.props.todo,
      disabled: false
    })
  }

  handleDelete () {
    this.props.delete(this.props.index)
  }

  render () {
    return (
        <Card border="dark" className="m-2">
          <Card.Header>
            <span className="float-left"># {this.props.index+1}</span>
            <ButtonGroup className="float-right">
                <Button variant='outline-info' onClick={this.handleEdit}>
                  Edit
                </Button>
                <Button variant='outline-danger' onClick={this.handleDelete}>
                  x
                </Button>
              </ButtonGroup>
            </Card.Header>
          <Card.Body>
            <Card.Title>
            <Form onSubmit={this.handleKeyPress}>
              {this.state.disabled &&
                <Form.Text>
                  {this.props.todo}
                </Form.Text>}
              {!this.state.disabled &&
                <Form.Control
                  onChange={this.handleChange}
                  value={this.state.input}
                  style={{ border: 'none' }}
                  disabled={this.state.disabled}
                />}
            </Form>
            </Card.Title>
          </Card.Body>
        </Card>
    )
  }
}
