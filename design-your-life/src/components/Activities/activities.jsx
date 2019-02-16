import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

const activities = props => {
  console.log(props);
  return (
    <MainContainer>
      <Slider {...carouselSettings}>{displayCarouselImages()}</Slider>
      <ContentContainer>
        <h2>Activities</h2>
        <AddButtonContainer>
          <AddActivityButton>Add Activity</AddActivityButton>
        </AddButtonContainer>
        <ActivityContainer>{mapThroughActivities()}</ActivityContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default activities;

const MainContainer = styled.div`
  max-width: 100%;
`;

//Carousel Styling
const CarouselImageContainer = styled.div`
  margin: 0 auto;
  display: flex
  margin-top: 72px;
  max-width: 100%;
`;

const CarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 200px;
`;

//Activity Styling
const ContentContainer = styled.div`
  padding: 3rem 10rem;
  h2 {
    font-weight: lighter;
    font-size: 3.4rem;
    text-align: center;
  }
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AddActivityButton = styled.a`
  margin-top: 1rem;
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
  font-weight: light;
  :hover {
    border-color: #9932cc;
    color: #9932cc;
  }
`;

const ActivityContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 750px;
`;

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

// SOME OF THESE FUNCTIONS WILL BE EXTRACTED OUT TO VEIWS
//Settings for carousel
let carouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

//Maps through images and returns a component for each image.
const displayCarouselImages = () =>
  carouselImages.map(image => {
    return (
      <CarouselImageContainer>
        <CarouselImage src={image} />
      </CarouselImageContainer>
    );
  });

//Images - Resolution size: 1440x300
let carouselImages = [
  'https://images.unsplash.com/photo-1548161126-7b079975fa76?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1547843697-11484584526e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1547958600-915c8a5131de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1549138159-22f90358cea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
];

//test data

const mapThroughActivities = () =>
  activityState.map(activity => (
    <ActivityStyling>
      <i class="fas fa-running" />
      <h3>{activity.title}</h3>
      <h5>Posted 5 minutes ago</h5>
      <p>{activity.activity}</p>
      <p>{activity.energy}</p>
      <p>{activity.engagement}</p>
    </ActivityStyling>
  ));

let activityState = [
  {
    title: 'YouTube',
    activity: 1,
    energy: 1,
    engagement: 2,
  },
  {
    title: 'Workout',
    activity: 2,
    energy: 1,
    engagement: 3,
  },
  {
    title: 'Reading',
    activity: 1,
    energy: 1,
    engagement: 2,
  },
  {
    title: 'Run',
    activity: 1,
    energy: 1,
    engagement: 2,
  },
  {
    title: 'Tea',
    activity: 1,
    energy: 1,
    engagement: 2,
  },
  {
    title: 'Coffee',
    activity: 1,
    energy: 1,
    engagement: 2,
  },
];
