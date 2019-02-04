import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/ActionButtons.scss';

function ActionButtons(props) {
  return (
    <div className="buttons">
      <Fab aria-label="Add" className="add-button add-activity">
        <AddIcon />
      </Fab>
      <Fab aria-label="Add" className="add-button add-reflection">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default ActionButtons;
