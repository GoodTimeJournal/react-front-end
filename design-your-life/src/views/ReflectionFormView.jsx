import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReflectionFormOne from '../components/Main/ReflectionFormOne';
import ReflectionFormTwo from '../components/Main/ReflectionFormTwo';
import ReflectionFormThree from '../components/Main/ReflectionFormThree';
import ReflectionFormSubmit from '../components/Main/ReflectionFormSubmit';
import '../styles/ReflectionForm.scss';
import moment from 'moment';

import { addReflection } from '../store/actions/reflection';

const token = localStorage.getItem('token');
class ReflectionFormView extends Component {
  state = {
    page: 1,
    reflection: {
      insights: '',
      surprises: '',
      trends: '',
      journalEntry: '',
      fk: '',
      week: ''
    }
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      reflection: {
        ...this.props.activeEdit,
        fk: parseInt(localStorage.getItem('id')),
        week: moment().format()
      }
    });
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      reflection: { ...this.state.reflection, [e.target.name]: e.target.value }
    });
  };

  nextStep = e => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  previousStep = e => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page - 1 }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.isEditing // isEditing coming from Redux store
      ? this.props.addReflection(this.state.reflection)
      : this.props.addReflection(token, this.state.reflection);
    setTimeout((this.props.history.push('/'), 1000));
  };

  render() {
    switch (this.state.page) {
      case 2:
        return (
          <ReflectionFormTwo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            surprises={this.state.reflection.surprises}
          />
        );
      case 3:
        return (
          <ReflectionFormThree
            handleChange={this.handleChange}
            trends={this.state.reflection.trends}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 4:
        return (
          <ReflectionFormSubmit
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            journalEntry={this.state.reflection.journalEntry}
            previousStep={this.previousStep}
          />
        );
      default:
        return (
          <ReflectionFormOne
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            insights={this.state.reflection.insights}
          />
        );
    }
  }
}

const mapStateToProps = state => {
  return { isEditing: state.reflection.isEditing };
};

export default connect(
  mapStateToProps,
  { addReflection }
)(ReflectionFormView);
