import React from 'react';

import styled from 'styled-components';

const welcome = props => {
  return (
    <div>
      <DashboardContainer>
        <DashboardLeft>
          <DashboardCenterContent>
            <h1>Welcome</h1>
            <h3>This is Design Your Life - Good Time Journal.</h3>
            <p>
              Our mission is to provide people with a platform to{' '}
              <strong>design</strong>, <strong>track</strong>, and{' '}
              <strong>reflect</strong> on their actions to improve their lives
            </p>
            <DashboardButtonContainer>
              <DashboardButton
                onClick={() => props.history.push('/activities')}
              >
                Activities
              </DashboardButton>
              <DashboardButton
                onClick={() => props.history.push('/reflections')}
              >
                Reflections
              </DashboardButton>
            </DashboardButtonContainer>
          </DashboardCenterContent>
        </DashboardLeft>
        <DashboardRight>
          <DashboardImage src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80" />
        </DashboardRight>
      </DashboardContainer>
    </div>
  );
};

export default welcome;

// The dashboard is what the user will see first when getting to route /activity
const DashboardContainer = styled.div`
  margin-top: 72px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

//Left dashboard styling
const DashboardLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items; center;
`;

const DashboardCenterContent = styled.div`
  padding: 0px 55px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-weight: lighter;
    font-size: 7rem;
    padding-bottom: 3rem;
  }
  p {
    margin-top: 3rem;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  strong {
    font-weight: bold;
  }
`;
const DashboardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const DashboardButton = styled.a`
  margin-top: 2rem;
  margin-right: 1rem;
  display: inline-block;
  line-height: 2.7em;
  padding: 0 1.5em 0 1.5em;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  border: solid 1px #dee0e3;
  font-size: 1.6rem;
  width: 15rem;
  text-align: center;
  white-space: nowrap;
  :hover {
    border-color: #9932cc;
    color: #9932cc;
  }
`;

//Right dashboard styling

const DashboardRight = styled.div`
  width: 50%;
`;

const DashboardImage = styled.img`
  width: 100%;
  height: 100%;
`;
