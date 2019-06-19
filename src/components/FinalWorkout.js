import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Button from '@material-ui/core/Button';

export class FinalWorkout extends Component {
  componentDidMount() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="workoutContainer">
          <h3>{this.props.name}, here is your workout:</h3>
          <List>
            {this.props.workout.map(exercise => (
              <ListItem
                key={this.props.workout.indexOf(exercise)}
                primaryText={exercise}
              />
            ))}
          </List>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="shuffleButton"
            onClick={this.props.onClick}
          >
            Shuffle
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FinalWorkout;
