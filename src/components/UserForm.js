import React, { Component } from 'react';
import UserInfo from './UserInfo';
import WorkoutType from './WorkoutType';
import ExerciseNumber from './ExerciseNumber';
import FinalWorkout from './FinalWorkout';

import abs from '../data/abs';
import legs from '../data/legs';
import arms from '../data/arms';
import shoulders from '../data/shoulders';
import chest from '../data/chest';
import back from '../data/back';

export class UserForm extends Component {
  render() {
    const { step, name, workoutType, exerciseNumber, workout } = this.state;
    const values = { name, workoutType, exerciseNumber, workout };

    switch (step) {
      case 1:
        return (
          <UserInfo
            buttonDisabled={name === '' ? true : false}
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
            handleSubmit={this.handleSubmit}
            values={values}
          />
        );
      case 4:
        return (
          <FinalWorkout
            name={this.state.name}
            workout={this.state.workout}
            handleSubmit={this.handleSubmit}
            onClick={() => this.shuffle(this.state.workoutType)}
            handleReset={this.handleReset}
          />
        );
      default:
        return null;
    }
  }
}

export default UserForm;
