import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: this.props.display
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.setState({
      display: false
    });
  }

  render() {
    if (this.state.display) {
      return (
        <div className="row">
          <div className="col-sm-10">
            <li className="list-group-item"> {this.props.todo} </li>
          </div>
          <div className="col-sm-2">
            <input
              className="btn btn-danger"
              onClick={this.handleDelete}
              type="button"
              value="x"
            />
          </div>
        </div>
      );
    }else{
      return <div ></div>
    }
  }
}
