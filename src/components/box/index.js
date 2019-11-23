/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const Box = ({ boxClass, id, selectBox, row, col }) => (
  <div
    className={boxClass}
    id={id}
    role="button"
    onClick={() => selectBox(row, col)}
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
