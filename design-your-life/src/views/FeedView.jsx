import React, { Component } from 'react';
import ActivityCard from '../components/Home/ActivityCard';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getUser } from '../store/actions/user';
import { deleteActivity } from '../store/actions/activity';
import '../styles/Feed.scss';

class FeedView extends Component {
  state = {
    activity: {
      activityName: '',
      enjoyment: undefined,
      energy: undefined,
      engagement: undefined
    }
  };

  componentDidMount() {
    this.props.getUser();
  }

  deleteActivity = id => {
    this.props.deleteActivity(id);
  };

  render() {
    const mappedActivities = this.props.activityLog.map(activity => (
      <ActivityCard
        key={activity.id}
        title={activity.title}
        enjoyment={activity.enjoyment}
        energy={activity.energy}
        engagement={activity.engagement}
        timestamp={activity.timestamp}
        deleteActivity={this.deleteActivity}
      />
    ));

    return this.props.isLoading ? (
      <Loader
        className="loader"
        type="TailSpin"
        color="black"
        height={80}
        width={80}
      />
    ) : (
      <div>{mappedActivities}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activityLog: state.user.activityLog,
    isLoading: state.user.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUser, deleteActivity }
)(FeedView);
