import React from 'react';
import { withRouter } from 'react-router-dom';

const ExerciseDetail = props => (
  <div>
    <h3>{props.location.state.videoInfo.name}</h3>
    <iframe src={props.location.state.videoInfo.videoUrl} frameBorder="0" />
    <button onClick={() => props.history.goBack()} />
  </div>
);

export default withRouter(ExerciseDetail);
