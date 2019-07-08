import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class WorkoutType extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="workoutType">Select Type of Workout</label>
        <select
          value={values.workoutType}
          onChange={handleChange('workoutType')}
        >
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Arms">Arms</option>
          <option value="Legs">Legs</option>
          <option value="Abs">Abs</option>
        </select>
        <br />
        <Link to="/">
          <button style={styles.button} onClick={this.back}>
            Back
          </button>
        </Link>
        <Link to="/exerciseNumber">
          <button style={styles.button} onClick={this.continue}>
            Continue
          </button>
        </Link>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default WorkoutType;
