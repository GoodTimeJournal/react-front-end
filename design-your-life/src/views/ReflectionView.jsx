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
    console.log(this.props);
    return (
      <ReflectionContainer>
        <Reflections />
      </ReflectionContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    isLoading: state.activity.isLoading,
    reflections: state.reflection.reflections,
  };
};

export default connect(
  mapStateToProps,
  { getReflections, deleteReflection }
)(ReflectionView);

const ReflectionContainer = styled.div``;
