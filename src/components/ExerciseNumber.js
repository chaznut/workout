import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ExerciseNumber extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="age-simple">Select # of exercises</label>
        <select
          value={values.exerciseNumber}
          onChange={handleChange('exerciseNumber')}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
        </select>
        <Link to="/workoutType">
          <button label="Continue">Back</button>
        </Link>
        <Link to="/finalWorkout">
          <button label="Continue">Continue</button>
        </Link>
      </div>
    );
  }
}

export default ExerciseNumber;
