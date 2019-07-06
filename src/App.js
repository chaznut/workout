import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserForm from './components/UserForm';
import ExerciseDetail from './components/ExerciseDetail';
import logo from './assets/logo.png';
import styles from './App.module.scss';

const App = () => {
  return (
    <Router>
      <main className={styles.App}>
        <div>
          <h1>ShuffleFit</h1>
          <img src={logo} alt="Flexed Arm" width="50" />
        </div>
        <Switch>
          <Route exact path="/" component={UserForm} />
          <Route path="exercises/:id" component={ExerciseDetail} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
