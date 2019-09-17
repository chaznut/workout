import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../App.module.scss';

const ExerciseDetail = props => (
  <div className={styles.iframeContainer}>
    <h3>{props.location.state.videoInfo.name}</h3>

    <video autoPlay controls width="320" height="320">

      title={props.location.state.videoInfo.name}
      <source src={props.location.state.videoInfo.videoUrl}
        type="video/mp4" />

      Sorry, your device doesn't support embedded videos.
  </video>

    <button onClick={() => props.history.goBack()}>Back</button>
  </div>
);

export default withRouter(ExerciseDetail);
