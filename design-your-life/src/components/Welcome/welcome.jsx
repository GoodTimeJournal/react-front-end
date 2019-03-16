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
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  overflow-y: hidden;

  @media (max-width: 1000px) {
    flex-direction: column;
    min-height: 0;
  }
`;

//Left dashboard styling
const DashboardLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 10rem;
    text-align: center;
  }
`;

const DashboardCenterContent = styled.div`
  margin: 0px 55px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* 73px accounts for height of fixed nav bar */
  margin-top: 73px;

  h1 {
    font-weight: lighter;
    font-size: 7rem;
    padding-bottom: 3rem;
  }
  p {
    margin-top: 3rem;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    max-width: 500px;
  }
  strong {
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
const DashboardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
const DashboardButton = styled.a`
  margin-top: 1rem;
  margin-right: 2rem;
  display: inline-block;
  line-height: 2.7em;
  padding: 0 2rem 0 2rem;
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
    cursor: pointer;
  }
`;

//Right dashboard styling

const DashboardRight = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const DashboardImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;
