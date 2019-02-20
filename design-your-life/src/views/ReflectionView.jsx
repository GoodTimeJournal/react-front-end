import React, { Component } from 'react';
import Reflections from '../components/Reflections/reflections';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getReflections, deleteReflection } from '../store/actions/reflection';

const token = localStorage.getItem('token');

class ReflectionView extends Component {
  constructor(props) {
    super(props);
  }

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
      />
    ));
    return (
      <ReflectionContainer>
        <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Reflections</h1>
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
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
