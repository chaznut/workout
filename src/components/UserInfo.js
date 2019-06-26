import React, { Component } from 'react';

export class UserInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <input placeholder="Enter Your Name" onChange={handleChange('name')} />
        <button style={styles.button} onClick={this.continue}>
          Continue
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

export default UserInfo;
