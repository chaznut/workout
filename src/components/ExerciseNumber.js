import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import RaisedButton from 'material-ui/RaisedButton';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../theme';

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
      <MuiThemeProvider theme={theme}>
        <div>
          <InputLabel htmlFor="age-simple">Select # of exercises</InputLabel>
          <Select
            value={values.exerciseNumber}
            onChange={handleChange('exerciseNumber')}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="1">One</MenuItem>
            <MenuItem value="2">Two</MenuItem>
            <MenuItem value="3">Three</MenuItem>
            <MenuItem value="4">Four</MenuItem>
            <MenuItem value="5">Five</MenuItem>
            <MenuItem value="6">Six</MenuItem>
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

export default ExerciseNumber;
