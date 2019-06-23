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

  shuffle = workoutArray => {
    const { workoutType } = this.state;

    if (workoutType === 'Chest') workoutArray = chest;
    if (workoutType === 'Back') workoutArray = back;
    if (workoutType === 'Shoulders') workoutArray = shoulders;
    if (workoutType === 'Arms') workoutArray = arms;
    if (workoutType === 'Legs') workoutArray = legs;
    if (workoutType === 'Abs') workoutArray = abs;

    const mapNames = workoutArray.map(workout => workout.name);

    for (let i = mapNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mapNames[i], mapNames[j]] = [mapNames[j], mapNames[i]];
    }
    const shuffledWorkout = mapNames.slice(0, this.state.exerciseNumber);
    this.setState({ workout: shuffledWorkout });
  };

  handleSubmit = () => {
    const { workoutType, exerciseNumber } = this.state;
    let exerciseTempArray = [];
    let i = 0;
    if (workoutType === 'Chest') {
      while (i < exerciseNumber) {
        let exercise = chest[Math.floor(Math.random() * chest.length)];
        if (!this.checkDups(exerciseTempArray, exercise.name)) {
          exerciseTempArray = exerciseTempArray.concat(exercise.name);
          i++;
        }
      }
    } else if (workoutType === 'Back') {
      while (i < exerciseNumber) {
        let exercise = back[Math.floor(Math.random() * back.length)];
        if (!this.checkDups(exerciseTempArray, exercise.name)) {
          exerciseTempArray = exerciseTempArray.concat(exercise.name);
          i++;
        }
      }
    } else if (workoutType === 'Shoulders') {
      while (i < exerciseNumber) {
        let exercise = shoulders[Math.floor(Math.random() * shoulders.length)];
        if (!this.checkDups(exerciseTempArray, exercise.name)) {
          exerciseTempArray = exerciseTempArray.concat(exercise.name);
          i++;
        }
      }
    } else if (workoutType === 'Legs') {
      while (i < exerciseNumber) {
        let exercise = legs[Math.floor(Math.random() * legs.length)];
        if (!this.checkDups(exerciseTempArray, exercise.name)) {
          exerciseTempArray = exerciseTempArray.concat(exercise.name);
          i++;
        }
      }
    } else if (workoutType === 'Arms') {
      while (i < exerciseNumber) {
        let exercise = arms[Math.floor(Math.random() * arms.length)];
        if (!this.checkDups(exerciseTempArray, exercise.name)) {
          exerciseTempArray = exerciseTempArray.concat(exercise.name);
          i++;
        }
      }
    } else {
      while (i < exerciseNumber) {
        let exercise = abs[Math.floor(Math.random() * abs.length)];
        if (!this.checkDups(exerciseTempArray, exercise.name)) {
          exerciseTempArray = exerciseTempArray.concat(exercise.name);
          i++;
        }
      }
    }
    this.setState({
      workout: exerciseTempArray
    });
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
          />
        );
      default:
        return null;
    }
  }
}

export default UserForm;
