import Redux from 'redux'
import { Provider, connect } from 'react-redux'

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

const store = Redux.createStore(todoReducer)

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
