import React, { Component } from 'react';

export class FinalWorkout extends Component {
  componentDidMount() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <div className="workoutContainer">
        <h3>{this.props.name}, here is your workout:</h3>
        <ul>
          {this.props.workout.map(exercise => (
            <li key={this.props.workout.indexOf(exercise)}> {exercise}</li>
          ))}
        </ul>
        <button className="shuffleButton" onClick={this.props.onClick}>
          Shuffle
        </button>
        <button className="shuffleButton" onClick={this.props.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default FinalWorkout;
