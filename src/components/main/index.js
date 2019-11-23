import React, { Component } from "react";
import Grid from "../grid";
import Buttons from "../buttons";
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

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  selectBox = (row, col) => {
    const { gridFull: prevGrid } = this.state;
    const gridFull = prevGrid.map((rowArr, rowIdx) =>
      rowArr.map((item, colIdx) =>
        rowIdx === row && colIdx === col ? !item : item
      )
    );
    this.setState(() => ({ gridFull }));
  };

  seed = () => {
    const { gridFull: prevGrid } = this.state;
    const gridFull = prevGrid.map(rowArr =>
      rowArr.map(() => Math.floor(Math.random() * 4) === 1)
    );
    this.setState(() => ({ gridFull }));
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => clearInterval(this.intervalId);

  slow = () => {
    this.speed = this.speed + 100;
    this.playButton();
  };

  fast = () => {
    this.speed = this.speed - 100;
    this.playButton();
  };

  clear = () => {
    const grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));
    this.setState({ gridFull: grid, generation: 0 });
  };

  gridSize = size => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;
    }
    this.clear();
  };

  play = () => {
    const { gridFull: g, generation } = this.state;
    const g2 = this.arrayClone(g);

    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count += 1;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count += 1;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count += 1;
        if (j < this.cols - 1) if (g[i][j + 1]) count += 1;
        if (j > 0) if (g[i][j - 1]) count += 1;
        if (i < this.rows - 1) if (g[i + 1][j]) count += 1;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count += 1;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count += 1;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      gridFull: g2,
      generation: generation + 1
    });
  };

  arrayClone = arr => JSON.parse(JSON.stringify(arr));

  render() {
    const { generation, gridFull } = this.state;
    return (
      <div>
        <h1>The Game of Life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
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
