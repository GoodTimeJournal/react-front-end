import React from 'react';
import { TextField } from '@material-ui/core';

const ReflectionFormOne = props => {
  return (
    <div className="reflection-form-page">
      <div className="reflection-progress">
        <h3 className="active">Insights</h3>
        <h3>Surprises</h3>
        <h3>Trends</h3>
        <h3>Summary</h3>
      </div>

      <form className="reflection-form" onSubmit={props.nextStep}>
        <p>What have you learned this week?</p>
        <p>Did you have any "aha!" moments?</p>
        <p>
          Write a few sentences about any insights you've gained from your
          activity log this week.
        </p>

        <TextField
          onChange={props.handleChange}
          id="outlined-textarea"
          // hover color to match theme
          multiline
          autoFocus
          required
          margin="normal"
          variant="outlined"
          rows="12"
          rowsMax="50"
          inputProps={{ minLength: 1, maxLength: 150 }}
          minLength="1"
          maxLength="150"
          name="insights"
          value={props.insights}
        />
        <div className="reflection-buttons">
          <button>Next Question</button>
        </div>
      </form>
    </div>
  );
};

export default ReflectionFormOne;
