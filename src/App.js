import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toDo: '',
      toDos: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleChange (event) {
    this.setState({
      toDo: event.target.value
    })
  }
  handleClick (event) {
    event.preventDefault();
    this.setState({
      toDos: [...this.state.toDos, this.state.toDo],
      toDo: ''
    })
  }
  handleDelete(){
    console.log();
  }
  render () {
    const list = this.state.toDos.map((item, i) =>
      <div class="row">
        <div class="col-sm-10">
      <li class='list-group-item' key={i}>
        {' '}{item}{' '}
      </li>
        </div>
        <div class="col-sm-2">
      <input class="btn btn-danger" onClick={this.handleDelete} type="button" value="x" />
      </div>
      </div>
    )
    return (
      <div class='container'>
        <h1 class="text-center m-3">Todo</h1>
        <form onSubmit={this.handleClick}>
        <div class='row'>
          <div class='col-sm-8'>
            <input
              class='form-control'
              type='text'
              value={this.state.toDo}
              onChange={this.handleChange}
            />{' '}
          </div>
          <div class='col-sm-4'>
            <input
              class='btn btn-primary btn-block'
              type='submit'
              value='add'
            />{' '}
          </div>
        </div>{' '}
        </form>
        <div class="container mt-3">
        <p class="text-center"> To Do List: </p> <ul class='list-group'> {list} </ul>{' '}
        </div>
      </div>
    )
  }
}

