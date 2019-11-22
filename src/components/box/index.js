import React, { Component } from "react";

class Box extends Component {
  state = {};

  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={() => this.props.selectBox(this.props.row, this.props.col)}
      />
    );
  }
}

export default Box;
