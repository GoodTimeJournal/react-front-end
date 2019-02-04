import React from 'react';
import moment from 'moment';

const ActivityCard = props => {
  return (
    <div className="activity-card">
      <div className="title-date">
        <h4>{props.title}</h4>
        <h4>{props.timestamp}</h4>
      </div>
      <div className="ratings rating-titles">
        <p>Engagement</p>
        <p>Energy</p>
        <p>Enjoyment</p>
      </div>
      <div className="ratings rating-numbers">
        <p>{props.energy}</p>
        <p>{props.enjoyment}</p>
        <p>{props.engagement}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
