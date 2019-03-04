import React from 'react';
import { TextField } from '@material-ui/core';

const ReflectionFormSubmit = props => {
  return (
    <div className="reflection-form-page">
      <div className="reflection-progress">
        <h3 className="active">Insights</h3>
        <h3 className="active">Surprises</h3>
        <h3 className="active">Trends</h3>
        <h3 className="active">Summary</h3>
      </div>

      <form className="reflection-form" onSubmit={props.handleSubmit}>
        <p>Write a few sentences to summarize your week. </p>
        <p>What are the most important things you've noticed this week?</p>
        <p>Good luck next week!</p>
        <TextField
          id="outlined-textarea"
          // hover color to match theme
          multiline
          autoFocus
          required
          margin="normal"
          variant="outlined"
          rows="12"
          rowsMax="5"
          name="journalEntry"
          value={props.journalEntry}
          onChange={props.handleChange}
          inputProps={{ minLength: 1, maxLength: 150 }}
        />
        <div className="reflection-buttons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button>Submit Reflection</button>
        </div>
      </form>
    </div>
  );
};

export default ReflectionFormSubmit;
