import React, { Component } from 'react'
import {createStore} from 'redux'
import { Provider, connect } from 'react-redux'
import App from './App';

const ADD_TODO = 'ADD_TODO'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    default:
      return state
  }
}

const addToDo = todo => {
  return {
    type: ADD_TODO,
    todo
  }
}

const store = createStore(todoReducer)

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: function (todo) {
      dispatch(addToDo(todo))
    }
  }
}

const Container = connect(mapStateToProps,mapDispatchToProps)(App);

export default class AppWrapper extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}