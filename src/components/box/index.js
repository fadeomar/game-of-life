import React from "react";
import PropTypes from "prop-types";

const Box = ({ boxClass, id, selectBox, row, col }) => (
  <div
    className={boxClass}
    id={id}
    role="button"
    onClick={() => selectBox(row, col)}
    aria-label="Box"
    tabIndex="0"
    onKeyDown
  />
);

Box.propTypes = {
  boxClass: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectBox: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired
};

export default Box;
