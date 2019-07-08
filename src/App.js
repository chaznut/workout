import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserInfo from './components/UserInfo';
import ExerciseDetail from './components/ExerciseDetail';
import WorkoutType from './components/WorkoutType';
import ExerciseNumber from './components/ExerciseNumber';
import FinalWorkout from './components/FinalWorkout';

import logo from './assets/logo.png';
import styles from './App.module.scss';

import abs from './data/abs';
import legs from './data/legs';
import arms from './data/arms';
import shoulders from './data/shoulders';
import chest from './data/chest';
import back from './data/back';
import Exercise from './components/Exercise';

export class App extends Component {
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
    const { name, workoutType, exerciseNumber, workout } = this.state;
    const values = { name, workoutType, exerciseNumber, workout };
    return (
      <Router>
        <main className={styles.App}>
          <div>
            <h1>ShuffleFit</h1>
            <img src={logo} alt="Flexed Arm" width="50" />
          </div>

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <UserInfo
                  buttonDisabled={name === '' ? true : false}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              )}
            />
            <Route
              exact
              path="/workoutType"
              render={() => (
                <WorkoutType
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              )}
            />
            <Route
              exact
              path="/exerciseNumber"
              render={() => (
                <ExerciseNumber
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              )}
            />
            <Route
              exact
              path="/finalWorkout"
              render={() => (
                <FinalWorkout
                  name={this.state.name}
                  workout={this.state.workout}
                  onClick={() => this.shuffle(this.state.workoutType)}
                  handleReset={this.handleReset}
                  handleSubmit={this.handleSubmit}
                  workoutArray={this.state.workout}
                />
              )}
            />
            <Route
              exact
              path="/exercises/:id"
              render={() => <ExerciseDetail />}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
