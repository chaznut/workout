import React, { Component } from 'react';
import UserInfo from './UserInfo';
import WorkoutType from './WorkoutType';
import ExerciseNumber from './ExerciseNumber';
import FinalWorkout from './FinalWorkout';

import abs from '../../data/abs';
import legs from '../../data/legs';
import arms from '../../data/arms';
import shoulders from '../../data/shoulders';
import chest from '../../data/chest';
import back from '../../data/back';

// import shuffler from '../../util/shuffler';

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
    this.setState({
      [input]: e.target.value
    });
  };

  handleSubmit = () => {
    const { workoutType, exerciseNumber } = this.state;

    if (workoutType === 'Chest') {
      for (let i = 0; i < exerciseNumber; i++) {
        let exercise = chest[Math.floor(Math.random() * chest.length)];
        this.state.workout.includes(exercise.name)
          ? console.log('Found duplicates')
          : this.setState(prevState => ({
              workout: [...prevState.workout, exercise.name]
            }));
      }
    } else if (workoutType === 'Back') {
      for (let i = 0; i < exerciseNumber; i++) {
        let exercise = back[Math.floor(Math.random() * back.length)];
        this.state.workout.includes(exercise.name)
          ? console.log('Found duplicates')
          : this.setState(prevState => ({
              workout: [...prevState.workout, exercise.name]
            }));
      }
    } else if (workoutType === 'Shoulders') {
      for (let i = 0; i < exerciseNumber; i++) {
        let exercise = shoulders[Math.floor(Math.random() * shoulders.length)];
        this.state.workout.includes(exercise.name)
          ? console.log('Found duplicates')
          : this.setState(prevState => ({
              workout: [...prevState.workout, exercise.name]
            }));
      }
    } else if (workoutType === 'Legs') {
      for (let i = 0; i < exerciseNumber; i++) {
        let exercise = legs[Math.floor(Math.random() * legs.length)];
        this.state.workout.includes(exercise.name)
          ? console.log('Found duplicates')
          : this.setState(prevState => ({
              workout: [...prevState.workout, exercise.name]
            }));
      }
    } else if (workoutType === 'Arms') {
      for (let i = 0; i < exerciseNumber; i++) {
        let exercise = arms[Math.floor(Math.random() * arms.length)];
        this.state.workout.includes(exercise.name)
          ? console.log('Found duplicates')
          : this.setState(prevState => ({
              workout: [...prevState.workout, exercise.name]
            }));
      }
    } else {
      for (let i = 0; i < exerciseNumber; i++) {
        let exercise = abs[Math.floor(Math.random() * abs.length)];
        this.state.workout.includes(exercise.name)
          ? console.log('Found duplicates')
          : this.setState(prevState => ({
              workout: [...prevState.workout, exercise.name]
            }));
      }
    }
  };

  render() {
    const { step, name, workoutType, exerciseNumber, workout } = this.state;
    const values = { name, workoutType, exerciseNumber, workout };

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
          />
        );
    }
  }
}

export default UserForm;
