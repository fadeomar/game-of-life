import React, { Component } from "react";
import Grid from "../grid";
import "./style.css";

class Main extends Component {
  rows = 30;

  cols = 50;

  speed = 100;

  state = {
    generation: 0,
    gridFull: Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false))
  };

  selectBox = (row, col) => {
    const gridCopy = this.arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({ gridFull: gridCopy });
  };

  arrayClone = arr => JSON.parse(JSON.stringify(arr));

  render() {
    const { generation, gridFull } = this.state;
    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid
          gridFull={gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generation: {generation}</h2>
      </div>
    );
  }
}

export default Main;
