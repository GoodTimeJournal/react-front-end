import React from 'react';
import styled from 'styled-components';

const reflections = props => {
  console.log(props);
  return (
    <>
      <ReflectionBlock>
        <ReflectionContent>
          <h4 className="date">{props.timestamp}</h4>
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
        </ReflectionContent>
        <ReflectionPhoto>
          <img
            src="https://images.unsplash.com/photo-1531615018523-12556603349f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
            alt=""
          />
        </ReflectionPhoto>
      </ReflectionBlock>
    </>
  );
};

export default reflections;

const ReflectionBlock = styled.div`
  display: flex;
  max-height: 330px;
`;

const ReflectionContent = styled.div`
  width: 60%;
  padding: 10px 20px 0 20px;

  h4 {
    border-bottom: 1px solid grey;
    text-align: right;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 700px;
  }

  span {
    font-weight: 700;
  }

  p {
    max-width: 700px;
  }
`;

const ReflectionPhoto = styled.div`
  width: 40%;

  img {
    width: 100%;
    height: 100%;
  }
`;
