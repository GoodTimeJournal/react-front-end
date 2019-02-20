import React, { Component } from 'react';
import Reflections from '../components/Reflections/reflections';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getReflections, deleteReflection } from '../store/actions/reflection';
import Carousel from '../components/Carousel/Carousel';

const token = localStorage.getItem('token');

class ReflectionView extends Component {
  componentDidMount() {
    this.props.getReflections(token);
  }
  render() {
    const mappedReflections = this.props.reflections.map(reflection => (
      <Reflections
        timestamp={reflection.timestamp}
        journalEntry={reflection.journalEntry}
        insights={reflection.insights}
        trends={reflection.trends}
        surprises={reflection.surprises}
        key={reflection.timestamp}
      />
    ));
    return (
      <ReflectionContainer>
        <Carousel />
        <h2>Reflections</h2>
        {mappedReflections}
      </ReflectionContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    isLoading: state.activity.isLoading,
    reflections: state.reflection.reflections
  };
};

export default connect(
  mapStateToProps,
  { getReflections, deleteReflection }
)(ReflectionView);

const ReflectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    padding: 3rem 0;
    font-weight: lighter;
    font-size: 3.4rem;
    text-align: center;
  }
`;
