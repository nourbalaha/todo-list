import React, { Component } from 'react'

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: this.props.index,
      input: this.props.todos[this.props.index],
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
  
  handleKeyPress(event){
    event.preventDefault();
      console.log("pressed")
      this.props.edit(this.state.input,this.state.index);
      this.setState({
        disabled: true,
      })
  }

  handleEdit () {
    this.setState({ disabled: false })
  }

  handleDelete () {
    this.props.delete(this.props.index)
  }

  render () {
    return (
      <div class='row'>
        <div class='col-sm-8'>
          <li class='list-group-item'>
            <form onSubmit={this.handleKeyPress}>
            {' '}<input onChange={this.handleChange}
              value={this.state.input}
              style={{ border: 'none' }}
              disabled={this.state.disabled}
            />{' '}
            </form>
          </li>
        </div>
        <div class='col-sm-2'>
          <input
            className='btn btn-info'
            onClick={this.handleEdit}
            type='button'
            value='Edit'
          />
        </div>
        <div class='col-sm-2'>
          <input
            className='btn btn-danger'
            onClick={this.handleDelete}
            type='button'
            value='x'
          />
        </div>
      </div>
    )
  }
}
