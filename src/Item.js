import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    console.log(this.props.index);
  }

  render() {
    return (
      <div class="row">
      <div class="col-sm-10">
        <li class="list-group-item">
          {" "}
          {this.props.todo}{" "}
        </li>
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