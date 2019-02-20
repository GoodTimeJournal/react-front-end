import React from 'react';
import styled from 'styled-components';

const reflections = props => {
  console.log(props);
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Reflections</h1>
      <ReflectionBlock>
        <ReflectionContent>
          <h4 className="date">{props.timestamp}</h4>
          <h5>Journal Entry</h5>
          <p>{props.journalEntry}</p>
          <h5>Surprises</h5>
          <p>{props.surprises}</p>
          <h5>Trends</h5>
          <p>{props.trends}</p>
          <h5>Insights</h5>
          <p>{props.insights}</p>
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
  max-height: 20%;
`;

const ReflectionContent = styled.div`
  width: 60%;
  padding: 30px;
  overflow-y: auto;

  .date {
    border-bottom: 1px solid grey;
    text-align: right;
    margin-bottom: 5px;
  }
`;

const ReflectionPhoto = styled.div`
  width: 40%;

  img {
    width: 100%;
    height: 100%;
  }
`;
