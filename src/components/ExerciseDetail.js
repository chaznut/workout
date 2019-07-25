import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../App.module.scss';

const ExerciseDetail = props => (
  <div >
    <h3>{props.location.state.videoInfo.name}</h3>
    <video autoplay controls width="320" height="320">


    <source src="https://videos.bodybuilding.com/video/mp4/28000/28871m.mp4"
            type="video/mp4"/>

    Sorry, your device doesn't support embedded videos.
    </video>

    <button onClick={() => props.history.goBack()}>Back</button>
  </div>
);

export default withRouter(ExerciseDetail);
