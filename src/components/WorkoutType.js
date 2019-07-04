import React, { Component } from 'react';

export class WorkoutType extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

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
        <button style={styles.button} onClick={this.continue}>
          Continue
        </button>
        <button style={styles.button} onClick={this.back}>Back</button>
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
