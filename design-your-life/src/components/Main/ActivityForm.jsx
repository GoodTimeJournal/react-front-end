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
          fontSize="20"
          label="Activity"
          style={{ fontSize: '20px' }}
          inputProps={{ minLength: 1, maxLength: 30 }}
          required
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <TextField
          required
          type="text"
          name="enjoymentRating"
          label="Enjoyment Rating (1-5)"
          value={props.enjoymentRating}
          onChange={props.handleChange}
        />
        <TextField
          required
          type="text"
          name="energyLevel"
          label="Energy Level (1-5)"
          value={props.energyLevel}
          onChange={props.handleChange}
        />
        <TextField
          required
          type="text"
          name="engagement"
          label="Engagement (1-5)"
          value={props.engagement}
          onChange={props.handleChange}
        />
        <button>{props.isEditing ? 'Update Activity' : 'Add Activity'}</button>
      </form>
    </div>
  );
};

export default ActivityForm;
