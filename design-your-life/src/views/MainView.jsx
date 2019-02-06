import React, { Component } from 'react';
import ActivityCard from '../components/Main/ActivityCard';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { deleteActivity, editActivity } from '../store/actions/activity';
import ActionButtons from '../components/Main/ActionButtons';
import SidebarLeft from '../components/Main/SidebarLeft';
import SearchBar from '../components/Main/SearchBar';
import '../styles/Feed.scss';

class MainView extends Component {
  // state = {
  //   isExpanded: false
  // };

  // expandCardMenu = id => {
  //   this.setState(prevState => ({
  //     isExpanded: !prevState.isExpanded
  //   }));
  // };

  deleteActivity = id => {
    this.props.deleteActivity(id);
  };

  editActivity = id => {
    const selected = this.props.activityLog.find(
      activity => activity.id === id
    );
    this.props.history.push('/activity');
    this.props.editActivity(selected);
  };

  render() {
    const holder = [
      {
        name: 'Running',
        enjoymentRating: 4,
        energyLevel: 3,
        engagement: 4,
        timestamp: '02/2 06:15 pm',
        id: 66
      },
      {
        name: 'Journaling',
        enjoymentRating: 4,
        energyLevel: 4,
        engagement: 5,
        timestamp: '01/30 02:05 pm',
        id: 25
      },
      {
        name: 'TV',
        enjoymentRating: 3,
        energyLevel: 2,
        engagement: 2,
        timestamp: '01/28 09:20 pm',
        id: 266
      },
      {
        name: 'Biking',
        enjoymentRating: 3,
        energyLevel: 3,
        engagement: 3,
        timestamp: '01/23 04:45 pm',
        id: 26634
      },
      {
        name: 'Swimming',
        enjoymentRating: 4,
        energyLevel: 5,
        engagement: 5,
        timestamp: '01/13 12:45 pm',
        id: 26543
      },
      {
        name: 'Running',
        enjoymentRating: 2,
        energyLevel: 3,
        engagement: 4,
        timestamp: '02/2 06:15 pm',
        id: 6611
      },
      {
        name: 'TV',
        enjoymentRating: 3,
        energyLevel: 2,
        engagement: 4,
        timestamp: '01/28 09:20 pm',
        id: 26611
      }
    ]; // replace with this.props.activityLog when request is made
    const mappedActivities = holder.map(activity => (
      <ActivityCard
        key={activity.id}
        id={activity.id}
        name={activity.name}
        enjoymentRating={activity.enjoymentRating}
        energyLevel={activity.energyLevel}
        engagement={activity.engagement}
        timestamp={activity.timestamp}
        editActivity={this.editActivity}
        deleteActivity={this.deleteActivity}
        // expandCardMenu={this.expandCardMenu}
        // isExpanded={this.state.isExpanded}
      />
    ));

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
    activeEdit: state.activity.activeEdit
  };
};

export default connect(
  mapStateToProps,
  { deleteActivity, editActivity }
)(MainView);
