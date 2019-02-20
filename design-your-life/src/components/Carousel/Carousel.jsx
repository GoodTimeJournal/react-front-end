import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Carousel = () => {
  return <Slider {...carouselSettings}>{displayCarouselImages()}</Slider>;
};

export default Carousel;

//Carousel Styling
const CarouselImageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 72px;
  max-width: 100%;
`;

const CarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 200px;
`;

//Settings for carousel
let carouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

//Maps through images and returns a component for each image.
const displayCarouselImages = () =>
  carouselImages.map((image, i) => {
    return (
      <CarouselImageContainer>
        <CarouselImage src={image} key={i} />
      </CarouselImageContainer>
    );
  });

//Images - Resolution size: 1440x300
let carouselImages = [
  'https://images.unsplash.com/photo-1548161126-7b079975fa76?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1547843697-11484584526e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1547958600-915c8a5131de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1549138159-22f90358cea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1440&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9'
];
