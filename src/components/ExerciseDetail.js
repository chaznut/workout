import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../App.module.scss';

const ExerciseDetail = props => (
  <div className={styles.iframeContainer}>
    <h3>{props.location.state.videoInfo.name}</h3>
    <iframe
      title={props.location.state.videoInfo.name}
      src={props.location.state.videoInfo.videoUrl}
      frameBorder="0"
      allowFullScreen
    />
    <button onClick={() => props.history.goBack()}>Back</button>
  </div>
);

export default withRouter(ExerciseDetail);
