import React, { Component } from 'react';
import Exercise from './Exercise';
import { Link } from 'react-router-dom';

export class FinalWorkout extends Component {
  componentDidMount() {
    if (this.props.workoutArray.length === 0) {
      this.props.handleSubmit();
    }
  }

  render() {
    return (
      <div className="workoutContainer">
        <h3>{this.props.name}, here is your workout:</h3>
        <ul>
          {this.props.workout.map(exercise => (
            <li key={this.props.workout.indexOf(exercise)}>
              <Exercise
                key={this.props.workout.indexOf(exercise)}
                name={exercise.name}
                exerciseUrl={exercise.url}
                videoUrl={exercise.videoUrl}
              />
            </li>
          ))}
        </ul>
        <button className="shuffleButton" onClick={this.props.onClick}>
          Shuffle
        </button>
        <Link to="/">
          <button className="shuffleButton" onClick={this.props.handleReset}>
            Reset
          </button>
        </Link>
      </div>
    );
  }
}

export default FinalWorkout;
