import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';

export class FinalWorkout extends Component {
  componentDidMount() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3>{this.props.name}, here is your workout:</h3>
          <List>
            {this.props.workout.map(exercise => (
              <ListItem
                key={this.props.workout.indexOf(exercise)}
                primaryText={exercise}
              />
            ))}
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FinalWorkout;
