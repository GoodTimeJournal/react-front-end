import React from 'react';
import '../../styles/ActivityForm.scss';
import { TextField } from '@material-ui/core';

const ActivityForm = props => {
  return (
    <div className="form-page">
      <form className="activity-form" onSubmit={props.handleSubmit}>
        <TextField
          minLength="1"
          maxLength="30"
          fullWidth
          label="Activity"
          value={props.currentName}
          inputProps={{ minLength: 1, maxLength: 30 }}
          inputStyle={{ fontSize: '50px' }}
          required
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <TextField
          required
          type="number"
          name="enjoymentRating"
          label="Enjoyment Rating (1-5)"
          value={props.enjoymentRating}
          onChange={props.handleChange}
          min="1"
          max="5"
        />
        <TextField
          required
          type="number"
          name="energyLevel"
          label="Energy Level (1-5)"
          value={props.energyLevel}
          onChange={props.handleChange}
          min="1"
          max="5"
        />
        <TextField
          required
          type="number"
          name="engagement"
          label="Engagement (1-5)"
          value={props.engagement}
          onChange={props.handleChange}
          min="1"
          max="5"
        />
        <button>{props.isEditing ? 'Update Activity' : 'Add Activity'}</button>
      </form>
    </div>
  );
};

export default ActivityForm;
