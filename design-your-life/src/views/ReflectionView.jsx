import React, { Component } from 'react';
import Reflections from '../components/Reflections/reflections';
import styled from 'styled-components';

export default class ReflectionView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReflectionContainer>
        <Reflections />
      </ReflectionContainer>
    );
  }
}

const ReflectionContainer = styled.div``;
