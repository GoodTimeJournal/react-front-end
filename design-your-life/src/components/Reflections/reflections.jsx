import React from 'react';
import styled from 'styled-components';

const reflections = props => {
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
  height: 400px;
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
    line-height: 1.3;
  }
`;

const ReflectionPhoto = styled.div`
  width: 40%;

  @media (max-width: 800px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
