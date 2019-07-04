import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';

export class ExerciseNumber extends Component {
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

        <button label="Continue" style={styles.button} onClick={this.continue}>
          Continue
        </button>
        <button label="Continue" style={styles.button} onClick={this.back}>
          Back
        </button>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default ExerciseNumber;
