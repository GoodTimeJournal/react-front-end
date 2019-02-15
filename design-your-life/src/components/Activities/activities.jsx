import React from 'react';

import styled from 'styled-components';

const activities = () => {
  return (
    <div>
      <DashboardContainer>
        <DashboardLeft>
          <DashboardCenterContent>
            <h1>Story</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ea
              saepe reprehenderit, quia sint, accusantium aliquam necessitatibus
              hic numquam est consequatur delectus eligendi dicta aperiam a
              consequuntur, nemo neque vitae.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
              placeat.
            </p>
            <button>Get started</button>
          </DashboardCenterContent>
        </DashboardLeft>
        <DashboardRight>
          <DashboardImage src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80" />
        </DashboardRight>
      </DashboardContainer>
    </div>
  );
};

export default activities;

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
    font-weight: light;
    font-size: 7rem;
    padding-bottom: 3rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    padding-top: 4rem;
    padding-bottom: 2rem;
    font-size: 1.6rem;
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
