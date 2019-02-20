import React, { Component } from 'react';
import Reflections from '../components/Reflections/reflections';
import ReflectionFormView from './ReflectionFormView';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getReflections, deleteReflection } from '../store/actions/reflection';
import Carousel from '../components/Carousel/Carousel';
import ReactModal from 'react-modal';

const token = localStorage.getItem('token');

class ReflectionView extends Component {
  state = {
    showModal: false,
    reflections: []
  };

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
        <AddButtonContainer>
          <AddReflectionButton onClick={this.handleOpenModal}>
            Add Reflection
          </AddReflectionButton>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            style={{
              content: {
                color: 'lightsteelblue',
                height: '300px',
                marginTop: `250px`
              }
            }}
          >
            <ReflectionFormView
            // name={this.state.activity.name}
            // enjoymentRating={this.state.activity.enjoymentRating}
            // energyLevel={this.state.activity.energyLevel}
            // engagement={this.state.activity.engagement}
            // timestamp={this.state.activity.timestamp}
            // handleChange={this.handleChange}
            // handleSubmit={this.handleSubmit}
            // isEditing={this.props.isEditing}
            />
          </ReactModal>
        </AddButtonContainer>
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
    margin-top: 3rem;
    font-weight: lighter;
    font-size: 3.4rem;
    text-align: center;
  }
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AddReflectionButton = styled.a`
  margin: 1rem 0 4rem 0;
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
  cursor: pointer;
  :hover {
    border-color: #9932cc;
    color: #9932cc;
  }
`;
