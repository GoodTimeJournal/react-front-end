import React, { Component } from 'react';
import ReflectionForm from '../components/Main/ReflectionForm';
import '../styles/ReflectionForm.scss';

class ReflectionFormView extends Component {
  state = {
    page: 1,
    reflection: {
      q1: '',
      q2: '',
      q3: '',
      summary: ''
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div>
        <ReflectionForm />
      </div>
    );
  }
}

export default ReflectionFormView;
