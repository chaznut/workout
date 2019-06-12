import React from 'react';
import UserForm from './components/UserForm';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <img src="https://i.imgur.com/ozG3WX6.png" alt="Flexed Arm" width="200" />
      <h1>ShuffleFit</h1>
      <UserForm />
    </div>
  );
};

export default App;
