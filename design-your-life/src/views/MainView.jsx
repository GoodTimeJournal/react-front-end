import React, { Component } from 'react';
import ActivityCard from '../components/Main/ActivityCard';
import ReflectionCard from '../components/Main/ReflectionCard';
import { connect } from 'react-redux';
import {
  deleteActivity,
  editActivity,
  getActivities
} from '../store/actions/activity';
import { getReflections, deleteReflection } from '../store/actions/reflection';
import ActionButtons from '../components/Main/ActionButtons';
import SearchBar from '../components/Main/SearchBar';
import '../styles/Feed.scss';
import moment from 'moment';

const token = localStorage.getItem('token');
// let stopTimeout;
class MainView extends Component {
  state = {
    isExpanded: false,
    searchInput: ''
  };

  componentDidMount = () => {
    // this.props.getActivities(token);
    // this.props.getReflections(token);
    // console.log('**** mounted **** ');
  };

  deleteActivity = id => {
    this.props.deleteActivity(token, id);
    // this.props.getActivities(token);
  };

  deleteReflection = id => {
    this.props.deleteReflection(token, id);
    setTimeout(() => this.props.getReflections(token), 400);
  };

  editActivity = id => {
    const selected = this.props.activities.find(activity => activity.id === id);
    this.props.history.push('/activity');
    this.props.editActivity(selected);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log('rendered', this.props.activities);
    let mappedActivities;
    let mappedReflections;

    // Map Reflections Logic
    if (Array.isArray(this.props.reflections)) {
      mappedReflections = this.props.reflections.map(reflection => (
        <ReflectionCard
          key={reflection.id}
          id={reflection.id}
          journalEntry={reflection.journalEntry}
          timestamp={moment(reflection.timestamp).format('LLL')}
          sortedTimestamp={moment(reflection.timestamp).format('LT')}
          // editReflection={this.editReflection}
          deleteReflection={this.deleteReflection}
        />
      ));
    }

    // Map Activities Logic
    if (Array.isArray(this.props.activities)) {
      mappedActivities = this.props.activities.map(activity => (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          name={activity.name}
          enjoymentRating={activity.enjoymentRating}
          energyLevel={activity.energyLevel}
          engagement={activity.engagement}
          timestamp={moment(activity.timestamp).format('LLL')}
          sortedTimestamp={moment(activity.timestamp).format('LT')}
          editActivity={this.editActivity}
          deleteActivity={this.deleteActivity}
          isExpanded={this.state.isExpanded}
        />
      ));
    }

    // Filter Activities Logic
    let filteredActivities;
    if (Array.isArray(this.props.activities)) {
      if (mappedActivities.length !== 0) {
        filteredActivities = mappedActivities
          .filter(activity => {
            return activity.props.name
              .toLowerCase()
              .includes(this.state.searchInput.toLowerCase());
          })
          .map(activity => {
            return (
              <ActivityCard
                key={activity.props.id}
                id={activity.props.id}
                name={activity.props.name}
                enjoymentRating={activity.props.enjoymentRating}
                energyLevel={activity.props.energyLevel}
                engagement={activity.props.engagement}
                timestamp={moment(activity.props.timestamp).format('LLL')}
                sortedTimestamp={moment(activity.props.timestamp).format('LT')}
                editActivity={this.editActivity}
                deleteActivity={this.deleteActivity}
                expandCardMenu={this.expandCardMenu}
                isExpanded={this.state.isExpanded}
              />
            );
          });
      }
    }

    // Combine Feed Logic
    let combineActivitiesAndReflections;
    if (mappedActivities === undefined || mappedReflections === undefined) {
      setTimeout(() => {
        return null;
      }, 1000);
    } else if (mappedActivities.length > 0 || mappedReflections.length > 0) {
      combineActivitiesAndReflections = [
        ...mappedActivities,
        ...mappedReflections
      ];
      combineActivitiesAndReflections.sort((a, b) => {
        if (a.props.sortedTimestamp < b.props.sortedTimestamp) return 1;
        if (a.props.sortedTimestamp > b.props.sortedTimestamp) return -1;
        return 0;
      });
    }

    return (
      <>
        <div className="home-display">
          <div className="feed">
            <SearchBar handleChange={this.handleChange} />
            {this.state.searchInput !== '' || null
              ? filteredActivities
              : combineActivitiesAndReflections}
          </div>
        </div>
        <ActionButtons history={this.props.history} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.activity.isLoading,
    activeEdit: state.activity.activeEdit,
    activities: state.activity.activities,
    reflections: state.reflection.reflections
  };
};

export default connect(
  mapStateToProps,
  {
    deleteActivity,
    editActivity,
    getActivities,
    getReflections,
    deleteReflection
  }
)(MainView);
