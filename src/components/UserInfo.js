import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
  render() {
    const { values, handleChange, buttonDisabled } = this.props;

    return (
      <div>
        <input placeholder="Enter Your Name" onChange={handleChange('name')} />
        <Link to="/workoutType">
          <button disabled={buttonDisabled} style={styles.button}>
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

export default UserInfo;
