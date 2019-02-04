import React from 'react';
import '../../styles/ActivityForm.scss';

const ActivityForm = () => {
  return (
    <form className="activity-form">
      <input type="text" name="activity" />
      <input type="text" name="enjoyment" />
      <input type="text" name="energy" />
      <input type="text" name="engagement" />
      <button>Submit</button>
    </form>
  );
};

export default ActivityForm;
