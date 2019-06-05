import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import RaisedButton from 'material-ui/RaisedButton';

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
      <MuiThemeProvider>
        <div>
          <InputLabel htmlFor="age-simple">Select Type of Workout</InputLabel>
          <Select
            value={values.workoutType}
            onChange={handleChange('workoutType')}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Chest">Chest</MenuItem>
            <MenuItem value="Back">Back</MenuItem>
            <MenuItem value="Shoulders">Shoulders</MenuItem>
            <MenuItem value="Arms">Arms</MenuItem>
            <MenuItem value="Legs">Legs</MenuItem>
            <MenuItem value="Abs">Abs</MenuItem>
          </Select>
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default WorkoutType;
