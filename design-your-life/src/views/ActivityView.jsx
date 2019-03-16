import React, { Component } from 'react';

//REDUX
import { connect } from 'react-redux';
import {
  deleteActivity,
  editActivity,
  getActivities,
  addActivity
} from '../store/actions/activity';

//Activity Import
import Activities from '../components/Activities/activities';
import ActivityForm from '../components/Main/ActivityForm';

// STYLING
//Carousel import
import styled from 'styled-components';
import Carousel from '../components/Carousel/Carousel';

import ReactModal from 'react-modal';

class ActivityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activities: [],
      activity: {
        name: '',
        fk: '',
        enjoymentRating: '',
        energyLevel: '',
        engagement: ''
      }
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    this.props.getActivities(token);
    this.setState({
      ...this.state,
      activity: {
        ...this.props.activeEdit,
        fk: parseInt(localStorage.getItem('id'))
      }
    });
  };

  // Modal Functions
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  // Form Functions
  handleChange = e => {
    if (isNaN(e.target.value) || e.target.value === '') {
      this.setState({
        ...this.state,
        activity: {
          ...this.state.activity,
          [e.target.name]: e.target.value
        }
      });
    } else
      this.setState({
        ...this.state,
        activity: {
          ...this.state.activity,
          [e.target.name]: parseInt(e.target.value)
        }
      });
  };

  handleSubmit = e => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    this.props.isEditing // isEditing coming from Redux store
      ? this.props.updateActivity(token, this.state.activity)
      : this.props.addActivity(token, this.state.activity);
    this.handleCloseModal();

    this.setState({
      activity: {
        name: '',
        fk: '',
        enjoymentRating: '',
        energyLevel: '',
        engagement: ''
      }
    });
  };

  deleteActivity = id => {
    const token = localStorage.getItem('token');
    this.props.deleteActivity(token, id);
  };

  editActivity = id => {
    const selected = this.props.activities.find(activity => activity.id === id);
    this.props.history.push('/activity');
    this.props.editActivity(selected);
  };

  mapThroughActivities = activities => {
    let mappedActivities = activities
      .map(activity => (
        <Activities
          key={activity.id}
          activity={activity}
          editActivity={this.editActivity}
          deleteActivity={this.deleteActivity}
        />
      ))
      .reverse();
    return mappedActivities;
  };

  render() {
    return (
      <MainContainer>
        <Carousel />
        <ContentContainer>
          <h2>Activities</h2>
          <AddButtonContainer>
            <AddActivityButton onClick={this.handleOpenModal}>
              Add Activity
            </AddActivityButton>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              style={{
                content: {
                  height: '320px',
                  width: '300px',
                  margin: `250px auto`
                }
              }}
            >
              <IconContainer>
                <i className="fas fa-times" onClick={this.handleCloseModal} />
              </IconContainer>
              <ActivityForm
                name={this.state.activity.name}
                enjoymentRating={this.state.activity.enjoymentRating}
                energyLevel={this.state.activity.energyLevel}
                engagement={this.state.activity.engagement}
                timestamp={this.state.activity.timestamp}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                isEditing={this.props.isEditing}
              />
            </ReactModal>
          </AddButtonContainer>
          <ActivityContainer>
            {this.mapThroughActivities(this.props.activities)}
          </ActivityContainer>
        </ContentContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.activity.isLoading,
    activeEdit: state.activity.activeEdit,
    activities: state.activity.activities,
    isEditing: state.activity.isEditing
  };
};

export default connect(
  mapStateToProps,
  {
    addActivity,
    deleteActivity,
    editActivity,
    getActivities
  }
)(ActivityView);

const MainContainer = styled.div`
  width: 100%;
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
  cursor: pointer;
  :hover {
    border-color: #9932cc;
    color: #9932cc;
  }
`;
const ActivityContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 750px;
`;
const IconContainer = styled.div`
  text-align: right;
  i {
    font-size: 24px;
    cursor: pointer;
  }
`;

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// }

// const styles = theme => ({
//   paper: {
//     position: 'absolute',
//     width: theme.spacing.unit * 50,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing.unit * 4,
//     outline: 'none'
//   }
// });
