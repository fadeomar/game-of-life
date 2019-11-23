import React from "react";
import PropTypes from "prop-types";
import {
  ButtonToolbar,
  Dropdown,
  Button,
  DropdownButton
} from "react-bootstrap";

const Buttons = ({
  playButton,
  pauseButton,
  clear,
  slow,
  fast,
  seed,
  gridSize
}) => (
  <div className="center">
    <ButtonToolbar>
      <Button className="btn btn-default" onClick={playButton}>
        play
      </Button>
      <Button className="btn btn-default" onClick={pauseButton}>
        pause
      </Button>
      <Button className="btn btn-default" type="button" onClick={clear}>
        clear
      </Button>
      <Button className="btn btn-default" type="button" onClick={slow}>
        slow
      </Button>
      <Button className="btn btn-default" type="button" onClick={fast}>
        fast
      </Button>
      <Button className="btn btn-default" type="button" onClick={seed}>
        seed
      </Button>
      <DropdownButton
        title="Grid Size"
        id="size-menu"
        onSelect={e => gridSize(e)}
      >
        <Dropdown.Item eventKey="1">20 X 10</Dropdown.Item>
        <Dropdown.Item eventKey="2">50 X 30</Dropdown.Item>
        <Dropdown.Item eventKey="3">70 X 70</Dropdown.Item>
      </DropdownButton>
    </ButtonToolbar>
  </div>
);
Buttons.propTypes = {
  playButton: PropTypes.func.isRequired,
  pauseButton: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  slow: PropTypes.func.isRequired,
  fast: PropTypes.func.isRequired,
  seed: PropTypes.func.isRequired,
  gridSize: PropTypes.func.isRequired
};
export default Buttons;
