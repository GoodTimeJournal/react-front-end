import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

import '../../styles/ActionButtons.scss';

function ActionButtons(props) {
  return (
    <div className="buttons">
      <Link to="/activity">
        <Fab aria-label="Add" className="add-button add-activity">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default ActionButtons;
