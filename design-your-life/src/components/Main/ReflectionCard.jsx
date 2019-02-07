import React from 'react';

const ReflectionCard = props => {
  return (
    <div className="card">
      <div className="title-date">
        <h4 className="title">Reflection</h4>
        <h4 className="date">{props.timestamp}</h4>
      </div>
      <div className="reflection-summary">
        <p>{props.journalEntry}</p>
        <button
          className="reflectionDelete"
          onClick={() => props.deleteReflection(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReflectionCard;
