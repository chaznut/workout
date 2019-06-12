import React from 'react';
import UserForm from './components/UserForm';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ShuffleFit</h1>
      <UserForm />
    </div>
  );
};

export default App;
