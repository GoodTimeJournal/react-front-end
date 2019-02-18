import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const activities = props => {
  return (
    <ActivityStyling>
      <i className="fas fa-running" />
      <h3>{props.activity.name}</h3>
      <h5>
        Posted{' '}
        {moment(props.activity.timestamp)
          .startOf('day')
          .fromNow()}
      </h5>
      <p>{props.activity.engagement}</p>
      <p>{props.activity.energyLevel}</p>
      <p>{props.activity.enjoymentRating}</p>
    </ActivityStyling>
  );
};

export default activities;

const ActivityStyling = styled.div`
  width: 33%;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #dee0e3;

  h3 {
    font-size: 2.8rem;
    font-weight: lighter;
    margin: 2rem 0 0.8rem;
  }
  h5 {
    font-size: 1rem;
    font-weight: lighter;
    margin-bottom: 1rem;
  }
  i {
    font-size: 4rem;
    border: 1px solid #dee0e3;
    border-radius: 40%;
    padding: 1.4rem;
  }
`;
