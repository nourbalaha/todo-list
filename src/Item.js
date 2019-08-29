import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(){
    this.props.edit(this.props.index);
  }
  handleDelete(){
    this.props.delete(this.props.index);
  }

  render() {
    return (
      <div class="row">
      <div class="col-sm-8">
        <li class="list-group-item">
          {" "}
          {this.props.todos[this.props.index]}{" "}
        </li>
      </div>
      <div class="col-sm-2">
        <input
          className="btn btn-info"
          onClick={this.handleEdit}
          type="button"
          value="Edit"
        />
      </div>
      <div class="col-sm-2">
        <input
          className="btn btn-danger"
          onClick={this.handleDelete}
          type="button"
          value="x"
        />
      </div>
    </div>
    )
  }
}