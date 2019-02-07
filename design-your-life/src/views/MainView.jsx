import React, { Component } from 'react';
import ActivityCard from '../components/Main/ActivityCard';
import ReflectionCard from '../components/Main/ReflectionCard';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import {
  deleteActivity,
  editActivity,
  getActivities


} from "../store/actions/activity";
import { getReflections } from "../store/actions/reflection";
import ActionButtons from "../components/Main/ActionButtons";
import SidebarLeft from "../components/Main/SidebarLeft";
import SearchBar from "../components/Main/SearchBar";
import "../styles/Feed.scss";
import moment from "moment";

const token = localStorage.getItem('token');

class MainView extends Component {
  state = {
    isExpanded: false,
    searchInput: ''
  };

  componentDidMount = () => {
    this.props.getActivities(token);
    this.props.getReflections(token);
    this.setState({
      activities: this.props.activities
    });
  };

  toggleCardMenu = id => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  deleteActivity = id => {
    this.props.deleteActivity(token, id);
    setTimeout(() => this.props.getActivities(token), 100);
  };

  editActivity = id => {
    const selected = this.props.activities.find(activity => activity.id === id);
    this.props.history.push('/activity');
    setTimeout(() => this.props.editActivity(selected), 2000);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let mappedActivities;
    let mappedReflections;

    if (Array.isArray(this.props.reflections)) {
      mappedReflections = this.props.reflections.map(reflection => (
        <ReflectionCard
          key={reflection.id}
          id={reflection.id}
          journalEntry={reflection.journalEntry}
          timestamp={moment(reflection.timestamp).format('M/D')}
          // editReflection={this.editReflection}
          // deleteReflection={this.deleteReflection}
        />
      ));
    }
    if (Array.isArray(this.props.activities)) {
      mappedActivities = this.props.activities.map(activity => (
        <ActivityCard
          key={activity.id}
          id={activity.id}
          name={activity.name}
          enjoymentRating={activity.enjoymentRating}
          energyLevel={activity.energyLevel}
          engagement={activity.engagement}
          timestamp={moment(activity.timestamp).format('M/D')}
          editActivity={this.editActivity}
          deleteActivity={this.deleteActivity}
          toggleCardMenu={this.toggleCardMenu}
          isExpanded={this.state.isExpanded}
        />
      ));
    }
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
                timestamp={moment(activity.props.timestamp).format('M/D')}
                editActivity={this.editActivity}
                deleteActivity={this.deleteActivity}
                expandCardMenu={this.expandCardMenu}
                isExpanded={this.state.isExpanded}
              />
            );
          });
      }
    }
    // console.log(filteredActivities);
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
    }

    return this.props.isLoading ? (
      <div className="loader-div">
        <Loader
          className="loader"
          type="TailSpin"
          color="black"
          height={80}
          width={80}
        />
      </div>
    ) : (
      <>
        <div className="home-display">
          <SidebarLeft reflections={this.props.reflectionLog} />
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
    isLoading: state.user.isLoading,
    activeEdit: state.activity.activeEdit,
    activities: state.activity.activities,
    reflections: state.reflection.reflections
  };
};

export default connect(
  mapStateToProps,
  { deleteActivity, editActivity, getActivities, getReflections }
)(MainView);
