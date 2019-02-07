import React from 'react';

const ReflectionCard = props => {
  return (
    <div className="card">
      <h1>journal entry: {props.journalEntry}</h1>
    </div>
  );
};

export default ReflectionCard;
