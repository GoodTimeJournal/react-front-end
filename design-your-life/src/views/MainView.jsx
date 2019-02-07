import React, { Component } from 'react';
import ActivityCard from '../components/Main/ActivityCard';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import {
  deleteActivity,
  editActivity,
  getActivities
} from '../store/actions/activity';
import { getReflections } from '../store/actions/reflection';
import ActionButtons from '../components/Main/ActionButtons';
import SidebarLeft from '../components/Main/SidebarLeft';
import SearchBar from '../components/Main/SearchBar';
import '../styles/Feed.scss';
import moment from 'moment';

const token = localStorage.getItem('token');

class MainView extends Component {
  state = {
    isExpanded: false
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

  render() {
    let mappedActivities;
    // let mappedReflections;

    // const renderThis = [...mappedActivities, ...mappedReflections].sort('bydate');

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
            <SearchBar />
            {mappedActivities}
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
    activities: state.activity.activities
  };
};

export default connect(
  mapStateToProps,
  { deleteActivity, editActivity, getActivities, getReflections }
)(MainView);
