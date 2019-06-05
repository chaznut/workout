import React, { Component } from 'react';
import UserInfo from './UserInfo';
import WorkoutType from './WorkoutType';
import ExerciseNumber from './ExerciseNumber';

import abs from '../../data/abs';
import legs from '../../data/legs';
import arms from '../../data/arms';
import shoulders from '../../data/shoulders';
import chest from '../../data/chest';
import back from '../../data/back';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      workoutType: '',
      exerciseNumber: 0,
      workout: []
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    console.log(e.target.value);
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step, name, workoutType, exerciseNumber, workout } = this.state;
    const values = { name, workoutType, exerciseNumber, workout };
    console.log(chest);
    switch (step) {
      case 1:
        return (
          <UserInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <WorkoutType
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ExerciseNumber
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>Final Workout</h1>;
    }
  }
}

export default UserForm;
