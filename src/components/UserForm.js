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
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      workoutType: 'Chest',
      exerciseNumber: 1,
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

  handleReset = () => {
    this.setState({
      step: 1,
      name: '',
      workoutType: 'Chest',
      exerciseNumber: 1,
      workout: []
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  shuffle = workoutArray => {
    const { workoutType } = this.state;

    if (workoutType === 'Chest') workoutArray = chest;
    if (workoutType === 'Back') workoutArray = back;
    if (workoutType === 'Shoulders') workoutArray = shoulders;
    if (workoutType === 'Arms') workoutArray = arms;
    if (workoutType === 'Legs') workoutArray = legs;
    if (workoutType === 'Abs') workoutArray = abs;

    const mapNames = workoutArray.map(workout => workout);

    for (let i = mapNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mapNames[i], mapNames[j]] = [mapNames[j], mapNames[i]];
    }
    const shuffledWorkout = mapNames.slice(0, this.state.exerciseNumber);
    this.setState({ workout: shuffledWorkout });
  };

  handleSubmit = () => {
    const { workoutType } = this.state;

    this.shuffle(workoutType);
  };

  checkDups(arr, exercise) {
    return arr.includes(exercise) ? 1 : 0;
  }

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
