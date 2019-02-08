import React from "react";
import "../../styles/ActivityForm.scss";

const ActivityForm = props => {
  return (
    <div className="form-page">
      <form className="activity-form" onSubmit={props.handleSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="Activity"
          value={props.name}
          onChange={props.handleChange}
          minLength="5"
          maxLength="75"
        />
        <input
          required
          type="text"
          name="enjoymentRating"
          placeholder="Enjoyment Rating (1-5)"
          value={props.enjoymentRating}
          onChange={props.handleChange}
          pattern="[1-5]"
        />
        <input
          required
          type="text"
          name="energyLevel"
          placeholder="Energy Level (1-5)"
          value={props.energyLevel}
          onChange={props.handleChange}
          pattern="[1-5]"
        />
        <input
          required
          type="text"
          name="engagement"
          placeholder="Engagement (1-5)"
          value={props.engagement}
          onChange={props.handleChange}
          pattern="[1-5]"
        />
        <button>{props.isEditing ? "Update Activity" : "Add Activity"}</button>
      </form>
    </div>
  );
};

export default ActivityForm;
