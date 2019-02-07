import React from "react";
import { TextField } from "@material-ui/core";

const ReflectionFormTwo = props => {
  return (
    <div className="reflection-form-page">
      <div className="reflection-progress">
        <h3 className="active">Insights</h3>
        <h3 className="active">Surprises</h3>
        <h3>Trends</h3>
        <h3>Summary</h3>
      </div>

      <form className="reflection-form" onSubmit={props.nextStep}>
        <p>
          Ipsum enim consequat veniam magna cupidatat duis mollit esse do eu id
          cillum consectetur cillum.
        </p>
        <TextField
          id="outlined-textarea"
          // hover color to match theme
          multiline
          autoFocus
          required
          margin="normal"
          variant="outlined"
          rows="12"
          rowsMax="50"
          name="surprises"
          value={props.surprises}
          onChange={props.handleChange}
          inputProps={{ minLength: 10, maxLength: 150 }}
        />
        <div className="reflection-buttons">
          <button onClick={props.previousStep}>Previous Step</button>
          <button>Next Question</button>
        </div>
      </form>
    </div>
  );
};

export default ReflectionFormTwo;
