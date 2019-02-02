import React, { Component } from 'react';
import ActivityForm from '../components/Activity/ActivityForm';

export class ActivityView extends Component {
  state = {
    activityEntry: {
      activity: '',
      enjoyment: undefined,
      energy: undefined,
      engagement: undefined
    }
  };

  render() {
    return <ActivityForm />;
  }
}

export default ActivityView;
