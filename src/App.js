import React from 'react';
import UserForm from './components/UserForm';
import logo from './assets/logo.png';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <img src={logo} alt="Flexed Arm" width="175" />
      <h1>ShuffleFit</h1>
      <UserForm />
    </div>
  );
};

export default App;
