import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Button } from '@material-ui/core';

const Reflections = props => {
  console.log(props);
  return (
    <>
      <ReflectionBlock>
        <ReflectionContent>
          <h5 className="date">
            {moment(props.timestamp)
              .startOf('hours')
              .fromNow()}
          </h5>

          <p>
            <span>Summary:</span> {props.journalEntry}
          </p>
          <p>
            <span>Surprises:</span> {props.surprises}
          </p>
          <p>
            <span>Trends:</span> {props.trends}
          </p>
          <p>
            <span>Insights:</span> {props.insights}
          </p>
          <Center>
            <Button onClick={() => props.deleteReflection(props.id)}>
              Delete Reflection
            </Button>
          </Center>
        </ReflectionContent>
        <ReflectionPhoto>
          <img src="https://source.unsplash.com/random/journal" alt="" />
        </ReflectionPhoto>
      </ReflectionBlock>
    </>
  );
};

export default Reflections;

const ReflectionBlock = styled.div`
  display: flex;
  height: 400px;
  max-width: 1300px;
  margin: 0 auto;
  border-bottom: 1px solid #d3d3d3;

  :nth-child(2) {
    border-top: 1px solid #d3d3d3;
  }

  :nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: 100%;
    :nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`;

const ReflectionContent = styled.div`
  width: 60%;
  padding: 60px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 30px;
  }

  .date {
    border-bottom: 1px solid grey;
    text-align: right;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-weight: 700px;
  }

  span {
    font-weight: 700;
  }

  p {
    max-width: 700px;
    line-height: 1.3;
  }
`;

const ReflectionPhoto = styled.div`
  width: 40%;

  @media (max-width: 800px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const Center = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: lighter;
`;
