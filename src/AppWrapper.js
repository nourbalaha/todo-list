import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import App from './App'

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODO:
      return [].concat(state.slice(0,action.index), state.slice(action.index+1))
    case EDIT_TODO:
      return [].concat(state.slice(0,action.index), state.slice(action.index+1))
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

const deleteToDo = index => {
  return {
    type: DELETE_TODO,
    index
  }
}

const editToDo = (todo,index) => {
  return {
    type: EDIT_TODO,
    index,
    todo,
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
    },
    delete: function (index) {
      dispatch(deleteToDo(index))
    },
    edit: function (todo,index){
      dispatch(editToDo(todo,index))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

export default class AppWrapper extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
