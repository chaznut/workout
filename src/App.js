import React from 'react';
import UserForm from './components/UserForm';
import logo from './assets/logo.png';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <div>
        <h1>ShuffleFit</h1>
        <img src={logo} alt="Flexed Arm" width="50" />
      </div>
      <UserForm />
    </div>
  );
};

export default App;
