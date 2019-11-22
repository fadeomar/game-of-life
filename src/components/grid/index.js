import React, { Component } from "react";
import Box from "../box";

class Grid extends Component {
  state = {};

  render() {
    const width = this.props.cols * 16 + 1;
    const rowsArr = [];

    let boxClass = "";
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.rows; j++) {
        const boxId = `${i}_${j}`;

        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }
    return (
      <div className="grid" style={{ width }}>
        {rowsArr}
      </div>
    );
  }
}

export default Grid;
