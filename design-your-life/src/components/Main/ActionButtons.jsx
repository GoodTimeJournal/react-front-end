import React from "react";
import Fab from "@material-ui/core/Fab";
import {
  AddCircle,
  RemoveCircle,
  NaturePeople,
  DirectionsRun
} from "@material-ui/icons/";
import "../../styles/ActionButtons.scss";

class ActionButtons extends React.Component {
  state = {
    isButtonsOpen: false
  };

  openButtons = e => {
    e.preventDefault();
    this.setState({ isButtonsOpen: !this.state.isButtonsOpen });
  };

  render() {
    return (
      <div className="buttons">
        {this.state.isButtonsOpen ? (
          <>
            <Fab
              onClick={e => this.openButtons(e)}
              aria-label="Add"
              className="subtract-button"
            >
              <RemoveCircle />
            </Fab>
            <Fab aria-label="Add" className="reflection-icon">
              <NaturePeople />
            </Fab>
            <p className="reflection-text">Reflection</p>
            <Fab aria-label="Add" className="activity-icon">
              <DirectionsRun />
            </Fab>
            <p className="activity-text">Journal</p>
          </>
        ) : (
          <Fab
            onClick={e => this.openButtons(e)}
            aria-label="Add"
            className="add-button add-activity"
          >
            <AddCircle />
          </Fab>
        )}
      </div>
    );
  }
}

export default ActionButtons;
